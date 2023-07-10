import React, { useState } from 'react';

const BoxGenerator = () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color && size) {
      const newBox = {
        color: color,
        size: size
      };
      setBoxes([...boxes, newBox]);
      setColor('');
      setSize('');
    }
  };

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleChangeSize = (e) => {
    setSize(e.target.value);
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input type="text" value={color} onChange={handleChangeColor} />
        </label>
        <label>
          Size:
          <input type="text" value={size} onChange={handleChangeSize} />
        </label>
        <button type="submit">Add Box</button>
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              width: `${box.size}px`,
              height: `${box.size}px`,
              margin: '5px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
