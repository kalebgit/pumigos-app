import { useEffect, useState } from "react"
import InputBox from "../components/Forms/InputBox";


export default function Market(){
    
    const [setProducts, products] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{
        const getProducts = async()=>{
            let productsPath = new URL('http://127.0.0.1:8080/products');
            const headers = new Headers();
            headers.append('content-type', 'application/json')
            const request = new Request(productsPath, {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default'
            })
            console.log(request)
            const response = await fetch(request);
            const products = await response.json()
            console.log(products)
            
        }
        
        getProducts();

        return ()=>{

        }
    });

    return (
        <>
            <InputBox type="search" labelText="filtro de busqueda"/>
        </>
    )
}