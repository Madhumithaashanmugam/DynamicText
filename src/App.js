import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import './App.css';
import TextBox from './components/TextBox';
import VideoPlayer from './components/VideoPlayer'; // Import the VideoPlayer component
import ConfigPanel from './components/Configpanel';

const App = () => {
  const [textBoxes, setTextBoxes] = useState([]);

  const addTextBox = (text, config) => {
    setTextBoxes([...textBoxes, { id: Date.now(), text, ...config }]);
  };

  const handleResize = (id, data) => {
    setTextBoxes(textBoxes.map(box => 
      box.id === id ? { ...box, width: data.size.width, height: data.size.height } : box
    ));
  };

  const handleTextChange = (id, newText) => {
    setTextBoxes(textBoxes.map(box => 
      box.id === id ? { ...box, text: newText } : box
    ));
  };

  const handleDelete = (id) => {
    setTextBoxes(textBoxes.filter(box => box.id !== id));
  };

  return (
    <div className="app-container">
      <ConfigPanel addTextBox={addTextBox} />
      <VideoPlayer>
        {textBoxes.map((box) => (
          <Draggable
            key={box.id}
            defaultPosition={{ x: box.x, y: box.y }}
            onStop={(e, data) => {
              setTextBoxes(textBoxes.map(b => 
                b.id === box.id ? { ...b, x: data.x, y: data.y } : b
              ));
            }}
          >
            <ResizableBox
              width={box.width}
              height={box.height}
              minConstraints={[50, 50]}
              maxConstraints={[500, 300]}
              onResizeStop={(e, data) => handleResize(box.id, data)}
              className="resizable-box"
            >
              <TextBox 
                id={box.id}
                text={box.text}
                x={box.x}
                y={box.y}
                width={box.width}
                height={box.height}
                textAlign={box.textAlign}
                fontStyle={box.fontStyle}
                fontWeight={box.fontWeight}
                textDecoration={box.textDecoration}
                fillColor={box.fillColor}
                strokeColor={box.strokeColor}
                fontSize={box.fontSize}
                onTextChange={newText => handleTextChange(box.id, newText)}
                onDelete={() => handleDelete(box.id)}
              />
            </ResizableBox>
          </Draggable>
        ))}
      </VideoPlayer>
    </div>
  );
};

export default App;
