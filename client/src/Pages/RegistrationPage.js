import React from "react";
import Footer from '../components/Footer';
import InputForm from '../components/InputForm';
import { useForm, FormProvider } from 'react-hook-form';
import { getValue } from '@testing-library/user-event/dist/utils';

function RegistrationPage(){
  const form = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data) => {
    console.log(data)
    form.reset();
  };
  return(
    <div>
    <section className="registration">
      <div className="registration_title">
        <div className="registration_title_name">Быстрая регистрация</div>
        <div className="registration_title_text">Если Вы уже зарегистрированы, перейдите на страницу входа в систему.</div>
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="registration_form">
          <InputForm  type="text" placeholder="Имя" name="name" patternVal={/^[А-Яа-яЁё\s]+$/} minLengthVal={2}/>
          <InputForm type="email" placeholder="Email" name="email" patternVal={/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/} minLengthVal={4}/>
          <InputForm type="tel" placeholder="Телефон" name="phone" patternVal={/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/}/>
          <InputForm type="text" placeholder="Пароль" name="password" patternVal={/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$/}/>
          <InputForm type="text" placeholder="Повторите пароль" name="password2" patternVal={/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$/}/>
          <input type="checkbox" className="custom-checkbox" id="approval" name="approval" value="yes"/>
          <label htmlFor="approval">Я даю согласие на обработку моих персональных данных в соответствии с политикой по обработке персональных данных, а также соглашаюсь с условиями публичной оферты.
          </label>
          <button  className="formBtn">ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </form>
      </FormProvider>
    </section>
      <Footer/>
    </div>
  )
}

export default RegistrationPage;