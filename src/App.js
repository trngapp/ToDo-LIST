
import './App.css';
import React,{useState,useEffect} from 'react';
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import Todo from './Todo'
import db from './Firebase'
import firebase from 'firebase';
function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');
  console.log(input);

  useEffect(()=>{
db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
  setTodos(snapshot.docs.map(doc=>({id: doc.id,todo: doc.data().todo})))
})
  },[]);
  const addtodo = (event) =>{
    event.preventDefault(); // stop the page from refreshing
db.collection('todos').add({
  todo: input,
  timestamp : firebase.firestore.FieldValue.serverTimestamp()
})
setTodos([...todos,input]);
setInput(''); // clear up the input
  }
  return (
    <div className="App">
      <h1> Todo App </h1>
      <form>
     { /*<input value={input} onChange={event => setInput(event.target.value)}/>*/}
      <FormControl>
        <InputLabel> Write todo list</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addtodo} variant="contained" color="primary">
      Todo list
      </Button>
      {/*<button  type="submit" onClick={addtodo}></button>*/}
      </form>

      <ul>
        {todos.map(todo =>(
         <Todo todo={todo}/>

        ))}

      </ul>
    </div>
  );
}

export default App;
