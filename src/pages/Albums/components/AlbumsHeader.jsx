import React from 'react';
// bg-gradient-to-r from-neutral-300 to-stone-400
const AlbumsHeader = ({album}) => {
    return (
        <div className='flex items-center gap-10 px-8 pt-6 pb-16 '>
            <div>
                <img
                    className='shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]'
                    src={album.images[1].url}
                    alt="album image"
                />
            </div>
            <div className='flex flex-col gap-4 text-[#e0dede]'>
                <div className={"text-white text-2xl mb-2"}>{album.type}</div>
                <div className={"text-white text-6xl mb-10"}>{album.name}</div>
                <div className={"flex gap-4"}>
                    <a href={`${album.artists[0].external_urls.spotify}`} target="_blank">
                        {album.artists[0].name}
                    </a>
                    <div>{album.release_date}</div>
                    <div>{album.total_tracks} songs</div>
                </div>

            </div>
        </div>
    );
};

export default AlbumsHeader;