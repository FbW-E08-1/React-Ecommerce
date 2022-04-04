const lineTotals = (cartItems) => {
    const cartLineTotals = [...cartItems]

    //Calculate line totals
    return cartLineTotals.map((cocktail) => cocktail.quantity * cocktail.price)
}

export default lineTotals