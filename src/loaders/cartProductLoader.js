import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async()=>{

    const loadedProducts=await fetch('products.json');
    const products=await loadedProducts.json();
    console.log(products);
    
 
    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        // step 2: get product from products state by using id
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            // step 3: add quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step 4: add the added product to the saved cart
            savedCart.push(addedProduct);
        }
    }

    return savedCart;

}

export default cartProductLoader;