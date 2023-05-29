function BtnCart ({onClick, className, children}) {
    return(
        <button className={className} onClick={onClick}>{children}</button>
    )
}

export default BtnCart;