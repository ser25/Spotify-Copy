import React from 'react';
import Modal from "../../UI/Modal/Modal";
import {useDispatch} from "react-redux";
import {closeModalRecommendation} from "../../redux/slices/Modal/slice";

const ModalRecommendation = () => {
    const dispatch = useDispatch()
    return (
        <Modal classes={'h-80 w-[480px]  bg-[#333]'}
               closeModal={() => dispatch(closeModalRecommendation(false))}
        >
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
        </Modal>
    );
};

export default ModalRecommendation;