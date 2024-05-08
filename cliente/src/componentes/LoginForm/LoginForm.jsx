import React, { useEffect, useRef } from 'react';
import './LoginForm.css';
import { HiMiniXMark } from "react-icons/hi2";

const LoginForm = () => {
    // Usamos useRef para referenciar los elementos del DOM
    const toggleLoginRef = useRef(null);
    const wrapperRef = useRef(null);

    // useEffect para añadir el evento de clic en el botón toggleLogin
    useEffect(() => {
        const toggleLogin = toggleLoginRef.current;
        const wrapper = wrapperRef.current;

        // Definir la función de manejador de clic
        const handleClick = () => {
            toggleLogin.classList.toggle('active');
            wrapper.classList.toggle('active');
        };

        // Añadir el evento de clic a toggleLogin
        toggleLogin.addEventListener('click', handleClick);

        // Limpiar el evento cuando el componente se desmonte
        return () => {
            toggleLogin.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="login-form-container">
            
            {/* Referenciar el botón utilizando useRef */}
            <button ref={toggleLoginRef} className='toggle-login'>Ingresar</button>

            {/* Referenciar el div wrapper utilizando useRef */}
            <div ref={wrapperRef} className='wrapper'>
            
                <div className="form-wrapper">
                <div className="logo"></div>
                    <form action="">
                        
                        <div className="input-group">
                            <input type="text" required />
                            <label htmlFor="">Usuario</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required />
                            <label htmlFor="">Contraseña</label>
                        </div>
                        <div className="remember">
                            <label><input type="checkbox" />Mostrar Contraseña</label>
                            <a href="#">Has olvidado tu contraseña?</a>
                        </div>
                        <button type='submit' className='btn'>Acceder</button>
                        <div className="pie_pagina">
                            <p>Cooperativa 8 de Marzo Ltda.®</p>
                        </div>
                    </form>
                </div>
                <span style={{ '--i': '10' }}></span>
                <span style={{ '--i': '9' }}></span>
                <span style={{ '--i': '8' }}></span>
                <span style={{ '--i': '7' }}></span>
                <span style={{ '--i': '6' }}></span>
                <span style={{ '--i': '5' }}></span>
                <span style={{ '--i': '4' }}></span>
                <span style={{ '--i': '3' }}></span>
                <span style={{ '--i': '2' }}></span>
                <span style={{ '--i': '1' }}></span>
            </div>
        </div>
    );
};

export default LoginForm;
