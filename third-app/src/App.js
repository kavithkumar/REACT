import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Child from './Components/ChildComponent';
import PersonTable from './Components/PersonTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDown from './Components/Dropdown';
import BookDetails from './Components/Bookdetails';
function App() {
  let [name, setName] = useState('')
  let [filter,setFilter]=useState('All')

  let nameList = ["John", "James", "Jade", "Clara", "Jack", "Mia", "Jase"]
  let persons = [{ 'id': 1, 'name': 'jade', 'age': 20, 'gender': 'm' ,'city':'Chennai'},
  { 'id': 2, 'name': 'jack', 'age': 22, 'gender': 'm' ,'city':'Delhi'},
  { 'id': 3, 'name': 'clara', 'age': 20, 'gender': 'f' ,'city':'Chennai'},
  { 'id': 4, 'name': 'smith', 'age': 21, 'gender': 'm' ,'city':'Mumbai'},
  { 'id': 5, 'name': 'joe', 'age': 20, 'gender': 'f' ,'city':'Mumbai'},
  { 'id': 6, 'name': 'missy', 'age': 23, 'gender': 'f' ,'city':'Delhi'}]
  persons = persons.filter(
    (p) => p.name.toLowerCase().includes(name.toLowerCase())
      || p.age === Number(name)
      || p.id === Number(name)
      || p.gender.toLowerCase() === (name.toLowerCase())
  );

  const handleFilter=(e=>{
    setFilter(e.target.value)
    console.log(e.target.value)
  })
  persons=persons.filter((p)=>{
    if(filter==='All')
    return true;
    
    else return p.city===filter;
  })
  
  // nameList = nameList.filter((n) => n.toLowerCase().includes(name.toLowerCase()));
  const handleChange = (event) => {
    console.log('Child component is calling the function')
    setName(event.target.value)
  }


  return (
    <div className="App">
      {/* <Child data={name} func={handleChange}></Child><br></br>
      {nameList.map((n) => (<>{n}<br></br></>))}
      <PersonTable data={persons}></PersonTable><br></br>
      Select city:<DropDown filter={filter} handleFilter={handleFilter} ></DropDown><br></br> */}

      <BookDetails></BookDetails>

      
    </div>
  );
}

export default App;
