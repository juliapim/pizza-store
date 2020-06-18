import React, { createContext, useState } from 'react';

export const PizzasContext = createContext();

const PizzasProvider = (props) => {

    console.log("Props:", props.children)
  
    const [ pizzas, setPizzas ] = useState([
      { title: 'Caprese', ingredients: 'Tomatoes, basil, cheese', image:'https://cdn.pixabay.com/photo/2016/01/19/18/01/pizza-1150031_1280.jpg', price:500},
      { title: 'Portuguesa', ingredients: 'Everything on it' , image:'https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699_1280.jpg', price:800},
      { title: 'Calabresa', ingredients: 'Calabresa, loooots of onion and cheeeeese', image:'https://cdn.pixabay.com/photo/2017/08/02/12/38/pepperoni-2571392_1280.jpg' , price:1800}
    ]);

    

  
    let sharedData = { 
      message: "Hello Pizza Lover!",
      pizzas,
     
    }
  
    return (
      <PizzasContext.Provider value={sharedData}>
        { props.children }
      </PizzasContext.Provider>
    )
  }
  export default PizzasProvider