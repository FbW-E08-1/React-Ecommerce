const calculateGrandTotal = (cartItems) => {

    //We use an array reduce method to calculate our gra totals
    return cartItems.reduce((acc, cocktail) =>  acc + (cocktail.price * cocktail.quantity), 0)
}


export default calculateGrandTotal