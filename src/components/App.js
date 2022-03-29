import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import '../App.css';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])

  return (<React.Fragment>
            <div>
              <Banner />
            </div>
            <div className='lmj-layout-inner'>
              <Cart cart={cart} updateCart={updateCart} />
              
              <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />   
          </React.Fragment>)
}

export default App;
