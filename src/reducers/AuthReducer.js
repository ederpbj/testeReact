
const initialState = {
    email:'suport_ederpbj@argus.com',
    senha:'123456'
}

const AuthReducer = (state = [], action) => {
    if(state.length == 0){
        return initialState;
    }
    
    //state.email = 'novo_suport@argus.com';
//Recebe informações do action
    if(action.type == 'editEmail'){
        return {...state, email:action.payload.email };
    }
    
    if(action.type == 'editSenha'){
        return {...state, senha:action.payload.password };
    }
    
   /*  if(action.type == 'cadastrar'){
        return {...state, senha:action.payload.password };
    } */

    if(action.type == 'cadastroSucesso'){
        alert("Cadastro sucesso!");
        return state;
    }    
    
    if(action.type == 'cadastroErro'){
        alert("Error: "+action.payload.code);
        return state;
    }    


    return state;
};

//Excluido para incluir provider
//export default AuthReducer;

export default class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Navegador />
            </Provider>
        );
    }
}