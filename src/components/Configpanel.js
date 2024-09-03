import React, { useState } from 'react';
import './configPanel.css';

const ConfigPanel = ({ addTextBox }) => {
  const [text, setText] = useState('');
  const [config, setConfig] = useState({
    x: 100,
    y: 100,
    width: 200,
    height: 50,
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textDecoration: 'none',
    fillColor: '#000000',
    strokeColor: '#000000',
    fontSize: 16,
  });

  const handleAddText = () => {
    if (!text.trim()) {
      alert('Please enter text');
      return;
    }
    addTextBox(text, config);
    setText('');
  };

  const handleConfigChange = (e) => {
    const { name, value } = e.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: name === 'x' || name === 'y' || name === 'width' || name === 'height' || name === 'fontSize' ? Number(value) : value,
    }));
  };

  return (
    <div className="config-panel">
      <h2>Text Configuration</h2>
      <div className="input-group">
        <label>Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
      </div>
      <div className="input-group">
        <label>X Position:</label>
        <input
          type="number"
          name="x"
          value={config.x}
          onChange={handleConfigChange}
        />
      </div>
      <div className="input-group">
        <label>Y Position:</label>
        <input
          type="number"
          name="y"
          value={config.y}
          onChange={handleConfigChange}
        />
      </div>
      <div className="input-group">
        <label>Width:</label>
        <input
          type="number"
          name="width"
          value={config.width}
          onChange={handleConfigChange}
        />
      </div>
      <div className="input-group">
        <label>Height:</label>
        <input
          type="number"
          name="height"
          value={config.height}
          onChange={handleConfigChange}
        />
      </div>
      <div className="input-group">
        <label>Text Align:</label>
        <select name="textAlign" value={config.textAlign} onChange={handleConfigChange}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className="input-group">
        <label>Font Style:</label>
        <select name="fontStyle" value={config.fontStyle} onChange={handleConfigChange}>
          <option value="normal">Normal</option>
          <option value="italic">Italic</option>
          <option value="oblique">Oblique</option>
        </select>
      </div>
      <div className="input-group">
        <label>Font Weight:</label>
        <select name="fontWeight" value={config.fontWeight} onChange={handleConfigChange}>
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
        </select>
      </div>
      <div className="input-group">
        <label>Text Decoration:</label>
        <select name="textDecoration" value={config.textDecoration} onChange={handleConfigChange}>
          <option value="none">None</option>
          <option value="underline">Underline</option>
          <option value="line-through">Line-through</option>
        </select>
      </div>
      <div className="input-group">
        <label>Fill Color:</label>
        <input
          type="color"
          name="fillColor"
          value={config.fillColor}
          onChange={handleConfigChange}
        />
      </div>
      <div className="input-group">
        <label>Stroke Color:</label>
        <input
          type="color"
          name="strokeColor"
          value={config.strokeColor}
          onChange={handleConfigChange}
        />
      </div>
      <div className="input-group">
        <label>Font Size:</label>
        <input
          type="number"
          name="fontSize"
          value={config.fontSize}
          onChange={handleConfigChange}
        />
      </div>
      <button onClick={handleAddText}>Add Text</button>
    </div>
  );
};

export default ConfigPanel;
