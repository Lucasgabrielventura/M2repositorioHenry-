export const enviarForm = (formulario) => {
    return{
        type: "FORM_DATA",
        payload: formulario
    }
}

//constantes solo colocar export
//funciones export default o export