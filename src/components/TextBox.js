import React, { useState } from 'react';
import './TextBox.css';

const TextBox = ({
  id,
  text,
  x,
  y,
  width,
  height,
  textAlign,
  fontStyle,
  fontWeight,
  textDecoration,
  fillColor,
  strokeColor,
  fontSize,
  onTextChange,
  onDelete
}) => {
  const [editableText, setEditableText] = useState(text);

  const handleChange = (e) => {
    setEditableText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <div
      className="text-box"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        textAlign,
        fontStyle,
        fontWeight,
        textDecoration,
        color: fillColor,
        borderColor: strokeColor,
        fontSize: `${fontSize}px`,
        border: `2px solid ${strokeColor}`,
      }}
    >
      <input
        type="text"
        value={editableText}
        onChange={handleChange}
        className="text-input"
      />
      <button className="delete-button" onClick={onDelete}>X</button>
    </div>
  );
};

export default TextBox;
