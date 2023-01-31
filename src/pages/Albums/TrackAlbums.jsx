import React from 'react';

const TrackAlbums = ({track, singer, namber}) => {
    return (
        <div className={"flex justify-between my-2"}>
            <div className={"flex items-center"}>
                <div className={"mr-5 w-5"}>{namber + 1}</div>
                <div>
                    <div className={"text-white"}>{track.name}</div>
                    <div>{singer}</div>
                </div>
            </div>


            <div>{(track.duration_ms / 60000).toFixed(2)}</div>

        </div>
    );
};

export default TrackAlbums;