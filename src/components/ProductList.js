import React from 'react'
import { useFetchProducts } from '../hooks/useFetchProducts'

export default function ProductList({setProdId}) {
    
    const { data: products, loading } = useFetchProducts();
    

    const addProduct=(id) => {
        setProdId(prodId=>[id,...prodId]);
    }
    
    return (
                <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4 md:p-8 p-4">
                    {loading && <p className="animate__animated animate__flash text-white">Loanding</p>}
                    {
                        products.map(p =>
                            <div className="max-w-sm rounded overflow-hidden shadow-xl animate__animated animate__flash" key={p.id}>
                                <img className="w-full" 
                                src={p.image} 
                                alt={p.name} />
                                <div className="px-6 py-4">
                                    <div className="font-bold md:text-xl text-xs mb-2">
                                        {p.name}
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        <span className="md:text-2xl text-lg">{p.price.amount} </span>
                                        <span> {p.price.currency} /</span>
                                        <span>{p.price.measureUnit}</span>
                                    </p>

                                </div>
                                <div className="px-6 pt-1 pb-4">
                                    <button 
                                    className="btn bg-blue-600 md:px-8 px-4 rounded text-white md:py-1 md:text-lg text-sm" 
                                    onClick={() =>addProduct(p.id)}
                                    >
                                     Add</button>
                                </div>
                            </div>
                        )
                    }
                </div>
    )
}
