import React from 'react'
import './landing.css'
import Splash from '.././../assets/splash.png'
import Adventure from '.././../assets/adventure.png'
import Twitter from '.././../assets/twitter.png'
export default function landing() {
    return (
        <div className='landing--hero'>
            <img src={Splash} alt="" className='splash' />
            <div className="landing-row">
                <div className="landing-nav">
                    <h1>Organize<span>ME</span></h1>
                    <a href="https://github.com/gonz4216/OrganizeME">Open Source</a>
                </div>

                <div className="landing--main">
                    <div className="main--left">
                        <h1>Build the future with <span>OrganizeME</span></h1>
                        <p>A software that helps individuals and teams organize, prioritize, and track their to-do lists and tasks efficiently to increase productivity and achieve goals.</p>
                        <a href="/">Try Now!</a>
                    </div>
                    <div className="main--right">
                        <img src={Adventure} alt="" />
                    </div>
                </div>

                <a href="https://twitter.com/ethgnz" target='_blank' className='footer--landing'>
                    <img src={Twitter} alt="" />
                    <h2>Created by @ethgnz</h2>
                </a>

            </div>

        </div>
    )
}
