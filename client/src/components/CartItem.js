function CartItem ({ id, name, type, size, image, totalPrice, totalCount, onRemove, onPlus, onMinus }){
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return(
    <div className="cart-items_item">
      <div className="cart-items_item_left">
        <div className="cart-items_item_img">
          <img src={ image } alt="img8"/>
        </div>
        <div className="cart-items_item_info">
          <div className="cart-items_item_info_title">{ name }</div>
          <p> { size } размер</p>
        </div>
      </div>

      <div className="cart-items_item_right">
        <div className="cart-items_item_count">
          <div onClick={handleMinusItem} className="cart-items_item_btnMinus">
            <svg
                 width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="black" strokeWidth="2" />
              <path
                d="M15.0402 15.54H19.8402C20.0942 15.54 20.3002 15.746 20.3002 16C20.3002 16.254 20.0942 16.46 19.8402 16.46H15.0402H12.1602C11.9062 16.46 11.7002 16.254 11.7002 16C11.7002 15.746 11.9062 15.54 12.1602 15.54H15.0402Z"
                fill="black" stroke="black" />
            </svg>
          </div>
          <span>{totalCount}</span>
          <div onClick={handlePlusItem} className="cart-items_item_btnPlus">
            <svg
                 width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="black" strokeWidth="2" />
              <path
                d="M16.4602 15.04V15.54H16.9602H19.8402C20.0942 15.54 20.3002 15.746 20.3002 16C20.3002 16.254 20.0942 16.46 19.8402 16.46H16.9602H16.4602V16.96V19.84C16.4602 20.094 16.2542 20.3 16.0002 20.3C15.7462 20.3 15.5402 20.094 15.5402 19.84V16.96V16.46H15.0402H12.1602C11.9062 16.46 11.7002 16.254 11.7002 16C11.7002 15.746 11.9062 15.54 12.1602 15.54H15.0402H15.5402V15.04V12.16C15.5402 11.906 15.7462 11.7 16.0002 11.7C16.2542 11.7 16.4602 11.906 16.4602 12.16V15.04Z"
                fill="black" stroke="black" />
            </svg>
          </div>
        </div>
        <div className="cart-items_item_price">
          <span>{totalPrice} р.</span>
        </div>
        <div onClick={handleRemoveClick} className="cart-items_item_remove">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="black" strokeWidth="2" />
            <path
              d="M17.1458 15.3536L16.7922 15.7071L17.1458 16.0607L19.3944 18.3093C19.613 18.5279 19.613 18.8826 19.3944 19.1012C19.1757 19.3199 18.8211 19.3199 18.6024 19.1012L16.3538 16.8526L16.0002 16.4991L15.6467 16.8526L13.3981 19.1012C13.1794 19.3199 12.8248 19.3199 12.6061 19.1012C12.3875 18.8826 12.3875 18.5279 12.6061 18.3093L14.8547 16.0607L15.2083 15.7071L14.8547 15.3536L12.6061 13.105C12.3875 12.8863 12.3875 12.5317 12.6061 12.313C12.8248 12.0943 13.1794 12.0943 13.3981 12.313L15.6467 14.5616L16.0002 14.9152L16.3538 14.5616L18.6024 12.313C18.8211 12.0943 19.1757 12.0943 19.3944 12.313C19.613 12.5317 19.613 12.8863 19.3944 13.105L17.1458 15.3536Z"
              fill="#D0D0D0" stroke="black" />
          </svg>
        </div>
      </div>

    </div>
  )
}

export default CartItem;