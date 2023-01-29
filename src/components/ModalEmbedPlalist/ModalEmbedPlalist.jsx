import React from 'react';
import Modal from "../../UI/Modal/Modal";
import {useDispatch} from "react-redux";
import {closeModalEmbed} from "../../redux/slices/Modal/slice";
import BaseButton from "../../UI/BaseButton/BaseButton";
import CheckBox from "../../UI/CheckBox/CheckBox";

const ModalEmbedPlaylist = () => {
    const dispatch = useDispatch()
    return (
        <Modal
            classes="w-[660px] bg-neutral-900"
            closeModal={() => dispatch(closeModalEmbed(false))}
        >
            <h1 className="text-3xl pt-8 pb-3 px-8 font-bold leading-relaxed">
                About recommanedations
            </h1>
            <div className="py-6 px-8 text-neutral-500 text-[13px]">
                Lorem ipsum dolor sit amet{' '}
                <a href="/" className="text-white font-bold hover:underline">
                    consectetur adipisicing elit
                </a>
                . Aliquam sit perferendis soluta architecto? Adipisci, atque.
            </div>
            <div className="flex justify-end items-center gap-4 pb-6 px-8">
                <CheckBox>Show code</CheckBox>
                <BaseButton accent>Copy</BaseButton>
            </div>
        </Modal>
    );
};

export default ModalEmbedPlaylist;