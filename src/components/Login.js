import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Login = () => {


    return (
        <>
      
            <div class="center">
                <input className='input1' type="checkbox" id="show" />
                <label for="show" class="show-btn">Create account<b style={{ color: "blue" }}> It's free </b></label>
                <div class="container1 ">
                    <span className='text-xs gline text-green-700 bg-green-300' style={{padding:"10px 10px 10px 70px"}} >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</span>
                    <label for="show" class="close-btn text-xs text-center" value="X" title="close">x</label>
                    <div className='flex'>
                        
                        <div className='mt-10'>
                            <b> Create account</b>
                            <div className='flex'>
                                <input className='input2 mt-3 w-36' placeholder='First Name' />
                                <input className='input2 mt-3 w-36' placeholder='Last Name' />
                            </div>
                            <div>    <input className='input2 w-72' placeholder='Emial' /><br></br>
                            <input className='input2 w-72' placeholder='Password' /></div>
                        
                            <input className='input2 w-72' placeholder='Confirm Password' />
                            <form className='form1' action="#">

                               
                                <button style={{borderRadius:"20px"}} className='bg-blue-700 text-white p-2 w-60 mt-10'><b>Create Account</b></button>
                                <div class="signup-link mt-3">
                                    Not a member? <a href="#">Signup now</a>
                                </div>
                            </form>

                        </div>
                        <div className='mt-10'>

                           
                        </div>
                    </div>

                </div>
            </div>
            <script src="https://kit.fontawesome.com/7222c65f87.js" crossorigin="anonymous"></script>
        </> 

    

    )
}

export default Login