import classes from './login-page.module.scss'
import React from 'react';
import ButtonCmp from '../reusable-component/button-cmp';
import { useState } from 'react';
import logo from '../assets/react.svg';
import InputText from '../reusable-component/input-text';

function Login() {
    const [isLogin] = useState(true);
    function handleForm(form) {
        console.log(form);
    }

    function onInputChange(event) {
        console.log(event);
    }

    return (
        <>
            <div className={classes.login}>
                <div className={classes['login-card']}>
                    <img src={logo} alt="Logo" className={classes.logo} />
                    <div className='{form-section}'>
                        {isLogin ? (
                            <>
                                <form onSubmit={handleForm}>
                                    <InputText
                                        type='email'
                                        name='email'
                                        onInputChange = {onInputChange}
                                        label='Email'
                                        required='true'>
                                    </InputText>
                                    <InputText
                                        type='text'
                                        name='password'
                                        onInputChange = {onInputChange}
                                        label='Password'
                                        required='true'>
                                    </InputText>
                                    <div className={classes['button-group']}>
                                        <ButtonCmp text="Login" type="submit" custClass="login"/>
                                    </div>
                                </form>
                                <div>Forgot password?</div>
                                <div className={classes.noaccount}>
                                    <span>Don't have an account? </span>
                                    <span className={classes.signup}>Sign Up!</span>
                                </div>
                            </>
                        ) : (
                            <form onSubmit={handleForm}>
                                <ButtonCmp text={'Cancel'}></ButtonCmp>
                                <ButtonCmp text={'Add'} type='submit'></ButtonCmp>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login;