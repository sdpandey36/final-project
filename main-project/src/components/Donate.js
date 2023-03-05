



import React from 'react'
import { useState } from 'react';
import { DatePicker } from 'antd';
import Navbar from './Navbar';
import Select from 'react-select'



const Donate = () => {
    // const [selectedDate,setSelectedDate]=useState(null); 
    const [userRegistration, setuserRegistration] = useState({

        fullname: "",

        email: "",
        address: "",
        number: 0,
        dateofbirth: "",
        dateoflastdonate: "",
        bloodgroup: "",
        gender: ""


    });
    const [records, setRecords] = useState([]);


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);

        setuserRegistration({ ...userRegistration, [name]: value });
    }




       
    const handleSubmit =async (e) => {
        // console.log(userRegistration.dateoflastdonate)
        const date1 = new Date(userRegistration.dateoflastdonate);
        const elidate = new Date(userRegistration.dateofbirth);
        const date2 = new Date();

        const finalElidate = date2.getTime() - elidate.getTime();
        const diffINelidate = finalElidate / (1000 * 60 * 60 * 24);




        const diffInMilliseconds = date2.getTime() - date1.getTime();

        const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

        e.preventDefault();

        if (userRegistration.fullname && userRegistration.email && userRegistration.address && userRegistration.number && userRegistration.dateofbirth && userRegistration.dateoflastdonate && userRegistration.bloodgroup && userRegistration.gender && diffInDays > 90 && diffINelidate > 6575) {


            const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
            // console.log(records);
            setRecords([...records, newRecord]);
            window.alert("Thank you for Registration")

            setuserRegistration({ fullname: "", email: "", address: "", number: "", dateofbirth: "", dateoflastdonate: "", bloodgroup: "", gender: "" })
        }

        else if (diffINelidate < 6575) {
            alert("You must be 18+ to danate");
        }

        else if (diffInDays < 90) {
            alert("Time limit between blood donation should be more than 90 days");
        }
        else {
            alert("Please fill the Data Properly");
        }


        const {fullname,email,address,number,dateofbirth,dateoflastdonate,bloodgroup,gender}=userRegistration;
        const res=await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fullname,email,address,number,dateofbirth,dateoflastdonate,bloodgroup,gender
            })
        });


        const data=await res.json();
        if(data.status===422 || !data){
            window.alert("invalid registration");
            console.log("invalid registration");
        }else{
            window.alert("registration successful");
            console.log("registration successful");
        }
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <h4>Please fill data Properly..</h4>
                <div className="formtable">

                    <form action="" method='POST' onSubmit={handleSubmit}>
                        <div className="formitem">

                            <label htmlFor="fullname" className='label'>Full Name</label><br></br>
                            <input type="text" name="fullname" id="fullname"
                                value={userRegistration.fullname} onChange={handleInput}
                                autoComplete='off' className='textarea'></input><br></br>
                        </div>

                        <div className="formitem">
                            <label htmlFor="email" className='label'>Email</label><br></br>
                            <input type="email" name="email" autoComplete='off' id="email"
                                value={userRegistration.email} onChange={handleInput}
                                className='textarea'></input>
                        </div>
                        <div className="formitem">
                            <label htmlFor="address" className='label'>address</label><br></br>
                            <input type="text" name="address" autoComplete='off' id="address"
                                value={userRegistration.address} onChange={handleInput}
                                className='textarea'></input>
                        </div>
                        <div className="formitem">
                            <label htmlFor="number" className='label'>Number</label><br></br>
                            <input type="number" name="number" autoComplete='off' id="number"
                                value={userRegistration.number} onChange={handleInput}
                                className='textarea'></input>
                        </div>
                        <div className="formitem">
                            <label htmlFor="dateofbirth" className='label'>dateofbirth</label><br></br>
                            <input type="date" name="dateofbirth" autoComplete='off' id="dateofbirth"
                                value={userRegistration.dateofbirth} onChange={handleInput}
                                className='textarea'></input>
                        </div>
                        <div className="formitem">
                            <label htmlFor="dateoflastdonate" className='label'>dateoflastdonate</label><br></br>
                            <input type="date" name="dateoflastdonate" autoComplete='off' id="dateoflastdonate"
                                value={userRegistration.dateoflastdonate} onChange={handleInput}
                                className='textarea'></input>
                        </div>
                        <div className="formitem">
                            <label htmlFor="bloodgroup" className='label'>bloodgroup</label><br></br>
                            {/* <input type="text" name="bloodgroup" autoComplete='off' id="bloodgroup"
                            value={userRegistration.bloodgroup} onChange={handleInput}
                            className='textarea'></input> */}
                            <select id="bloodgroup" name='bloodgroup' className='textarea' onChange={handleInput} value={userRegistration.bloodgroup} >
                                <option value="">--Blood Group--</option>
                                <option >A+</option>
                                <option >A-</option>
                                <option >B+</option>
                                <option >B-</option>
                                <option >O+</option>
                                <option >O-</option>
                                <option >AB+</option>
                                <option >AB-</option>
                            </select>
                        </div>
                        {/* <div className="formitem">
                        <label htmlFor="password" className='label'>password</label><br></br>
                        <input type="password" name="password" autoComplete='off' id="password"
                            value={userRegistration.password} onChange={handleInput}
                            className='textarea'></input>
                    </div>
                    <div className="formitem">
                        <label htmlFor="cpassword" className='label'>cpassword</label><br></br>
                        <input type="password" name="cpassword" autoComplete='off' id="cpassword"
                            value={userRegistration.cpassword} onChange={handleInput}
                            className='textarea'></input>
                    </div> */}
                        <div className="formitem">
                            <label htmlFor="gender" className='label'>Gender:</label><br></br>

                            <input type="radio" id="genderm" name="gender" value="Male" onChange={handleInput} />Male<br></br>
                            <input type="radio" id="genderf" name="gender" value="Female" onChange={handleInput} />FeMale<br></br>
                            <input type="radio" id="gendero" name="gender" value="other" onChange={handleInput} />Other
                        </div>

                        <div className='formitem'>
                            {/* <button id="btn" type='submit' value="register" onClick={postData}>Register</button> */}
                            <button id="btn" type='submit' value="register">Register</button>
                        </div>
                    </form>

                </div>
                {/* <div className="listdata">
                {

                    records.map((curelement) => {
                        return (
                            <>
                                <div className="showdata" key={curelement.id}>
                                    <p>{curelement.fullname}</p>
                                    <p>{curelement.email}</p>
                                   
                                </div>

                            </>
                        )
                    })
                }
            </div> */}

            </div>

        </>

    )
}

export default Donate

