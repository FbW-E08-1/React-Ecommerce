const reduceQuantity = (cocktail, cartItems, setCartItems) => {
    //Grab the object from the cart
    const found = cartItems.find((item) => item.id === cocktail.id);
    //Get the index of our found copy item within the cartItems array
    const index = cartItems.indexOf(found);

    //Decrement the item quantity of our copy
    found.quantity -= 1;

    //We don't want to mess with the original cartItems array so we make a deep copy into copyCartItems
    let copyCartItems = [...cartItems];

    //We need to remove the original object from our copied array.
    //We use splice. Splice accepts three arguments. the start index, how many elements to remove from our starting index and what to replace it with
    //In this case we know the index of our object from our indexOf command. We only want to remove this object hence the 1 in our second argument
    //and we want to replace the removed object with our new amended found object.
    //We only want to replace the removed object if the quantity is greater or equal to 1. Else just remove the item from the cart.
    found.quantity >= 1
      ? copyCartItems.splice(index, 1, found)
      : copyCartItems.splice(index, 1);
    setCartItems(copyCartItems);
  };


  export default reduceQuantity