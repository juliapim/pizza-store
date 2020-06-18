import React, { useContext } from 'react';
import './App.scss';
import { PizzasContext } from './store/PizzasContext';
import { useState } from 'react';

function App() {
  let { message, pizzas, addPizza} = useContext(PizzasContext);
  let pizzaList = pizzas.map((pizza) => 
  <div  className='pizzas-list' key={pizza.title}>
    <p>{pizza.title}</p>
    
    <p>{pizza.ingredients}</p>
    <p> € {pizza.price}</p>
    <img className='image-pizza' src={pizza.image}></img>
    <button onClick={addPizza}>Take it, it is almost for free!</button>
    </div>
);
  return (
    <div className="App">
      <header className="App-header">
      {message}
      </header>
      <main>
        { pizzaList }
     
      </main>
    </div>
  );
}

export default App;
