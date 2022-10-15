import React, { useState } from "react";
import "./Modal.css";

function Modal({ }) {

    const [flag, setFlag] = useState(false)
    const [label,setLabel] = useState('Follow')

    const handleClick = () => {
 
        setFlag(true)
        // alert("akjfsjf")
        setLabel('Unfollow')

        if(flag){
             setFlag(!flag)
             setLabel('Follow')
        }

    }

    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer">



                    <div className="footer">
                        <div className="modalContainer1">

                        </div>
                        {/* <div className="body">
                            <p>The next page looks amazing. Hope you want to go there!</p>
                        </div> */}

                    </div>
                    <div className="">
                        <button className="newbutton" onClick={handleClick}>{label}</button>

                    </div>
                    <div className="newbody">
                        {
                            flag ?
                                <>
                                    <h2 style={{ fontSize: 28 }}>Sandeep Rachatte</h2>
                                    <h5 style={{ fontSize: 18, color:'red' }}>I am BATMAN .....  #React #Javascript #HTML #CSS</h5>
                                    <h5 style={{ fontSize: 18, color: 'gray' }}>This is sandeep here......  #React #Javascript #HTML #CSS</h5>
                                </>
                                :
                                <>
                                    <h2 style={{ fontSize: 28 }}>Sandeep Rachatte</h2>
                                    <h5 style={{ fontSize: 18, color: 'gray' }}>This is sandeep here......  #React #Javascript #HTML #CSS</h5>
                                    <h5 style={{ fontSize: 18, color: 'gray' }}>This is sandeep here......  #React #Javascript #HTML #CSS</h5>
                                </>
                        }
                    </div>
                </div>

            </div>
        </>
    );
}

export default Modal;