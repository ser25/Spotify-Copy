import React, {FC} from 'react';
import RegistrationInfo from "./RegistrationInfo";
import RegistrationButton from "./RegistrationButton";
import {AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE} from "../../key";
import {useDispatch} from "react-redux";
import {setToken} from "../../redux/slices/Registration/slice";


const TheRegistration = ({setRegistration}) => {
    const dispatch = useDispatch()
    return (
        <a
            onClick={() => setRegistration(false)}
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 flex justify-between items-center flex-wrap gap-x-6 gap-y-2"
        >
            <RegistrationInfo/>
            <RegistrationButton/>
        </a>
    );
};

export default TheRegistration;