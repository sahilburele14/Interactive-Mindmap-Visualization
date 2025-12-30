import React from 'react';
import { tooltipStyle } from '../styles/styles';

const HoverTooltip = ({ node }) => {
  if (!node) return null;

  return (
    <div style={tooltipStyle}>
      <div style={{ 
        fontWeight: '600', 
        marginBottom: '8px', 
        fontSize: '16px' 
      }}>
        {node.label}
      </div>
      <div style={{ 
        fontSize: '13px', 
        lineHeight: '1.5', 
        opacity: 0.9 
      }}>
        {node.summary}
      </div>
    </div>
  );
};

export default HoverTooltip;