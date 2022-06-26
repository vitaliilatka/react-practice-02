import React from 'react';
import Painting from "./Painting";
import PropTypes from "prop-types";


const PaintingList = ({paintings}) => (
    <ul>                
        {paintings.map(({id, url, title, price, autor, quantity}) => (
            <li key={id}>
                <Painting 
                    url={url} 
                    title={title} 
                    price={price}
                    profileUrl={autor.url}
                    tag={autor.tag}
                    quantity={quantity}
                />
            </li>
        ))}                                 
    </ul>            
);

PaintingList.PropTypes = {
    paintings: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired,
};

export default PaintingList;