import React from 'react'

const LandingPage = ({setLandingPage, setShowLogin, setNewUser}) => {
  return (
    <div className='landing-page'>
        <p className='chat-app-title'>Chat App</p>
        <div className='login-options-container'>
            <div className='login-option' onClick={() => {
                setNewUser(true)
                setLandingPage(false)
                setShowLogin(false)
            }}>New User</div>
            <div className='login-option'onClick={() => {
                setNewUser(false)
                setLandingPage(false)
                setShowLogin(true)
            }}>Login</div>
        </div>

    </div>
  )
}

export default LandingPage