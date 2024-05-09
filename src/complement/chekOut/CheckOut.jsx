import React from "react"
import { useState,useContext } from "react"
import { CartContext } from "../../context/CartContext"
import FormularioCheckOut from "./FormularioCheckOut"
import { addDoc, collection } from "firebase/firestore"
import db from "../../db/db"
import { Link } from "react-router-dom"
import validateForm from "../../helpers/validationYup"
import { toast } from "react-toastify"



const CheckOut = () => {
 const [dataForm, setDataForm] = useState ({
    name:"",
    phone:"",
    email:"",
 });
    const [idOrder, setIdOrder] = useState(null)
    const {cart, totalPrice} = useContext(CartContext)



    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name] : event.target.value})
    }

    const handleSubmit =async (event) => {
        event.preventDefault();
        const order = {
            user: {...dataForm},
            products:[...cart],
            total: totalPrice(),
        };

        const response=await validateForm(dataForm)
        if(response.status === "success"){
            upLoadOrder(order);
        }else{
            toast(response.error)
        }
    
    };

    const upLoadOrder = async(order) => {
        const ordersRef = collection(db, "orders")
        const response = await addDoc(ordersRef, order )

        setIdOrder(response.id)
    }

return (
    <div>
        {
            idOrder ? (<div>
                <h2>Gracias por su compra</h2>
                <p>Id de seguimiento : {idOrder}</p>
                <Link to="/">volver al inicio</Link>
            </div>
        ) : (<FormularioCheckOut dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmit={handleSubmit} /> )
        }        
    </div>
)
}

export default CheckOut