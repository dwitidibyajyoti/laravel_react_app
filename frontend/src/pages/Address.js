import React, { useState } from 'react'

import '../components/main/Main.css'
import { useNavigate } from 'react-router-dom';

import PreviousAddress from '../components/main/Address';

const Address = () => {
    const navigate = useNavigate();
    const [isPreviousAddress, setIsPreviousAddress] = useState(false)
    return (
        <>
            {!isPreviousAddress?<div className='personal_parent'>
                <h1>Do you have a Previous Address?</h1>
                <div className='submit_button'>
                    <button type='submit' className='next_button_yes' onClick={()=>setIsPreviousAddress(true)}>Yes</button>
                </div>
                <div className='submit_button'>
                    <button type='submit' className='next_button_no' onClick={() => navigate('/thanks')}>No</button>
                </div>
            </div>:<PreviousAddress setIsPreviousAddress={setIsPreviousAddress}/>}
        </>

    )
}

export default Address