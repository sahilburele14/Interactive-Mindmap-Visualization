export const buttonStyle = {
  background: '#0ea5e9',
  color: '#fff',
  border: 'none',
  padding: '10px 16px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'all 0.2s',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
};

export const toolbarContainerStyle = {
  position: 'absolute',
  top: 20,
  left: 20,
  zIndex: 10,
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap'
};

export const mainContainerStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  background: '#1e293b',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  overflow: 'hidden'
};

export const canvasContainerStyle = {
  flex: 1,
  position: 'relative',
  overflow: 'hidden'
};

export const sidePanelStyle = {
  width: '480px',
  background: '#0f172a',
  padding: '30px',
  overflowY: 'auto',
  color: '#fff',
  borderLeft: '1px solid #334155'
};

export const headerStyle = {
  background: '#6366f1',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '30px'
};

export const tooltipStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#334155',
  color: '#fff',
  padding: '15px 20px',
  borderRadius: '8px',
  maxWidth: '300px',
  pointerEvents: 'none',
  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
  zIndex: 20
};

export const childNodeStyle = {
  background: '#334155',
  padding: '12px 15px',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  border: '1px solid transparent'
};