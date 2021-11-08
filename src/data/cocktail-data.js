//Here we have all the data we use within our app. We have an array and within this array we have an object with all the information
//related to each cocktail. Such as id which is needed for our key. The name to link back to our state object, a title, the url of the image and
//an array containing the ingredients for this cocktail.

const cockTailData = [
    {id: 0, name: 'Cosmopolitan', title: 'Cosmopolitan', image: 'https://recipetineats.com/wp-content/uploads/2019/10/Cosmopolitan-cocktail_0.jpg', price: 10.55, ingredients: ['2 oz Vodka', 
    '1 oz Cointreau',
    '1/2 oz Cranberry juice',
    '1/2 oz Fresh sour mix',
    'Lemon twist for garnish']},
    {id: 1, name: 'Martini', title: 'Vodka Martini', image: 'https://i2.wp.com/dishesdelish.com/wp-content/uploads/2019/03/Vodka-Dirty-Martini-Square-1.jpg', price: 12.15, ingredients: ['2 oz Vodka',
    '1/2 to 3/4 oz dry vermouth',
    'Lemon twist or three green olives garnish']},
    {id: 2, name: 'Mojito', title: 'Mojito', image: 'https://kitchenswagger.com/wp-content/uploads/2020/07/mojito-recipe3.jpg', price: 9.00, ingredients: ['10 fresh mint leaves',
    '1/2 lime, cut into 4 wedges',
    '2 tablespoons white sugar, or to taste',
    '1 cup ice',
    '1 1/2 fluid ounces white rum',
    '1/2 cup club soda']},
    {id: 3, name: 'MaiTai', title: 'Mai Tai', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/refreshing-rum-mai-tai-cocktail-royalty-free-image-1129485781-1567157013.jpg?crop=0.664xw:0.498xh;0.154xw,0.361xh&resize=1200:*', price: 8.99, ingredients: ['1 oz light rum',
    '1 oz gold rum',
    '1/2 oz Orange Curacao liqueur',
    '1/2 oz orgeat syrup (almond syrup)',
    '1/2 oz lime juice',
    '1 oz dark rum']},
    {id: 4, name: 'Margarita', title: 'Margarita', image: 'https://www.dmarge.com/wp-content/uploads/2020/07/margarita-cocktail.jpg', price: 11.20, ingredients: ['1 (6 ounces) can frozen limeade concentrate',
    '6 fluid ounces tequila',
    '1 oz Cointreau orange liqueur',
    '2 fluid ounces triple sec']},
    {id: 5, name: 'CubaLibre', title: 'Cuba Libre', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cuba-libre-drink-placed-on-rustic-table-royalty-free-image-1581775698.jpg', price: 7.88, ingredients: ['1/2 lime',
    '2 ounces light rum, preferably Cuban',
    '4 ounces cola (Coca-Cola)'] },
    {id: 6, name: 'Caipirinha', title: 'Caipirinha', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sweet-and-refreshing-drink-caipirinha-cocktail-royalty-free-image-1581529965.jpg?crop=0.668xw:1.00xh;0.119xw,0&resize=640:*', price: 14.15, ingredients: ['2 oz Cachaca (Rum)',
    '1 lime',
    '1 tsp sugar']},
    {id: 7, name: 'MintJulep', title: 'Mint Julep', image: 'https://creative-culinary.com/wp-content/uploads/blackberry-mint-julep-scene.jpg', price: 12.12, ingredients: ['1/2 cup water',
    '1/2 cup white sugar',
    '2 tablespoons roughly sliced fresh mint leaves',
    '1 cup Kentucky bourbon',
    '2 sprigs fresh mint leaves for garnish']}
]


export default cockTailData
















