import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// const baseURL = `http://localhost:5000/chain`;

function App() {
	const [data, setData] = useState([]);
	const FetchData = () => {
		axios
			.get(`http://localhost:5000/chain`)
			.then(({ res }) => {
				setData({ chain: res.chain });
			})
			.catch((err) => {
				return err.statusText;
			});
	};
	useEffect(() => FetchData(), []);
	console.log('data', data);
	return (
		<div className='App'>
			<h1>block</h1>

			{data.map((block) => {
				return <div>{block}</div>;
			})}
		</div>
	);
}

export default App;
