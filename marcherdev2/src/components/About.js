import React from 'react'

const about = props => {

    let content = (
        <section id="about">
            <div class="avatar-section">
                <div class="circle cirle-1"><i class="fas fa-laptop-code fa-5x"></i></div>
                <div class="circle cirle-2"><i class="fas fa-gamepad fa-5x"></i></div>
                <img src='../images/me.jpeg' alt="A Photo of Mike"/>
                    <div class="circle cirle-3"><i class="fas fa-golf-ball fa-5x"></i></div>
                    <div class="circle cirle-4"><i class="fas fa-dog fa-5x"></i></div>
            </div>
                <div class="about-text">
                    <h3>ABOUT ME</h3>
                    <div class="about-box">
                        <p>I am a <span>software engineer</span> and recent graduate of The Flatiron School Full-Stack Development
                        Program. Currently, I am working to master React and Node.js through various projects. The combination of precise planning and creativity keeps me hungry to learn more. I am currently looking for a role as a software engineer. </p>
                    </div>
                </div>
                <div class="sm-badges-container">
                    <a href="https://github.com/mlarcher531">
                        <div class="sm-badge"><i class="fab fa-github fa-3x"></i></div>
                    </a>
                    <a href="https://www.linkedin.com/in/marcherdev/">
                        <div class="sm-badge"><i class="fab fa-linkedin-in fa-3x"></i></div>
                    </a>
                    <a href="https://mlarcher531.medium.com/">
                        <div class="sm-badge"><i class="fab fa-medium-m fa-3x"></i></div>
                    </a>
                </div>
        </section>
    )

    return content
}

export default about