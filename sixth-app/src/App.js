import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import WelcomeFunction from './Components/WelcomeFunctionalCom';
import ChangeColor from './Components/ChangeColor';
import Parent from './Components/Parent';
import Count from './Components/Count';

function App() {
  return (
    <>
      <div className="App">
        <Welcome></Welcome><br></br>
        <WelcomeFunction></WelcomeFunction><br></br>
        <ChangeColor></ChangeColor><br></br>
        <Parent></Parent><br></br>
        <Count></Count>
      </div>
    </>
  );
}

export default App;
