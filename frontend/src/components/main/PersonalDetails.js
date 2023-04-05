import React, { useState } from 'react'
import './Main.css'
const PersonalDetails = ({setFirstName,setLastName,setDateValue,setMonthValue,setYearValue,onSubmitPersonalDetails}) => {
    const [date, setDate] = useState(['Day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
    const [month, setMonth] = useState(['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    const [year, setYear] = useState(['Year', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960', '1959', '1958', '1957', '1956', '1955', '1954', '1953', '1952', '1951', '1950', '1949', '1948', '1947', '1946', '1945', '1944', '1943', '1942', '1941', '1940', '1939', '1938', '1937', '1936', '1935', '1934', '1933', '1932', '1931', '1930', '1929', '1928', '1927', '1926', '1925', '1924', '1923', '1922', '1921', '1920', '1919', '1918', '1917', '1916', '1915', '1914', '1913', '1912', '1911', '1910']);
    return (
        <div className='personal_parent'>
            <h1>Enter Your Personal Details</h1>
            <form style={{ 'width': '100%', height: '100%' }} onSubmit={onSubmitPersonalDetails}>
                <div className='input_aria'>
                    <label> First Name</label>
                    <input type='text' placeholder='First Name' required onChange={(e)=>{
                        // console.log(e.target.value);
                        setFirstName(e.target.value)
                    }}></input>
                </div>
                <div className='input_aria'>

                    <label > Last Name</label>
                    <input type='text' placeholder='Last Name' required onChange={(e)=> setLastName(e.target.value)}></input>
                </div>
                <div className='input_aria'>
                    <label> Enter Your Date of Birth</label>
                    <fieldset className='field_set'>
                        <legend> Date Of Birth</legend>
                        <div className="row">
                            <div className=" ">
                                <select name="lstDobDay" id="lstDobDay" className="form-control watermark" required onChange={(e)=>setDateValue(e.target.value)}>
                                    {date.map((item, index) => {
                                        return (
                                            <option value={item === 'Day' ? '' : item} key={index}>{item} </option>
                                        )
                                    })}
                                </select>
                                {/* <i className="validate " aria-hidden="true" style="display:none;"></i> */}
                                <span id="dobDay_err" className="error_msg error"></span>
                            </div>
                            <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12 ">
                                <select name="lstDobMonth" id="lstDobMonth" className="form-control watermark" required onChange={(e)=>setMonthValue(e.target.value)}>
                                    {month.map((item, index) => {
                                        return (
                                            <option value={item === 'Month' ? '' : index} key={index}>{item} </option>
                                        )
                                    })}
                                </select>
                                <i className="validate " aria-hidden="true" ></i>
                                <span id="dobMonth_err" className="error_msg"></span>
                            </div>
                            <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12">
                                <select name="lstDobYear" id="lstDobYear" className="form-control" required onChange={(e)=>setYearValue(e.target.value)}>
                                    {year.map((item, index) => {
                                        return (
                                            <option value={item === 'Year' ? '' : item} key={index}>{item} </option>
                                        )
                                    })}
                                </select>
                                <i className="validate " aria-hidden="true" ></i>
                                <span id="dobYear_err" className="error_msg"></span>
                            </div>
                            <span id="dob_final_err" className="error_msg"></span>
                        </div>
                    </fieldset>
                </div>
                <div className='submit_button'>
                    <button type='submit' className='next_button'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetails