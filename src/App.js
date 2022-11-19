import './App.css';
import { useWindowSize } from '@react-hook/window-size'
import Canvas from './Canvas';

function App() {

  const [width, height] = useWindowSize()

  return (
    <div className="App" style={{overflow: "hidden"}}>
      <Canvas id="myCanvas" height={height} width={width}  style={{backgroundColor: "black"}}/>
    </div>
  );
}

export default App;
