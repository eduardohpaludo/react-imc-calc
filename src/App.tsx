import React, { useState } from 'react';
import logo from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'

import {levels, calculateImc, Level} from './helpers/imc'
import {GridItem} from './components/GridItem'

import './App.css';

function App() {

  const [height, setheight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)


  const handleCalculateImc = () => {
    if(height && weight) {
      setToShow(calculateImc(height, weight))
    }else {
      alert('Informe todos os campos.')
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setheight(0)
    setWeight(0)
  }

  return (
    <div className='box-border pb-10'>
      <header>
        <div className='max-w-screen-lg my-10 mx-10 -md:my-4 -md:mx-4' >
          <img 
            src={logo}
            alt=''
            width='150'
          />
        </div>
      </header>

      <div className='flex max-w-screen-lg m-10 -md:my-4 -md:mx-4 -md:flex -md:flex-col'>
        <div className='flex-1 mr-10 -md:mr-0'>
          <h1 className='text-[40px] text-[#3A4B5C] m-0 '>Calcule o seu IMC.</h1>
          <p className='text-base mb-10 text-[#6A7D8B]'>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
          </p>

          <input 
            className='w-full outline-none border-b-2 border-[#96A3AB] border-opacity-50 py-2.5 px-0.5 mb-5 text-sm disabled:opacity-50'
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
            value={height > 0 ? height : ''}
            onChange={e => setheight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input
            className='w-full outline-none border-b-2 border-[#96A3AB] border-opacity-50 py-2.5 px-0.5 mb-5 text-sm disabled:opacity-50'
            type="number"
            placeholder='Digite o seu peso. Ex: 75.3 (em kg)'
            value={weight > 0 ? weight : ''}
            onChange={e => setWeight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button className='
            w-full
            bg-[#227C9D]
            text-white 
            text-[15px]
            py-2.5 px-0 mt-10 
            rounded-[10px] 
            cursor-pointer 
            hover:opacity-80 
            ease-in-out duration-[.3s] 
            disabled:opacity-50
            '
            onClick={handleCalculateImc}
            disabled={toShow ? true : false}
            >Calcular</button>
        </div>
        <div className='flex-1 flex ml-10 -md:ml-0 -md:mt-10'>
          {!toShow &&
          
            <div className='flex-1 grid grid-cols-2 gap-5 -sm:grid-cols-[1fr]'>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {toShow &&
            <div className='flex-1 flex'>
              <div 
                className='flex-1 flex absolute bg-[#227C9D] w-[70px] h-[70px] rounded-[50%] justify-center items-center cursor-pointer ml-[-35px] mt-[150px] -md:ml-0 -md:mt-0 -md:rounded-[10px]'
                onClick={handleBackButton}
              >
                <img src={leftArrowImage} alt="" width="25"/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
      

      

      
    </div>
  );
}

export default App;
