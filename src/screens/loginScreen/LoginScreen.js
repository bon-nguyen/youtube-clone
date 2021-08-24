import React from 'react';
import './_loginScreen.scss';
const LoginScreen = () => {
    return (
        <div className="login">
            <div className="login__container">
                <h2>Youtube Clone</h2>
                <img
                    src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                    alt=''
                />
                <button>Login width google</button>
                <p>This Project is made using Youtube DATA API</p>
            </div>
        </div>
    );
};

export default LoginScreen;