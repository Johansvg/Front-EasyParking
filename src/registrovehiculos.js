
import React, { useState } from 'react';
import axios from 'axios';
import {Select, SelectItem} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { API_BASE_URL, VEHICULO_REGISTER } from './services/apiServices';

function RegistroVehiculo(){
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');

    const handleInput = (e) => {
        const text = e.target.value.toUpperCase();
        setInputValue(text);
    };
    const handleInput2 = (e) => {
        const text = e.target.value.toUpperCase();
        setInputValue2(text);
    };
    const handleInput3 = (e) => {
        setInputValue3(e.target.value);
    };
    const handleInput4 = (e) => {
        setInputValue4(e.target.value);
    };


    const [vehiculos, setVehiculos] = useState({
        tipoVehiculo:'',
        placa: '',
        marca: '',
        color: '',
        modelo: ''
    });

    const tiposVehiculo = [
        {label: "Moto", value: 'Moto'},
        {label: "Carro", value: 'Carro'},
    ]

    const handleSubmit= async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('jwt');
            console.log(token);
            if(token){
                const config = {
                    headers: { 
                        Authorization: `Bearer ${token}`,
                    },
                };
            
            const res = await axios.post(`${API_BASE_URL}${VEHICULO_REGISTER}`, vehiculos, config);
                console.log(res);
                handleClear();
                window.location.href = '/';
            
            }else{
                console.log('No hay token');
            } 
        }catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "placa" || name === "marca") {
            setVehiculos((prevData) => ({
                ...prevData,
                [name]: value.toUpperCase(),
            
            }));
        } else {
            setVehiculos((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleClear = () => {
        setVehiculos({
          tipoVehiculo: '',
          placa: '',
          marca: '',
          color: '',
          modelo: ''
        });
        setInputValue(''); // Limpia el primer campo de entrada
        setInputValue2(''); // Limpia el segundo campo de entrada
        setInputValue3(''); // Limpia el tercer campo de entrada
        setInputValue4(''); // Limpia el cuarto campo de entrada
      };
    

    return(
        <div>
            <h1 className='text-4xl font-bold text-center m-2'> Registrar vehículo</h1>
            <form method="post" onSubmit={handleSubmit}  id="htmlForm" name="htmlForm">
                <div className="grid justify-center grid-flow-col-dense mx-4 md:grid-cols-12 lg:grid-cols-12 my-6">
                    <div className="w-full md:col-start-4 md:col-span-6 lg:col-start-5 lg:col-span-4">
                        <div className='flex flex-col gap-y-6 my-4'>
                            <Select 
                                label="Tipo de vehículo"
                                variant='bordered'
                                autoComplete='off'
                                size='lg' 
                                className="max-w-xl"
                                labelPlacement='outside'
                                name='tipoVehiculo'
                                id='tipoVehiculo'
                                isRequired
                                onChange={handleInputChange}  
                            >
                                {tiposVehiculo.map((vehiculos) => (
                                <SelectItem key={vehiculos.value} value={vehiculos.value} className='text-black'>
                                    {vehiculos.label}
                                </SelectItem>
                                ))}
                            </Select>
                            <Input
                                type="text" 
                                label="Placa"
                                size='lg'
                                variant='bordered'
                                className="max-w-xl"
                                labelPlacement='outside'
                                required 
                                name='placa'
                                autoComplete='off' 
                                isRequired
                                value={inputValue} 
                                onInput={handleInput}
                                onChange={handleInputChange}
                            />
                            <Input 
                                type="text" 
                                label="Marca"
                                variant='bordered'
                                size='lg'
                                className="max-x-xl"
                                labelPlacement='outside'
                                name='marca'
                                id='marca'
                                autoComplete='off'
                                isRequired
                                value={inputValue2} 
                                onInput={handleInput2} 
                                onChange={handleInputChange}
                            />
                            <Input 
                                type="text" 
                                label="Color"
                                size='lg'
                                variant='bordered'
                                className="max-w-xl"
                                labelPlacement='outside'
                                name='color'
                                id='color'
                                autoComplete='off'
                                isRequired
                                value={inputValue3}
                                onInput={handleInput3} 
                                onChange={handleInputChange}
                            />
                            <Input 
                                type="text" 
                                label="Modelo"
                                size='lg'
                                variant='bordered'
                                isRequired
                                className="max-w-xl"
                                labelPlacement='outside'
                                name='modelo'
                                id='modelo'
                                autoComplete='off'
                                value={inputValue4}
                                onInput={handleInput4}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='flex justify-between my-6'>
                            <Button 
                                type='submit'
                                variant="ghost"
                                size='lg'
                                color='primary'
                            >
                                Guardar
                            </Button>
                            <Button 
                                variant="ghost"
                                size='lg'
                                color='secondary'
                                onClick={handleClear}
                            >
                                Limpiar
                            </Button>
                        </div>
                    </div> 
                </div>
            </form>
        </div>     
    )
}

export default RegistroVehiculo;