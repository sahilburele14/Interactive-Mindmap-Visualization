# Interactive Mindmap Visualization

A fully interactive, data-driven mindmap visualization built with React. This project demonstrates hierarchical data visualization with rich user interactions.

## 🚀 Features

- **Data-Driven Architecture**: Complete mindmap generated from JSON
- **Interactive Navigation**: Click to expand/collapse nodes
- **Hover Tooltips**: Quick information on hover
- **Detailed Side Panel**: Comprehensive node information
- **Export Functionality**: Download mindmap data as JSON
- **Responsive Design**: Clean, modern UI

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/mindmap-visualization.git

# Navigate to project directory
cd mindmap-visualization

# Install dependencies
npm install

# Start development server
npm start
```

## 🎯 Usage

1. **View the mindmap**: The visualization loads automatically
2. **Interact with nodes**:
   - Click to expand/collapse children
   - Hover for quick summary
   - Select for detailed information
3. **Use toolbar controls**:
   - Expand/Collapse All
   - Drill Down/Up
   - Fit View
   - Download data

## 📊 Data Structure

The mindmap is powered by `src/data/mindmapData.json`. Structure:
```json
{
  "id": "unique-id",
  "label": "Node Label",
  "summary": "Detailed description",
  "color": "#HexColor",
  "size": "large|normal",
  "children": [...]
}
```

## 🛠️ Customization

### Change Data
Edit `src/data/mindmapData.json` to update the mindmap content.

### Modify Colors
Update color values in the JSON data file.

### Adjust Layout
Modify `src/utils/layoutCalculator.js` for different layouts.

## 📁 Project Structure
````
mindmap-visualization/
├── src/
│   ├── components/       # React components
│   ├── data/            # JSON data file
│   ├── utils/           # Helper functions
│   ├── styles/          # Style definitions
│   ├── App.jsx          # Main component
│   └── index.js         # Entry point
├── public/
│   └── index.html       # HTML template
├── package.json
└── README.md


🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.


📝 License
MIT License - feel free to use this project for learning or commercial purposes.


👤 Author
Sahil Pravin Burele - Frontend Developer Intern Assignment


🙏 Acknowledgments

Built with React and Lucide Icons
Inspired by interactive knowledge graphs


**Screenshot** 
