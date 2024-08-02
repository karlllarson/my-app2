import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import React, {useState, useRef} from 'react'
import {v4} from 'uuid';
import GrocList from './GrocList';
import {addElement, deleteElement} from './actions'
function App() {

  const [groceries, groceriesSetter] = useState([]);
  const grocRef = useRef(); 
/**********************************************************
 * REDUX 7: Use the useSelector function to get the current 
  * state of the variable in the REDUX store. 
  **********************************************************/
  const elements = useSelector( state => state.elements);

  // REDUX 8a: Define an alias to the useDispatch function
  const dispatch = useDispatch();

  const handleAdd = () => {
      let grocDesc = grocRef.current.value;
      let element = { id: v4(), desc: grocDesc }
      dispatch( addElement(element))
  }
  const handleDelete = (id) => {
    let newElements = [...elements]
    let element = newElements.find( element => element.id === id)
    dispatch( deleteElement(element)) 
  }
  return (
    <div className="App">
       <input ref={grocRef} type="text" />
       <button onClick={handleAdd}>Add</button> 
       <GrocList groceries={elements} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
