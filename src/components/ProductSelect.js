import React, { useState, useEffect } from 'react'
import { useFetchProducts } from '../hooks/useFetchProducts'

export default function ProductSelect({ prodId, setProdId }) {

    const { data: Products, loading } = useFetchProducts();
    const [cartProducts, setCartProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        mountProduct();
        addProducts();
    }, [prodId])

    const addProducts = () => {
        let fullProduct = [...new Set(prodId)];
        let myProduct = []
        let cantProduct = 0
        const prod = fullProduct.map((prod, index) => {
            myProduct = Products.find((product) =>
                product.id === prod
            );
            cantProduct = prodId.reduce((total, proId) => {
                return proId === prod ? total += 1 : total
            }, 0);

            myProduct.cantidad = cantProduct;
            return myProduct
        });
        setCartProducts(prod);

    }

    const mountProduct = () => {
        let total = 0
        prodId.map((productCar) => {
            let myProduct = Products.filter((product) =>
                product.id === productCar
            );
            total = total + myProduct[0].price.amount;
            setTotalProducts(total.toFixed(2));
        });
    }

    const handleButtonDelete = (id) => {

        const updateProducts = cartProducts.filter((carritoId) => {
            return carritoId.id !== id;
        });
        const updateId = updateProducts.map(p => {
            return p.id
        })
        setProdId(updateId);
        setCartProducts(updateProducts);
        mountProduct();
    }

    return (
        <div className="p-2 pt-4">
            <h1 className="px-2 font-bold text-xl md:text-2xl text-white">Kosarica</h1>
            <div className="divide-y divide-gray-400">
                {loading && <p className="animate__animated animate__flash text-white">Loanding</p>}
                {
                    cartProducts.map(p =>
                        <div 
                        className="max-w-sm rounded overflow-hidden shadow-lg relative m-2" 
                        key={p.id}>
                            <div className="flex flex-wrap bg-blue-200">
                                <div className="w-2/5 ">
                                    <img
                                        className="w-full h-full"
                                        src={p.image}
                                        alt="Producto" />
                                </div>
                                <div className="w-3/5 p-2">
                                    <div className="font-bold text-sm mb-2">
                                    <span className="text-blue-600 text-lg">{p.cantidad} </span>
                                        <span className="text-blue-600 text-md">
                                             x  
                                        </span> {p.name}
                                    </div>
                                    <p className="text-blue-600 text-base">
                                        <span>{(p.price.amount*p.cantidad).toFixed(2)} </span>
                                        <span> {p.price.currency} </span>
                                    </p>
                                </div>
                            </div>
                            <div className="items-center absolute top-0 right-0 h-6 w-6 rounded-full bg-transparent bg-red-600">
                                <button
                                    className=" h-6 w-6 rounded-full  text-white font-bold"
                                    onClick={() => handleButtonDelete(p.id)}
                                >x</button>
                            </div>
                        </div>
                    )
                }
                <hr />
                <div className="text-center text-white p-4">
                    <h2 className="font-bold text-lg">Monto total</h2>
                    <p className="text-xl">{totalProducts}</p>
                </div>
            </div>
        </div>
    )
}
