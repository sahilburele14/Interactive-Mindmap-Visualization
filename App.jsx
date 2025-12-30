import React, { useState, useRef } from 'react';
import MindmapNode from './components/MindmapNode';
import Toolbar from './components/Toolbar';
import SidePanel from './components/SidePanel';
import HoverTooltip from './components/HoverTooltip';
import { calculateLayout, collectAllNodeIds } from './utils/layoutCalculator';
import { mainContainerStyle, canvasContainerStyle } from './styles/styles';
import mindmapDataImport from './data/mindmapData.json';

const App = () => {
  const [mindmapData] = useState(mindmapDataImport);
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [collapsedNodes, setCollapsedNodes] = useState(new Set());
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isEditMode, setIsEditMode] = useState(false);
  const svgRef = useRef(null);

  const { positions, connections } = calculateLayout(mindmapData, collapsedNodes);

  // Handle node click - expand/collapse
  const handleNodeClick = (node) => {
    if (node.children && node.children.length > 0) {
      setCollapsedNodes(prev => {
        const newSet = new Set(prev);
        if (newSet.has(node.id)) {
          newSet.delete(node.id);
        } else {
          newSet.add(node.id);
        }
        return newSet;
      });
    }
    setSelectedNode(node);
  };

  // Toolbar actions
  const handleExpandAll = () => {
    setCollapsedNodes(new Set());
  };

  const handleCollapseAll = () => {
    const allNodeIds = collectAllNodeIds(mindmapData);
    setCollapsedNodes(allNodeIds);
  };

  const handleDrillDown = () => {
    setCollapsedNodes(new Set([...collapsedNodes].slice(0, -1)));
  };

  const handleDrillUp = () => {
    setCollapsedNodes(new Set([...collapsedNodes, mindmapData.id]));
  };

  const handleFitView = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleToggleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify(mindmapData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
link.download = 'mindmap-data.json';
link.click();
URL.revokeObjectURL(url);
};
return (
<div style={mainContainerStyle}>
{/* Toolbar */}
<Toolbar
     onExpandAll={handleExpandAll}
     onCollapseAll={handleCollapseAll}
     onDrillDown={handleDrillDown}
     onDrillUp={handleDrillUp}
     onFitView={handleFitView}
     onToggleEdit={handleToggleEdit}
     onDownload={handleDownload}
     isEditMode={isEditMode}
   />
  {/* Main Canvas */}
  <div style={canvasContainerStyle}>
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      style={{ 
        background: '#1e293b', 
        cursor: 'grab' 
      }}
    >
      <g transform={`translate(${offset.x}, ${offset.y}) scale(${scale})`}>
        {/* Connections */}
        {connections.map((conn, i) => (
          <line
            key={i}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke="#475569"
            strokeWidth={2}
          />
        ))}
        
        {/* Nodes */}
        {positions.map(({ node, position }) => (
          <MindmapNode
            key={node.id}
            node={node}
            position={position}
            onNodeClick={handleNodeClick}
            onNodeHover={setHoveredNode}
            selectedId={selectedNode?.id}
            hoveredId={hoveredNode?.id}
            collapsedNodes={collapsedNodes}
          />
        ))}
      </g>
    </svg>

    {/* Hover Tooltip */}
    {hoveredNode && !selectedNode && (
      <HoverTooltip node={hoveredNode} />
    )}
  </div>

  {/* Side Panel */}
  <SidePanel
    selectedNode={selectedNode}
    rootNode={mindmapData}
    onNodeSelect={setSelectedNode}
  />
</div>
);
};
export default App;