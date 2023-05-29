import {useForm} from 'react-hook-form';
import Footer from '../components/Footer';
import React from 'react';

function PaymentPage (){
  const { register,
    formState:{ errors },
    handleSubmit,
    reset,
   } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = ( data ) => {
    alert(`${JSON.stringify(Object.values(data)[1])} ${"спасибо за покупку!"}`);
    reset();
  };

  return(
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="elements">
      <div className="cardFace">
        <div className="card-number">
          <label htmlFor="numberPlace" className="card-number__number">Номер карты</label>
          <input  className="card-number__data"
                  type="text"
                  id="numberCard"
                  name="numberCard"
                  maxLength={16}
                  {...register('numberCard',{
                    required: "Обязательно к заполнению!",
                    minLength: {
                      value: 16,
                      message: "Данное поле должно содержать 16 цифр!"
                    },
                    pattern:{
                      value: /^(\d){1,16}$/g,
                      message: "Только цифры!"
                    }
                  })}
          />
          <div className="errors">{
            errors?.numberCard && <span>{errors?.numberCard?.message || "Errors!" }</span>
          }</div>
        </div>

        <div className="card-date" >
          <label className="card-date__validity">Срок действия</label>
          <select className="card-date__data" id="dateMonth" required>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <select className="card-date__data" id="dateYear" required>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
          </select>
        </div>

        <div className="card-name">
          <input  className="card-name__holder"
                  type="text"
                  id="cardName"
                  placeholder="Держатель карты"
                  {...register('cardName',{
                    required: "Обязательно к заполнению!",
                    minLength: {
                      value: 4,
                      message: "Данное поле должно содержать не меньше 4 букв!"
                    },
                    pattern:{
                      value: /([A-Z]+\s)+([A-Z]+)/ig,
                      message: "Имя и фамилия на английском языке!"
                    }
                  })}
          />
          <div className="errors">{
            errors?.cardName && <span>{errors?.cardName?.message || "Errors!" }</span>
          }</div>
        </div>
      </div>

      <div className="cardBack">
        <div className="cardBack__band"></div>
        <label className="cardBack__code">Код CVV2 / CVC2</label>
        <input  className="cardBack__cvv"
                type="text"
                id="cvv"
                maxLength={3}
                {...register('cvv',{
                  required: "Обязательно к заполнению!",
                  minLength: {
                    value: 3,
                    message: "Данное поле должно содержать не меньше 3 цифр!"
                  },
                  pattern:{
                    value: /^(\d){1,3}$/g,
                    message: "Только цифры!"
                  }
                })}
        />
        <div className="errorsCvv">{
          errors?.cvv && <span>{errors?.cvv?.message || "Errors!" }</span>
        }</div>
      </div>
        <button className="cart-bottom_price">ОПЛАТИТЬ СЕЙЧАС</button>
    </form>
      <Footer/>
    </div>
  )
}

export default PaymentPage;