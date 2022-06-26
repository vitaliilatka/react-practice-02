import React from "react";
import propTypes from "prop-types";


const Painting = ({url, title, profileUrl, tag, price, quantity}) => (
    <div>
        <img src={url} alt={title}/>
        <h2>{title}</h2>
        <p>Autor: <a href={profileUrl}>{tag}</a></p>
        <p>Pricelist: {price} credits</p>
        <p>Aviability: {quantity < 10 ? 'ends' : 'aviable'}</p>
        <button type='button'>add to cart</button>
    </div>
);

Painting.defaultProps = {
    url: 'httpsss',
};

Painting.propTypes = {
    url: propTypes.string,
    title: propTypes.string.isRequired,
    profileUrl: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    quantity: propTypes.number.isRequired
};

export default Painting;