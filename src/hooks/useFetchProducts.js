import {useState,useEffect} from 'react'
import getProducts from '../helpers/getProducts'

export const useFetchProducts = () => {
    const [state,setState]=useState({
        data:[],
        loading:true
    });
    
    useEffect(() => {
        
        getProducts()
        .then(prod=>{
                setState({
                    data:prod,
                    loading:false
                });
        })
        .catch(err=>console.log(err));

    }, [])
    return state
}