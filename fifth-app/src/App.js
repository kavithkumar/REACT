import logo from './logo.svg';
import './App.css';
import Parent from './Components/parent';
import Color from './Components/Backgroundcolor';
import Panel from './Components/Panel';
import { ThemeProvider } from './Components/ThemeProvider';
import Content from './Components/Content';

function App() {
  return (
    <>
      <div className="App">
        {/* <div style={{ border: 'solid 1px red', padding: '10px' }}>
          <b>App Component</b><br></br>
          <Color></Color>
        </div>
        <Panel>
          <button>Sign Up</button>
          <button>Sign Out</button>
        </Panel> */}
        <ThemeProvider>
          <Content></Content>
        </ThemeProvider>
      </div></>
  );
}

export default App;
