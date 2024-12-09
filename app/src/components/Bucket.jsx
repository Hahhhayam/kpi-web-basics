import React from 'react';

const Bucket = ({img, title, price}) => {
    return (
        <div>
            <img src={img} alt={title} />
            <p>{title}</p>
            <p>${price}</p>
        </div>
    )
}

export default Bucket