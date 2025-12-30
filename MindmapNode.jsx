import React from 'react';
import { getNodeSize } from '../utils/layoutCalculator';

const MindmapNode = ({ 
  node, 
  position, 
  onNodeClick, 
  onNodeHover, 
  selectedId, 
  hoveredId, 
  collapsedNodes 
}) => {
  const isSelected = selectedId === node.id;
  const isHovered = hoveredId === node.id;
  const hasChildren = node.children && node.children.length > 0;
  const size = getNodeSize(node);
  const isRoot = node.size === 'large';

  const renderLabel = () => {
    const words = node.label.split(' ');
    
    if (words.length <= 2) {
      return words.map((word, i) => (
        <tspan key={i} x={size.width / 2} dy={i === 0 ? 0 : '1.1em'}>
          {word}
        </tspan>
      ));
    }
    
    const midPoint = Math.ceil(words.length / 2);
    const line1 = words.slice(0, midPoint).join(' ');
    const line2 = words.slice(midPoint).join(' ');
    
    return (
      <>
        <tspan x={size.width / 2} dy={0}>{line1}</tspan>
        <tspan x={size.width / 2} dy="1.1em">{line2}</tspan>
      </>
    );
  };

  return (
    <g transform={`translate(${position.x}, ${position.y})`}>
      {/* Node ellipse */}
      <ellipse
        cx={size.width / 2}
        cy={size.height / 2}
        rx={size.width / 2}
        ry={size.height / 2}
        fill={node.color}
        stroke={isSelected ? '#fff' : isHovered ? '#fff' : 'none'}
        strokeWidth={isSelected || isHovered ? 3 : 0}
        style={{
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          filter: isHovered || isSelected ? 'brightness(1.1)' : 'brightness(1)'
        }}
        onMouseEnter={() => onNodeHover(node)}
        onMouseLeave={() => onNodeHover(null)}
        onClick={() => onNodeClick(node)}
      />
      
      {/* Node label */}
      <text
        x={size.width / 2}
        y={size.height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={isRoot ? '#1e293b' : '#000'}
        fontSize={size.fontSize}
        fontWeight={isRoot ? '600' : '500'}
        style={{
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        {renderLabel()}
      </text>
      
      {/* Expand/collapse indicator */}
      {hasChildren && (
        <circle
          cx={size.width / 2}
          cy={size.height + 10}
          r={8}
          fill="#334155"
          stroke="#fff"
          strokeWidth={2}
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            onNodeClick(node);
          }}
        />
      )}
    </g>
  );
};

export default MindmapNode;