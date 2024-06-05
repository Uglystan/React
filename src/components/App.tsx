import React from 'react'
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import Footer from './Footer';

function App() : JSX.Element {
	return (
		<div>
			<Banner />
			<Cart />
			<ShoppingList />
			<QuestionForm />
			<Footer />
		</div>
	)
}

export default App