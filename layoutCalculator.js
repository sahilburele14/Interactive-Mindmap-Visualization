/**
 * Calculate positions for all nodes in the mindmap
 * @param {Object} node - Root node of the mindmap
 * @param {Set} collapsedNodes - Set of collapsed node IDs
 * @returns {Object} - Object containing positions and connections arrays
 */
export const calculateLayout = (node, collapsedNodes = new Set()) => {
  const positions = [];
  const connections = [];
  
  const rootPos = { x: 600, y: 400 };
  
  // Add root node
  positions.push({ node, position: rootPos, depth: 0 });
  
  // Process children if not collapsed
  if (node.children && !collapsedNodes.has(node.id)) {
    const angleStep = (2 * Math.PI) / node.children.length;
    
    node.children.forEach((child, i) => {
      const childAngle = angleStep * i;
      const childRadius = 250;
      const childPos = {
        x: rootPos.x + Math.cos(childAngle) * childRadius,
        y: rootPos.y + Math.sin(childAngle) * childRadius
      };
      
      positions.push({ node: child, position: childPos, depth: 1 });
      connections.push({ from: rootPos, to: childPos });
      
      // Process second level children
      if (child.children && !collapsedNodes.has(child.id)) {
        const subAngleStep = Math.PI / 3;
        const startAngle = childAngle - subAngleStep * (child.children.length - 1) / 2;
        
        child.children.forEach((subChild, j) => {
          const subAngle = startAngle + subAngleStep * j;
          const subRadius = 180;
          const subPos = {
            x: childPos.x + Math.cos(subAngle) * subRadius,
            y: childPos.y + Math.sin(subAngle) * subRadius
          };
          
          positions.push({ node: subChild, position: subPos, depth: 2 });
          connections.push({ from: childPos, to: subPos });
          
          // Process third level children
          if (subChild.children && !collapsedNodes.has(subChild.id)) {
            const subSubAngleStep = Math.PI / 4;
            const subStartAngle = subAngle - subSubAngleStep * (subChild.children.length - 1) / 2;
            
            subChild.children.forEach((subSubChild, k) => {
              const subSubAngle = subStartAngle + subSubAngleStep * k;
              const subSubRadius = 120;
              const subSubPos = {
                x: subPos.x + Math.cos(subSubAngle) * subSubRadius,
                y: subPos.y + Math.sin(subSubAngle) * subSubRadius
              };
              
              positions.push({ node: subSubChild, position: subSubPos, depth: 3 });
              connections.push({ from: subPos, to: subSubPos });
            });
          }
        });
      }
    });
  }
  
  return { positions, connections };
};

/**
 * Get node size based on its properties
 * @param {Object} node - The node object
 * @returns {Object} - Width, height, and fontSize
 */
export const getNodeSize = (node) => {
  if (node.size === 'large') {
    return { width: 180, height: 180, fontSize: '20px' };
  }
  if (node.color === '#DDD6FE') {
    return { width: 100, height: 60, fontSize: '12px' };
  }
  if (node.color === '#FCD34D') {
    return { width: 120, height: 70, fontSize: '13px' };
  }
  return { width: 140, height: 90, fontSize: '14px' };
};

/**
 * Collect all node IDs from the tree
 * @param {Object} node - Root node
 * @returns {Set} - Set of all node IDs
 */
export const collectAllNodeIds = (node) => {
  const allNodeIds = new Set();
  
  const collectIds = (currentNode) => {
    if (currentNode.children && currentNode.children.length > 0) {
      allNodeIds.add(currentNode.id);
      currentNode.children.forEach(collectIds);
    }
  };
  
  collectIds(node);
  return allNodeIds;
};