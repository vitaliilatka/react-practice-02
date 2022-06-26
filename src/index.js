import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const painting = {
  id: "id-1",
  url:
    "http",
  title: "art abstract",
  price: 500,
  autor: {
    tag: "ractapopulous",
    url: "pixabay",
  },
  quantuty: 10,
};

const template = (
  <div>
    <img src={painting.url} alt={painting.title}/>
    <h2>{painting.title}</h2>
    <p>Autor: <a href={painting.autor.url}>{painting.autor.tag}</a></p>
    <p>Price {painting.price} credits</p>
    <button type='button'>add to cart</button>
  </div>
);

console.log(template);