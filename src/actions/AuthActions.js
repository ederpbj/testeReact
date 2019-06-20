import firebase from '../FirebaseConnection';

//Envia informações para Reducer
export const editEmail = (email) => {
    return {
        type:'editEmail',
        payload:{
            email:email
        }
    }
}

export const editSenha = (pass) => {
    return {
        type:'editSenha',
        payload:{
            password:pass
        }
    }
}

//Função usada por Cadastro.js
export const cadastrar = (email, senha) =>{
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((user) =>{
                dispatch({
                    type:'cadastroSucesso'
                });
            })
            .catch((error)=>{
                dispatch({
                    type:'cadastroErro',
                    payload:{
                        code:error.code
                    }
                });
            });
    }
    /*
    //alert('Veio pra cá! '+email+' - '+senha);

     return {
        type:'cadastrar',
        payload:{
            email:email,
            password:senha
        }
    } */
};