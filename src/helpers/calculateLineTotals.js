const lineTotals = (cartItems) => {
    const cartLineTotals = [...cartItems]
    return cartLineTotals.map((cocktail) => cocktail.quantity * cocktail.price)
}

export default lineTotals