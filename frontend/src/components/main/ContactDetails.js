import React, { useState } from 'react'
import './Main.css'

const ContactDetails = ({ setPhone, setEmail, onSubmitContact, phone,errorMessages }) => {
    const [date, setDate] = useState(['Day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
    const [month, setMonth] = useState(['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    const [year, setYear] = useState(['Year', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960', '1959', '1958', '1957', '1956', '1955', '1954', '1953', '1952', '1951', '1950', '1949', '1948', '1947', '1946', '1945', '1944', '1943', '1942', '1941', '1940', '1939', '1938', '1937', '1936', '1935', '1934', '1933', '1932', '1931', '1930', '1929', '1928', '1927', '1926', '1925', '1924', '1923', '1922', '1921', '1920', '1919', '1918', '1917', '1916', '1915', '1914', '1913', '1912', '1911', '1910']);

    return (
        <div className='personal_parent_contact'>
            <h1>Enter Your Contact Details</h1>
            {errorMessages && <span className='error-messages'>{errorMessages}</span>}
            <form style={{ 'width': '100%', height: '100%' }} onSubmit={onSubmitContact}>
                <div className='input_aria'>
                    <label> Email Address</label>
                    <input type='email' placeholder='Email Address' required onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>
                </div>
                <div className='input_aria'>

                    <label > Phone Number</label>
                    <input type='number' required placeholder='Phone Number' value={phone} onChange={(e) => {
                        if (e.target.value.length <= 10) {
                            setPhone(e.target.value)
                        }
                    }}></input>
                </div>
                <div className='submit_button'>
                    <button type='submit' className='submit_button_sub'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactDetails