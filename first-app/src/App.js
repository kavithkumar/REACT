import logo from './logo.svg';
import './App.css';
import Hello from './HelloComponent';
import EvenOrOdd from './EvenOrOdd';
import ListComponent from './Components/ListComponent';
import ProductComponent from './Components/ProductComponent';

function App() {
  //java script code
  let name = 'john'
  function getLength() {
    return name.length;
  }
  function greetMe() {
    alert('Welcome ' + name)
  }
  let messageToChild = 'This is the message from App'
  let date = new Date().getFullYear();
  let names = ['smith', 'clara', 'john', 'jade', 'jack', 'joey'];
  let fruits = ['apple', 'banana', 'grapes', 'papaya'];
  let namelist = 'NamesList';
  let products={'name':'BOULT','type':'Bluetooth','price':'2000','quantity':'20'}
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* Hello world!!! */}

      <b className="App-header">Hello {name}!!! <br></br>
        the length of the name is {getLength()}
        <button onClick={greetMe}>Click Me</button>
        <Hello title={messageToChild} date={date} />
        <EvenOrOdd></EvenOrOdd>
        <ListComponent data={names} title={namelist}></ListComponent>
        <ListComponent data={fruits} title='FruitsList'></ListComponent>
        <ProductComponent data={products} title='ProductsList'></ProductComponent>
      </b>
    </div>

  );
}

export default App;
