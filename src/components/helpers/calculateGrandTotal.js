const calculateGrandTotal = (cartItems) => {
    return cartItems.reduce((acc, cocktail) =>  acc + (cocktail.price * cocktail.quantity), 0)
}


export default calculateGrandTotal