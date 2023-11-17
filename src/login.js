import axios from 'axios';
import React, { useState} from 'react';
import './Login.css'
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { API_BASE_URL, LOGIN } from './services/apiServices';

function Login(){
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    
    const handleSubmit= async (e) => {
        
        e.preventDefault();
        try {
            const res = await axios.post(`${API_BASE_URL}${LOGIN}`,user);
                setUser({
                    email: '',
                    password: ''
                });
                localStorage.setItem('jwt', res.data.token); 
                window.location.href = '/';
            } catch (error) {
                alert(console.log(error));
                
            }
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto" id="logoLogin" src="/icono.png" alt="logo easyparking" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Iniciar sesión</h2>
                </div>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                    <Input
                        type="email" 
                        label="Correo electrónico"	
                        variant='bordered'
                        className="max-w-xl"
                        labelPlacement='outside'
                        required 
                        name='email'
                        id='email'
                        autoComplete='email' 
                        isRequired
                        onChange={handleInputChange}
                    />
                    <div className="flex items-center justify-end">
                        <a href="/" className="font-semibold text-sm text-indigo-400 hover:text-indigo-500">Olvidé mi contraseña</a>
                    </div>
                    <Input
                        type="password"
                        label="Contraseña"
                        variant='bordered'
                        className="max-w-xl"
                        labelPlacement='outside'
                        isRequired
                        name='password'
                        id='password'
                        autoComplete='current-password'
                        onChange={handleInputChange}
                    />
                    <Button type="submit" 
                        color="primary" 
                        size="large" 
                        variant="ghost"
                        className="w-full"
                        >
                        Iniciar sesión
                    </Button>
                </form>
            </div>
            <div className="mt-10 text-center text-sm text-gray-500">
                No tienes una cuenta?
                <a href="/nuevaCuenta" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-500">Crear cuenta</a>
            </div>
        </div>
    )
}

export default Login;