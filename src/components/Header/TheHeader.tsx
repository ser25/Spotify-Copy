import React, {FC} from 'react';
import {ChevronLeftIcon, ChevronRightIcon, Bars3Icon } from '@heroicons/react/24/outline';
import ButtonLogin from "../../UI/BaseButton/ButtonLogin";
import ButtonRegister from "../../UI/BaseButton/ButtonRegister";

const TheHeader: FC = () => {
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
            <div>
                <ButtonRegister />
                <ButtonLogin />
            </div>
        </header>
    );
};

export default TheHeader;