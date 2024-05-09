import React from 'react'

const FormularioCheckOut = ({dataForm, handleChangeInput, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">nombre</label>
    <input type="text" id="name"  name="name" value={dataForm.name} onChange={handleChangeInput}/>

    <label htmlFor="phone">telefono</label>
    <input type="text" id="phone" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>

    <label htmlFor="email">email</label>
    <input type="email" id="email"  name="email" value={dataForm.email} onChange={handleChangeInput}/>

    <button type="submit">Enviar Orden</button>
</form>
)
}

export default FormularioCheckOut