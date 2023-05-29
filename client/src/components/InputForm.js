import React from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { isTSInterfaceDeclaration } from 'eslint-plugin-react/lib/util/ast';


function InputForm ({id, name, placeholder, type, patternVal, minLengthVal, maxLengthVal}){
  const {register, formState} = useFormContext();
  return(
    <div className="inputForm" id={id}>
      <span>*</span>
      <input className="inputFormField"
             type={type}
             placeholder={placeholder}
             id={name}
             name={name}

             {...register(name,{
               required: "Обязательно к заполнению!",
               minLength: {
                 value: minLengthVal,
                 message: `Введите правильно ${placeholder}!`
               },
               maxLength: {
                 value: maxLengthVal,
                 message: `Введите правильно ${placeholder}!`
               },
               pattern:{
                 value: patternVal,
                 message: `Введите верно ${placeholder}!`
               },

             })}
      />
      <div className="errorsInput">
        {!!formState.errors[name] && <span>{ formState.errors[name]?.message || "Errors!" }</span>}
      </div>
    </div>
  )
}

export default InputForm;