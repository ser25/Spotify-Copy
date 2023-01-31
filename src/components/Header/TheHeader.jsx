import React, {FC, useEffect} from 'react';
import {ChevronLeftIcon, ChevronRightIcon, Bars3Icon} from '@heroicons/react/24/outline';
import ButtonLogin from "../../UI/BaseButton/ButtonLogin";
import ButtonRegister from "../../UI/BaseButton/ButtonRegister";
import {useDispatch, useSelector} from "react-redux";
import {selectToken} from "../../redux/slices/Token/selectors";
import {fetchMeInformation} from "../../redux/slices/Token/slice";

const TheHeader = () => {
    // const dispatch = useDispatch()
    const {me: user} = useSelector(selectToken)
    return (
        <header
            className="bg-[#070707] flex-1 flex justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
            <div className="flex">
                <a
                    href="src/components#sidebar"
                    className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden"
                >
                    <Bars3Icon className='h-6 w-6'/>
                </a>
                <a href="/" className="mr-[8px] text-[#969696] p-1 cursor-not-allowed">
                    <ChevronLeftIcon className='h-6 w-6'/>
                </a>
                <a href="/" className="ml-[8px] text-[#969696] p-1 cursor-not-allowed">
                    <ChevronRightIcon className='h-6 w-6'/>
                </a>
            </div>
            {user ? <div className={'text-white'}>
                    <a href={user?.external_urls?.spotify} target="_blank">{user?.display_name}</a>

            </div>
                :
                <div>
                    <ButtonRegister/>
                    <ButtonLogin/>
                </div>
            }

        </header>
    );
};

export default TheHeader;