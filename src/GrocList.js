import './App.css';
import React from 'react'
export default function GrocList({groceries, handleDelete}) {

  return (
    groceries.map( grocery => { 
        return <div key={grocery.id}>{grocery.desc}<button onClick={() => handleDelete(grocery.id)}>Delete</button></div>
    })
  );
}

