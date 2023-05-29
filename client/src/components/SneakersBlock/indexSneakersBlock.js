
import React, {useState} from "react";
import PropTypes from 'prop-types';
import BtnCart from '../BtnCart';
import classNames from 'classnames';

function IndexSneakersBlock ({ id, imageUrl, types, name, price, sizes, onClickAddSneakers, /*addedCount*/  } ) {

   // const [activeType, setActiveType] = useState(types[0]);
    const [activeSizes, setActiveSizes] = useState(0);

    // const availableTypes = [ "Женские", "Мужские" ];
    const availableSizes = [ 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47 ];

    // const onSelectType = ( index ) => {
    //     setActiveType( index );
    // };
    const onSelectSize = ( index ) => {
        setActiveSizes( index );
    };
    const onAddSneakers = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: availableSizes[ activeSizes ],
            // type: availableTypes[ activeType ],
        }
        onClickAddSneakers(obj)
    };


    return (
        <div className="sneakersBlock-cart">
            <div className="sneakersBlock-cart_image">
                <img className="sneakersBlock-cart_img" src={ imageUrl } alt="img1"/>
            </div>

            <h4 className="sneakersBlock-cart_title">{ name }</h4>
            <div className="sneakersBlock-cart_selector">
                {/*<ul className="ret">*/}
                {/*    {*/}
                {/*        availableTypes.map( ( type, index ) => (*/}
                {/*            <li*/}
                {/*              key={ type }*/}
                {/*              onClick={() => onSelectType( index )}*/}
                {/*              className={classNames({*/}
                {/*                    active: activeType === index,*/}
                {/*                    disabled: !types.includes(index),*/}
                {/*                }*/}
                {/*              )}*/}
                {/*              >{ type }*/}
                {/*            </li>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</ul>*/}
                <ul className="rer">
                    {
                        availableSizes.map( ( size, index ) =>
                            (
                              <li
                                key={ size }
                                onClick={ () => onSelectSize( index )}
                                className={classNames({
                                    active: activeSizes === index,
                                    disabled: !sizes.includes(size),
                                  }
                                )}
                              > { size }
                              </li>
                            )
                        )
                    }

                </ul>
            </div>
            <div className="sneakersBlock-cart_bottom">
                <div className="sneakersBlock-cart_bottom_price">{ price } р.</div>

                <BtnCart onClick={ onAddSneakers} className="sneakersBlock-cart_bottom_btn">
                    {/*<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path*/}
                    {/*        d="M11.7929 5.76602H8.06429V1.78955C8.06429 1.05755 7.5078 0.464058 6.82143 0.464058C6.13507 0.464058 5.57858 1.05755 5.57858 1.78955V5.76602H1.85C1.16364 5.76602 0.607147 6.35951 0.607147 7.09151C0.607147 7.82351 1.16364 8.417 1.85 8.417H5.57858V12.3935C5.57858 13.1255 6.13507 13.719 6.82143 13.719C7.5078 13.719 8.06429 13.1255 8.06429 12.3935V8.417H11.7929C12.4792 8.417 13.0357 7.82351 13.0357 7.09151C13.0357 6.35951 12.4792 5.76602 11.7929 5.76602Z"*/}
                    {/*        fill="white"/>*/}
                    {/*</svg>*/}
                    <span>В КОРЗИНУ</span>
                </BtnCart>

            </div>
        </div>

    )
}

IndexSneakersBlock.prototype = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sizes: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onAddSneakers: PropTypes.func
    //addedCount: PropTypes.number
};

IndexSneakersBlock.defaultProps = {
    name: '---',
    price: 0,
    sizes:[],
}

export default IndexSneakersBlock;