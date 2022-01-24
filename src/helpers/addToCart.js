const addToCart = (cocktail,cartItems, setCartItems) => {

  //Check if item already in our cart
  const found = cartItems.find((item) => item.id === cocktail.id);

  //If the item is not in our cart use the object we sent in through the click event called clickedItem, add it to our cartItems array and create a new property
  //inside the clickedItem object called quantity and initialize it with 1.
  if (found === undefined) {
    setCartItems([...cartItems, { ...cocktail, quantity: 1 }]);
  } else {
    //If we have the item clicked inside our cart already, we need to get the index of this object within the cartItems array
    const index = cartItems.indexOf(found);

    //We already have the object inside our found variable so all we need to do is increment the quantity
    found.quantity += 1;

    //We don't want to mess with the original cartItems array so we make a deep copy into copyCartItems
    let copyCartItems = [...cartItems];

    //We need to remove the original object from our copied array.
    //We use splice. Splice accepts three arguments. the start index, how many elements to remove from our starting index and what to replace it with
    //In this case we know the index of our object from our indexOf command. We only want to remove this object hence the 1 in our second argument
    //and we want to replace the removed object with our new amended found object.
    copyCartItems.splice(index, 1, found);

    //All we need to do here is replace whatever we had in our cartItems state array with our copy.
    setCartItems(copyCartItems);
  }
};

export default addToCart;
