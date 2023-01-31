import React, {FC, useEffect, useState} from 'react';
import PlayList from "../PlayList/PlayList";
import axios from "axios";
import Player from "../Player/Player";
import {useSelector} from "react-redux";
import {selectToken} from "../../redux/slices/Token/selectors";
import {fetchAlbums, fetchMeInformation} from "../../redux/slices/Token/asyncActions";
import useToken from "../../hooks/useToken";
import PlayListTitle from "./PlayListTitle";
import {useAppDispatch} from "../../redux/store";
import {setToken} from "../../redux/slices/Token/slice";

const TheMain = () => {
    const dispatch = useAppDispatch()
    const {albums} = useSelector(selectToken)
    // const {token} = useSelector(selectToken)
    const {token} = useToken(setToken)
    // const searchArtists1 = async () => {
    //     const {data} = await axios.get("https://api.spotify.com/v1/me", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //     })
    //
    //     dispatch(setMe(data))
    // }
    useEffect(() => {
        dispatch(fetchAlbums(token))
        dispatch(fetchMeInformation(token))
    }, [token])
    return (
        <>
            <main className="text-white relative bg-black">
                <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
                <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl">
                    <div>
                            <PlayListTitle>The best albums</PlayListTitle>
                        <div
                            className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet
                         lg:grid-cols-playlists-desktop gap-5"
                        >
                            {albums.map(album =>
                                <PlayList id={album?.id} key={album?.id} url={album?.images[0].url} title={album?.name}
                                          singer={album?.artists[0].name} albumUrl={album?.external_urls.spotify}/>
                            )}
                            {/*<PlayList/>*/}
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                            <div>
                                <h2 className="text-2xl font-semibold hover:underline capitalize">
                                    <a href="/">Lorem ipsum dolor</a>
                                </h2>
                                <p className="text-sm text-[#b3b3b3]">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <a
                                href="/"
                                className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                            >
                                See all
                            </a>
                        </div>
                        <div
                            className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                            <a
                                href="/"
                                className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                                {/*<PlayListContextMenu />*/}
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                            <div>
                                <h2 className="text-2xl font-semibold hover:underline capitalize">
                                    <a href="/">Lorem ipsum</a>
                                </h2>
                                <p className="text-sm text-[#b3b3b3]">Lorem ipsum dolor sit.</p>
                            </div>
                            <a
                                href="/"
                                className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                            >
                                See all
                            </a>
                        </div>
                        <div
                            className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                            <a
                                href="/"
                                className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                                {/*<PlayListContextMenu />*/}
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                            <a
                                href="/"
                                className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
                            >
                                <div className="relative">
                                    <img
                                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                                        className="rounded shadow-lg"
                                        alt=""
                                    />
                                    <button
                                        className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                                    Playlist title
                                </h3>
                                <p className="text-sm text-[#b3b3b3] line-clamp-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                                    odit.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <div>
                {/*<Player/>*/}
            </div>

        </>

    );
};

export default TheMain;