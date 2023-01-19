import React, {FC} from 'react';
//? url : "https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
const PlayListCover = ({url}) => {
    return (
        <img
            src={url}
            className="rounded shadow-lg"
            alt=""
        />
    );
};

export default PlayListCover;