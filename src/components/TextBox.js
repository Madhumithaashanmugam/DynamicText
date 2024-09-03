import React, { useState } from 'react';
import '../App.css'; 

const TextBox = ({
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
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        textAlign: textAlign,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        textDecoration: textDecoration,
        color: fillColor,
        borderColor: strokeColor,
        fontSize: `${fontSize}px`,
        border: `2px solid ${strokeColor}`,
        zIndex: 10 // Ensure text box is above the video
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
