import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);

  const handlePlaceCircle = (e) => {
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }]);
    console.log(points);
  };
  const handleUndo = () => {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  };
  const handleRedo = () => {
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  };
  return (
    <>
      <div className="buttonContainer">
        <p>
          Clicking somewhere on this page will create a circle. You can use
          these buttons to perform some functions.
        </p>
        <div className="buttons">
          <button disabled={points.length === 0} onClick={handleUndo}>
            Undo
          </button>
          <button disabled={popped.length === 0} onClick={handleRedo}>
            Redo
          </button>
        </div>
      </div>
      <div className="App" onClick={handlePlaceCircle}>
        {points.map((point, index) => (
          <div
            key={index}
            className="point"
            style={{ left: point.x - 5 + "px", top: point.y - 5 + "px" }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
