import React, {FC} from 'react';
import RegistrationInfo from "./RegistrationInfo";
import RegistrationButton from "./RegistrationButton";

const TheRegistration: FC = () => {
    return (
        <a
            href="/"
            className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 flex justify-between items-center flex-wrap gap-x-6 gap-y-2"
        >
            <RegistrationInfo />
            <RegistrationButton />
        </a>
    );
};

export default TheRegistration;