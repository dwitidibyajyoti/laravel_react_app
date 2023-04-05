import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import "./index.css"
import PersonalDetails from "./components/main/PersonalDetails";
import ContactDetails from "./components/main/ContactDetails";
import Address from "./pages/Address";
import Thanks from "./pages/Thanks";
import axios from 'axios';

import { useEffect, useState } from "react";


function App() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessages, setErrorMessages] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  function onSubmitPersonalDetails(e) {
    e.preventDefault();
    if (firstName !== '' && lastName !== '' && date !== '' && year !== '' && month !== '') {
      setIsCompleted(true);
    }
  }

  function onSubmitContact(e) {
    e.preventDefault();
    setErrorMessages('');
    let dob = `${month}-${date}-${year}`;
    const userDetails = { firstName, lastName, phone, email, dob };
    axios.post(`${process.env.REACT_APP_API_HOST}/user-details`, userDetails)
      .then(response => {
        if (response?.data?.status) {
          console.log(response);
          // navigate('')
          navigate('/address')
        }
      }).catch((e) => {
        if (e?.response?.data) {
          setErrorMessages(e?.response?.data.errors)
        }
      });
  }

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_API_HOST}/device-info`, {})
      .then(response => console.log(response));
  }, [])

  return (
    <>
      <div className="parent">
        <Header title="My header" subtitle="subtitle2" />
        <Routes>
          <Route path="/" element={
            !isCompleted ? <PersonalDetails setFirstName={setFirstName} setLastName={setLastName} setDateValue={setDate} setMonthValue={setMonth} setYearValue={setYear} onSubmitPersonalDetails={onSubmitPersonalDetails} /> : <ContactDetails setPhone={setPhone} setEmail={setEmail} phone={phone} onSubmitContact={onSubmitContact} errorMessages={errorMessages} />} />
          <Route path="/address" element={<Address />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
        {/* <Footer note="Footer Note" /> */}
      </div>
    </>
  );
}

export default App;
