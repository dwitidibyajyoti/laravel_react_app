import React, { useState } from 'react'
import './Main.css'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios';
const Address = ({ setIsPreviousAddress }) => {
    const navigate = useNavigate();
    const [addressArray, setAddressArray] = useState([1]);

    const [inputFields, setInputFields] = useState([{
        address_line_1: '',
        address_line_2: '',
        address_line_3: ''
    }, {
        address_line_1: '',
        address_line_2: '',
        address_line_3: ''
    }, {
        address_line_1: '',
        address_line_2: '',
        address_line_3: ''
    }])

    function addAddress() {
        let current = [...addressArray];
        if (addressArray.length < 3) {
            current.push(addressArray.length + 1)
            setAddressArray(current);
        }
    }
    function removeAddress() {
        let current = [...addressArray];
        if (addressArray.length !== 1) {
            current.pop()

            setAddressArray(current);
        }
    }



    function submitMultiForm(e) {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_HOST}/address`, { address: inputFields })
            .then(response => {
                if (response?.data?.status) {
                    console.log(response);
                    navigate('/thanks')
                }

            }).catch((e) => {
                console.log(e);
            });
    }

    function handleFormChange(index, event) {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    };

    return (
        <div className='personal_parent_address'>
            <h1>Enter your Previous Address</h1>
            <form style={{ 'width': '100%', height: '50%' }} onSubmit={submitMultiForm}>
                {addressArray.map((item, index) => {
                    return (
                        <div className='input_aria' key={item}>
                            <label > {`Previous Address ${item}`}</label>
                            <input type='text' placeholder={`Address line ${1}`} name={`address_line_${1}`} required onChange={event => handleFormChange(index, event)}></input>
                            <input type='text' placeholder={`Address line ${2}`} name={`address_line_${2}`} required onChange={event => handleFormChange(index, event)}></input>
                            <input type='text' placeholder={`Address line ${3}`} name={`address_line_${3}`} required onChange={event => handleFormChange(index, event)}></input>
                        </div>
                    )
                })}
                <div className='submit_button_final'>
                    <button type='submit' className='submit_button_sub'>Submit</button>
                    {addressArray.length !== 3 && <Link onClick={addAddress}>Add Another Address</Link>}

                    {addressArray.length == 1 && <Link onClick={() => setIsPreviousAddress(false)}> {'<< Back'}</Link>}

                    {addressArray.length > 1 && <Link onClick={removeAddress}>Remove Address</Link>}
                </div>
            </form>
        </div>
    )
}

export default Address