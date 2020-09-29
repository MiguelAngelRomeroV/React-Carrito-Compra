const getGifs = async () => {
    const url = 'https://raw.githubusercontent.com/cobeisfresh/frontend-tasks/shopping-cart/products.json';
    const res = await fetch(url);
    const  data = await res.json();


    return data.products;//array
}

export default getGifs;