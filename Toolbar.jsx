import React from 'react';
import { Download } from 'lucide-react';
import { buttonStyle, toolbarContainerStyle } from '../styles/styles';

const Toolbar = ({ 
  onExpandAll, 
  onCollapseAll, 
  onDrillDown, 
  onDrillUp, 
  onFitView, 
  onToggleEdit,
  onDownload,
  isEditMode
}) => {
  return (
    <div style={toolbarContainerStyle}>
      <button onClick={onExpandAll} style={buttonStyle}>
        👆 Expand All
      </button>
      <button onClick={onCollapseAll} style={buttonStyle}>
        📁 Collapse All
      </button>
      <button onClick={onDrillDown} style={buttonStyle}>
        ⬇️ Drill Down
      </button>
      <button onClick={onDrillUp} style={buttonStyle}>
        ⬆️ Drill Up
      </button>
      <button onClick={onFitView} style={buttonStyle}>
        🎯 Fit View
      </button>
      <button 
        onClick={onToggleEdit} 
        style={{
          ...buttonStyle, 
          background: isEditMode ? '#10b981' : '#0ea5e9'
        }}
      >
        ➕ Add Node
      </button>
      <button onClick={onDownload} style={buttonStyle}>
        <Download size={16} /> Download
      </button>
      <button 
        onClick={() => window.open('https://github.com/yourusername/mindmap', '_blank')} 
        style={{...buttonStyle, background: '#10b981'}}
      >
        📚 Full Documentation
      </button>
    </div>
  );
};

export default Toolbar;