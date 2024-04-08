import logo from './logo.svg';
import './App.css';
import Product from './Components/ProductComponent';
import ObjectDetails from './Components/ObjectDetails';
import GreetUser from './Components/GreetUser';
import Counter from './Components/Counter';
import ColorChanger from './Components/ColorChanger';
import Addition from './Components/Addition';
import Card from './Components/Card';

function App() {
  let data = { 'name': 'xyz', 'price': 2000, 'quantity': 20 }
  let student = { 'name': 'james', 'age': 25, 'grade': 'A' }
  let employee = { 'name': 'jade', 'age': 22, 'department': 'IT' }
  let product = [
    {
      'name': 'Boult',
      'price': 2000,
      'description': 'Bluetooth',
      "img": "http://picsum.photos/280/380"
    },
    { 'name': 'Boat', 'price': 1500, 'description': 'Bluetooth', "img": "http://picsum.photos/282/382" },
    { 'name': 'JBL', 'price': 3000, 'description': 'Bluetooth', "img": "http://picsum.photos/284/384" },
    { 'name': 'Skull Candy', 'price': 4000, 'description': 'Bluetooth', "img": "http://picsum.photos/286/386" }];
  return (<>
    <div className="App">
      <div className='container'>
        {/* <Product data={data}></Product>
      <ObjectDetails data={data}></ObjectDetails>
      <ObjectDetails data={student}></ObjectDetails>
      <ObjectDetails data={employee}></ObjectDetails>
      <GreetUser></GreetUser><br></br>
      <Counter></Counter><br></br>
      <ColorChanger></ColorChanger><br></br>
      <Addition></Addition>
      <button className='btn btn-primary'>Button</button>
      <button className='btn btn-warning'>Button</button>
      <button className='btn btn-danger'>Button</button> */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "20px 20px"
          }}>
          {product.map((product) => (<><div style={{ padding: "20px" }}> <Card data={product}></Card></div></>))}
        </div></div></div></>
  );
}

export default App;
