import React from "react";
import {useDispatch} from "react-redux"
import {enviarForm} from "../../redux/actions/actions" 


const ContactUs = () => {
  const dispatch = useDispatch();
  
  const [form, setForm] = React.useState({
    nombre: "",
  email: "",
  asunto: "",
  mensaje: ""
})

const handleInput = (event) => {
  setForm({
    ...form,
    [event.target.name]: event.target.value
  })
}

const handleSubmit = () => {
  dispatch(enviarForm(form))
  setForm({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  })
}


  
  
  return (
    <div className="contactBg">
      <input name="nombre" value={form.name} onChange={handleInput}></input>
      <input name="email" value={form.email} onChange={handleInput}></input>
      <input name="asunto" value={form.asunto} onChange={handleInput}></input>
      <input name="mensaje" value={form.mensaje} onChange={handleInput}></input>
      <button onClick={handleSubmit}>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
