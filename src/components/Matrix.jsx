import React, { useEffect, useState } from 'react';

const Matrix = () => {
  const [mainArray, setMainArray] = useState([]);
  const [indexes, setIndexes] = useState([]);
  const matrix = 5;

  const handleClick = (i, j) => {
    const tempMain = JSON.parse(JSON.stringify(mainArray));
    if (tempMain[i][j] === 0) {
      tempMain[i][j] = 'red';

      const newIndexes = [...indexes];
      newIndexes.push(`${i}_${j}`);
      if (indexes.length >= 2) {
        const removed = newIndexes.shift();
        const arr = removed.split('_');
        tempMain[parseInt(arr[0])][parseInt(arr[1])] = 0;
      }
      setIndexes(newIndexes);
      console.table(tempMain);
      setMainArray(JSON.parse(JSON.stringify(tempMain)));
    }
  };
  useEffect(() => {
    const array = [];
    for (let i = 0; i < matrix - 1; i++) {
      for (let j = 0; j < matrix - 1; j++) {
        if (!array[i]) {
          array[i] = [];
        }
        array[i][j] = 0;
      }
    }

    setMainArray(array);
  }, []);

  return (
    <div>
      <div>Your matrix app</div>
      <div style={{ marginLeft: '300px' }}>
        {mainArray.map((item, index) => {
          return (
            <div style={{ display: 'flex' }}>
              {item.map((childItem, childIndex) => {
                return (
                  <button
                    style={{
                      backgroundColor: childItem === 'red' ? 'red' : 'blue',
                      padding: '40px',
                      margin: '2px',
                    }}
                    onClick={() => handleClick(index, childIndex)}
                  ></button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Matrix;
