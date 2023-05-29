import React, { useState, memo } from "react";
import { Dialog } from '@headlessui/react';
import BtnCart from './BtnCart';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

const ForgoPassword = memo( function ForgoPassword ({closeAuth}) {

  const [ isOpenPass, setIsOpenPass ] = useState(false);



  function closeModal() {
    setIsOpenPass(false)

  }

  function openModal() {
    setIsOpenPass(true);
  }

  // function handleReset(){
  //   document.getElementsByName('authForm')[0].reset();
  // }


  const { register,
    formState:{ errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',

  });
  const onSubmit = () => {
    reset();
    closeModal();
  };

  return (
    <div className="authorization">
        <span onClick={ openModal } >Забыли пароль?</span>

      <Dialog open={isOpenPass} onClose={closeModal}>
        <div className="bg">
          <Dialog.Panel className="popUpAuth">
            <svg onClick={closeModal} className="authClose" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="20" height="20" fill="url(#pattern2)"/>
              <defs>
                <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_380_502" transform="scale(0.02)"/>
                </pattern>
                <image id="image0_380_502" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVR4nO2aS27CQAyG/0s04nGkcBG6bssB6LXoIWDBOQos6MrVVI4URSl4HvEY4U+KxMKJ/MmZ8UQGcBwnlRWAHYALAKp8nTmXNlbi00Dy9M+1jalEuOEK4A3AHPWZA3jnnEhamS8ODhLW+ODcwmt2lzMHz2CPGed2kgR376JVSJqfiyhBXhFjkFfkDmsADdJp+BlSJqnIK8ceEmUavpf4WdVEXgDsOf4YeZwZ3ittwJOtkRSZVInJF3uMTI6Eyq4lkcmVUNt+b8mUkFDtI2MypSTUG2J/Wz0Mfuf0nCqdvV+FEpUwJVLis5n81YpkbGHnnABMbL/9NVFKhrQb4tjCLiFDmkeUW7tTrgxpHRolW2yODGkc42P6RKoM+YfVM3zq1oBcxBjkFTEGPV1FThxoYeQ2ZMm5fUPAjoPDzM4am5jRW9sbhoaZ3QL1WbDED+cmHlNvByPhhxxPd7Rcwm44+pB/GHAcB3/8AsupkxGNr4djAAAAAElFTkSuQmCC"/>
              </defs>
            </svg>
            <Dialog.Title className="popUpAuth_title">Восстановить пароль</Dialog.Title>
            <form onSubmit={handleSubmit(onSubmit)} className="authForm" name="passForm">
              <div className="authEmail">
                <input  className="inputField"
                        type="text"
                        placeholder="Email"
                        id="email"
                        name="email"
                        minLength={4}
                        {...register('email',{
                          required: "Обязательно к заполнению!",
                          minLength: {
                            value: 4,
                            message: "Данное поле должно содержать не менее 4 знаков!"
                          },
                          pattern:{
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "Введите email!"
                          }
                        })}
                />
                <div className="errorsInput">
                  {errors?.email && <span>{errors?.email?.message || "Errors!" }</span>}
                </div>
              </div>
              <button className="passBtn">Восстановить пароль</button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>

  )

})


export default ForgoPassword;