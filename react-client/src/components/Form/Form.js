import React from 'react'
import "./Form.css"

function Form() {
    return (
       <div className='main'>
       <h1>facebook</h1>
        <form>
          <div className='form'>
              <div className='message-wrapper'>
                  <h2>Create a new account</h2>
                  <h4>It's quick and easy.</h4>
              </div>
            <input className="" type="text" placeholder='Name'></input>
            <input type="text" placeholder='Surname'></input>
            <input type="text" placeholder='E-mail'></input>
            <input type="text" placeholder='Password'></input>
            <button type='submit'>Sign Up</button>
          </div> 
        </form>
       </div> 
    )
}

export default Form;
