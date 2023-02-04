import React from 'react';

const Copyrights = ({copyrights}) => {
    return (
        <div className={"mt-10"}>
            {/*<div>{album?.copyrights[0].text}</div>*/}
            {copyrights ? <div>{copyrights.map(copyright =>
                    <div key={copyright.text}>{copyright.text}</div>)}
                </div>
                : <div>Завантаження...</div>
            }
        </div>
    );
};

export default Copyrights;