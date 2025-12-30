import React from 'react';
import { Sun, Edit2 } from 'lucide-react';
import { sidePanelStyle, headerStyle, childNodeStyle } from '../styles/styles';

const SidePanel = ({ selectedNode, rootNode, onNodeSelect }) => {
  const displayNode = selectedNode || rootNode;

  return (
    <div style={sidePanelStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <div>
            <h1 style={{ 
              margin: 0, 
              fontSize: '24px', 
              fontWeight: '600' 
            }}>
              Architecture Documentation
            </h1>
            <p style={{ 
              margin: '5px 0 0 0', 
              opacity: 0.9, 
              fontSize: '14px' 
            }}>
              Interactive component visualization
            </p>
          </div>
          <Sun size={32} color="#fbbf24" />
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{
        background: '#1e293b',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <div style={{ 
          color: '#818cf8', 
          fontSize: '14px', 
          marginBottom: '5px' 
        }}>
          Root
        </div>
      </div>

      {/* Node Details */}
      <div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '15px'
        }}>
          <h2 style={{ 
            color: '#818cf8', 
            fontSize: '28px',
            margin: 0
          }}>
            {displayNode.label}
          </h2>
          <button style={{
            background: 'none',
            border: 'none',
            color: '#f97316',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '14px'
          }}>
            <Edit2 size={16} /> Edit
          </button>
        </div>

        <div style={{ 
          fontWeight: '600', 
          fontSize: '14px',
          marginBottom: '10px',
          color: '#cbd5e1'
        }}>
          SUMMARY:
        </div>
        
        <p style={{ 
          lineHeight: '1.7',
          fontSize: '15px',
          color: '#e2e8f0',
          marginTop: 0
        }}>
          {displayNode.summary}
        </p>

        {/* Child Nodes */}
        {displayNode.children && displayNode.children.length > 0 && (
          <div style={{ marginTop: '30px' }}>
            <div style={{ 
              fontWeight: '600', 
              fontSize: '14px',
              marginBottom: '15px',
              color: '#cbd5e1'
            }}>
              CHILD NODES:
            </div>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '10px' 
            }}>
              {displayNode.children.map(child => (
                <div
                  key={child.id}
                  onClick={() => onNodeSelect(child)}
                  style={childNodeStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = child.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: child.color
                    }} />
                    <span style={{ fontSize: '14px' }}>
                      {child.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidePanel;