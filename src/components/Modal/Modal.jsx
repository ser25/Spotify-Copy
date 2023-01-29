import React, {useEffect, useRef} from 'react';
import {XMarkIcon} from "@heroicons/react/20/solid";
import {useDispatch} from "react-redux";
import {closeModal} from "../../redux/slices/Modal/slice";
import useEvent from "../../hooks/useEvent";

const Modal = () => {
    const dispatch = useDispatch()
    const ref = useRef();
    const contentRef = useRef();


    useEffect(() => {
        setTimeout(animate)})

    function handleEsc({key}) {
        if (key === 'Escape') close();
    }

    useEvent('keydown', handleEsc)
    function close() {
        animate(true)
        setTimeout(() => dispatch(closeModal()), 500);
    }

    function animate(isClosing = false) {
        ref.current.classList.toggle('opacity-0', isClosing);
        contentRef.current.classList.toggle('-translate-y-10', isClosing);
    }

    return (
        <div
            className="fixed inset-0 bg-black/70 z-30 flex justify-center items-center opacity-0 transition-opacity duration-500"
            role="dialog"
            ref={ref}
            onClick={close}
        >
            <div
                className="flex flex-col relative bg-[#333] text-white h-80 w-[480px] rounded-xl -translate-y-10
                transition-transform duration-500"
                ref={contentRef}
                onClick={e => e.stopPropagation()}
            >
                <button className="absolute right-0 p-3 text-neutral-500 hover:text-neutral-200"
                        onClick={close}
                >
                    <XMarkIcon className="h-8 w-8"/>
                </button>
                <h1 className="text-3xl pt-8 pb-3 px-8 font-bold leading-relaxed border-b border-neutral-600">
                    About recommanedations
                </h1>
                <div className="py-6 px-8 overflow-y-auto">
                    Use our recommendations to find old hits, new trending songs or shows you've never heard of. We're
                    sure you'll definitely enjoy some of these tracks.
                    <br></br>
                    <br></br>
                    Our editors from around the world understand music and culture like no other and create only the
                    best playlists that will satisfy the tastes of the most demanding music lovers.
                    <br></br>
                    <br></br>
                    We take into account a lot of things to make personalized recommendations just for you: what tracks
                    you listen to and when, the preferences of users with similar tastes in music and podcasts, the
                    opinion of our creative experts, and more.
                    <br></br>
                    <br></br>
                    Sometimes we promote some tracks in the recommendations for commercial reasons, but our main
                    priority is satisfied listeners. So we will recommend only what you should like. Keep listening to
                    your favorite songs and podcasts, and our recommendations based on your preferences will always be
                    relevant.
                </div>
            </div>
        </div>
    );
};

export default Modal;