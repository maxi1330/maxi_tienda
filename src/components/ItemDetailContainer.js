import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer () {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProduct = new Promise( (resolve,eject) => {
            setTimeout(() => {
                resolve(productList[0]);
            }, 2000);
        });

        getProduct.then((result) => {
            setItem (result);
        });   
   
    }, []);

    return (
        <fragment className='container row'>
            <ItemDetail {...item}/>
        </fragment>
    );
}

const productList = [
    {
        id: 1,
        title: 'Volkswagen Golf 1.4',
        price: '3.500.000',
        description: 'Volkswagen Golf 1.4 Comfortline 2019 58.000 km',
        stock: 1,
        image: "images/auto01.webp"
    },
    {
        id: 2,
        title: 'Volkswagen Golf 1.4',
        price: '3.500.000',
        description: 'Volkswagen Golf 1.4 Comfortline 2019 58.000 km',
        stock: 1,
        image: "images/auto02.webp"
     },
     {
        id: 3,
        title: 'Peugeot 208 1.6 Allure',
        price: '3.090.000',
        description: 'Peugeot 208 1.6 Allure 2021 Sensores, GPS 0 km',
        stock: 1,
        image: "images/auto04.webp"
     },
     {
        id: 4,
        title: 'Audi A5 2.0',
        price: '8.240.000',
        description: 'Audi A5 2.0 Tfsi Coupe 190cv 2017 29.500km',
        stock: 1,
        image: "images/auto03.webp"
     },
     {
        id: 5,
        title: 'Chevrolet Camaro 6.2',
        price: '3.500.000',
        description: 'Chevrolet Camaro 6.2 Coupe Ss V8 2014 25.000 km',
        stock: 1,
        image: "images/auto05.webp"
     },
     {
        id: 6,
        title: 'Volkswagen Scirocco 2.0',
        price: '5.200.000',
        description: 'Volkswagen Scirocco 2.0 Tsi 211cv 2013 80.400 km',
        stock: 1,
        image: "images/auto06.webp"
     },
     {
        id: 7,
        title: 'Renault Clio 1.2',
        price: '3.500.000',
        description: 'Renault Clio 1.2 Mío Authentique Pack 2013 80.000 km',
        stock: 1,
        image: "images/auto07.webp"
     }
]

export default ItemDetailContainer;