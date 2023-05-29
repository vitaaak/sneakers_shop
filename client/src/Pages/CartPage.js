import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeCartItem, minusCartItem, plusCartItem } from '../redux/actions/cart';
import CartEmpty from '../components/CarftEmpty';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

import PaymentPage from './PaymentPage';
import Footer from '../components/Footer';
import InputForm from '../components/InputForm';


function CartPage () {
    const dispatch = useDispatch();
    const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart)

    const [ validate, setValidate ] = useState(false);
  const toggleValidate = () => {
    setValidate( validate === true )
  };

    const addedSneakers = Object.keys(items).map(key => {
        return items[key].items[0];
    });

    const onClearCart = () => {
      if(window.confirm('Вы уверены, что хотите очистить корзину?')){
        dispatch(clearCart());
      }
    };

    const onRemoveCartItem =(id) => {
      if(window.confirm('Вы хотите удалить?')){
        dispatch(removeCartItem(id)) ;
      }
    };

    const onPlusItem = (id) => {
      dispatch(plusCartItem(id));
    };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const { register,
    formState:{ errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = () => {
    // переадресация на paymentpage отправки формы
    reset()

  };

  let date = new Date();
  let now = date.toLocaleDateString('en-GB');
  let dateTomorrow = new Date(date.getTime() + (24 * 60 * 60 * 1000));
  let dayTomorrow = dateTomorrow.getDate();




    return(
      <div>
        {
          totalCount ?
            <div className="cart-container">
            <div className="cart-clear">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5H4.16667H17.5" stroke="black" strokeOpacity="0.61" strokeWidth="1.2"
                      strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M6.66675 5.00002V3.33335C6.66675 2.89133 6.84234 2.4674 7.1549 2.15484C7.46746 1.84228 7.89139 1.66669 8.33342 1.66669H11.6667C12.1088 1.66669 12.5327 1.84228 12.8453 2.15484C13.1578 2.4674 13.3334 2.89133 13.3334 3.33335V5.00002M15.8334 5.00002V16.6667C15.8334 17.1087 15.6578 17.5326 15.3453 17.8452C15.0327 18.1578 14.6088 18.3334 14.1667 18.3334H5.83341C5.39139 18.3334 4.96746 18.1578 4.6549 17.8452C4.34234 17.5326 4.16675 17.1087 4.16675 16.6667V5.00002H15.8334Z"
                  stroke="black" strokeOpacity="0.61" strokeWidth="1.2" strokeLinecap="round"
                  strokeLinejoin="round" />
                <path d="M8.33325 9.16669V14.1667" stroke="black" strokeOpacity="0.61" strokeWidth="1.2"
                      strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.6667 9.16669V14.1667" stroke="black" strokeOpacity="0.61" strokeWidth="1.2"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span onClick={onClearCart}>Очистить корзину</span>
            </div>
            <div className="cart-items">
              {
                addedSneakers.map(obj => (
                  <CartItem
                    key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    type={obj.type}
                    size={obj.size}
                    image={obj.imageUrl}
                    totalPrice={items[obj.id].totalPrice}
                    totalCount={items[obj.id].items.length}
                    onRemove={onRemoveCartItem}
                    onPlus={onPlusItem}
                    onMinus={onMinusItem}
                  />
                ))
              }
            </div>

            <div className="cart_price">Итог: <span>{totalPrice} р.</span></div>

              <form onSubmit={handleSubmit(onSubmit)} className="delivery">
                <div className="delivery_title">Выберите способ получения</div>
                <label htmlFor="deliveryChoice">
                  <input type="radio" id="deliveryChoice"
                         name="delivery" value="delivery"/>
                  Доставка</label>
                <div className="formDelivery">
                  <div className="formDelivery_contact">
                    <div className="formDelivery_title">Получатель</div>
                    <div className="formDelivery_form" id="formDelivery_recipient">

                      <div className="delRecipient" id="delRecipient">
                        <span>*</span>
                        <input  className="inputFieldDel"
                                type="email"
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

                      <div className="delRecipient" id="delRecipient">
                        <span>*</span>
                        <input className="inputFieldDel"
                                type="tel"
                                placeholder="Телефон"
                                id="phone"
                                name="phone"
                                {...register('phone',{
                                  required: "Обязательно к заполнению!",
                                  minLength: {
                                    value: 12,
                                    message: "Введите правильно номер!"
                                  },
                                  maxLength: {
                                    value: 13,
                                    message: "Введите правильно номер!"
                                  },
                                  pattern:{
                                    value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
                                    message: "Введите правильно номер!"
                                  }
                                })}
                        />
                        <div className="errorsInput">
                          {errors?.phone && <span>{errors?.phone?.message || "Errors!" }</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="formDelivery_contact" >
                    <div className="formDelivery_title">Адрес доставки</div>
                    <div className="formDelivery_form" id="formDelivery_address">
                      <div className="delRecipient" id="delRecipient">
                        <span>*</span>
                        <input className="inputFieldDel"
                               type="text"
                               placeholder="Город/населенный пункт"
                               id="cityDel"
                               name="cityDel"
                               {...register('cityDel',{
                                 required: "Обязательно к заполнению!",
                                 minLength: {
                                   value: 2,
                                   message: "Проверьте введенный адрес!"
                                 },
                                 pattern:{
                                   value: /^[А-Яа-яЁё\s]+$/,
                                   message: "Проверьте введенный адрес!"
                                 }
                               })}
                        />
                        <div className="errorsInput">
                          {errors?.cityDel && <span>{errors?.cityDel?.message || "Errors!" }</span>}
                        </div>
                      </div>

                      <div className="delTime">
                        <div className="delRecipient" id="delRecipient">
                          <span>*</span>
                          <select className="inputFieldDel" id="dateDay" required>
                            <option>{now}</option>
                            <option>{`${dayTomorrow}/0${dateTomorrow.getDate()+1}/2023`}</option>
                            <option>{`${dayTomorrow + 1}/0${dateTomorrow.getDate()+1}/2023`}</option>

                          </select>

                        </div>
                        <div className="delRecipient" id="delRecipient">
                          <span>*</span>
                          <select className="inputFieldDel" id="dateTime" required>
                            <option>09.00-12.00</option>
                            <option>12.00-15.00</option>
                            <option>15.00-18.00</option>
                          </select>
                        </div>
                      </div>
                      <div className="delRecipient" id="delRecipientCom">
                        <input className="inputFieldDel"
                               type="text"
                               placeholder="Комментарий"
                               id="comDel"
                               name="comDel"
                               {...register('comDel',{
                                 maxLength: {
                                   value: 500,
                                   message: "Максимальное количество знаков 500!"
                                 },
                               })}
                        />
                        <div className="errorsInput">
                          {errors?.comDel && <span>{errors?.comDel?.message || "Errors!" }</span>}
                        </div>
                      </div>

                    </div>
                  </div>


                </div>

                <label htmlFor="pickupChoice" id="pickup">
                  <input type="radio" id="pickupChoice"
                         name="delivery" value="pickup"/>
                  Самовывоз <div>Всегда бесплатно</div>
                </label>

                <div className="cart-bottom">
                  <div className="cart-bottom_quantity">Количество: <span>{totalCount} шт.</span></div>
                  <div className="cartPrice">Сумма заказа: <span>{totalPrice} р.</span></div>
                  {/*<Link to = "/payment">*/}
                    <button className="cart-bottom_priceBtn" >ОПЛАТИТЬ СЕЙЧАС</button>
                  {/*</Link>*/}
                </div>
              </form>



          </div> : <CartEmpty/>
        }

        <Footer/>
      </div>
    )
}

export default CartPage;