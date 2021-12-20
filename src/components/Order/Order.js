import React from "react";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "./../../context/CartContext";
import { query, getDocs, collection, getFirestore, orderBy } from "@firebase/firestore";
import "./Order.css";

const Order = () => {
    const [order, setOrder] = useState([]);
    const { userEmail } = useContext(CartContext);
    const { email } = userEmail;

    useEffect(() => {
        const db = getFirestore();
        const ref = query(collection(db, 'ticket'), orderBy('date'));
        getDocs(ref).then((snapshop) => {
            const orden = snapshop.docs.map((doc) => {
                const data = doc.data();
                const { date } = data;
                const fecha = new Date(date.seconds * 1000);
                const normalizeCreatedAt = new Intl.DateTimeFormat('es-ES' , {
                    dateStyle: 'full',
                    timeStyle: 'short'
                }).format(fecha);
                return {
                    id: doc.id,
                    ...data,
                    date: normalizeCreatedAt
                };
            });
            setOrder(orden.filter((x) => x.buyer === email));
        });
    }, [email]);

    return (
        <div className="containerTicket">
            { order?.length === 0 ? (
                <h1>Espere...</h1>
            ) : (
            <>
                <h4>Datos de tus ordenes</h4>
                <h5>Comprador: {email}</h5>
                { order.map((ord) => (
                    <div className="containerTicket card" key={ord.id}>
                        <p>Fecha: {ord.date}</p>
                        <p>Nro de comprobante: {ord.id}</p>
                        <p>Cantidad de productos: {String(ord.items.length)}</p>
                        <p>Precio total: ${ord.total}</p>
                    </div>
                ))}
            </>)
            }
        </div>
    );
}

export default Order;