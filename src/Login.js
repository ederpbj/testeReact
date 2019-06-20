import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { conect } from 'react-redux';
import { editEmail, editSenha } from './actions/AuthActions';

//export default class Login extends Component //remove default
export default class Login extends Component{

	static navigationOptions = {
		title:"Login"

	}

	constructor(props){
		super(props);
		this.state = {
		}

		this.entrar = this.entrar.bind(this);

	}

	entrar(){
	}

	render(){
		return(
			<View style={styles.container}>
			
				<Text style={styles.texto}>E-mail:</Text>
				<TextInput style={styles.input} value={this.props.email} onChangeText={(txt) => this.props.editEmail(txt)} />
				
				<Text style={styles.texto}>Senha:</Text>
				<TextInput style={styles.input} secureTextEntry={true} value={this.props.senha} onChangeText={(txt) => this.props.editSenha(txt)} />
					
				<Button title="Entrar" onPress={this.entrar} />
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	input:{
		height:40,
		width:200,
		backgroundColor:'#CCCCCC',
		padding:5,
		marginBottom:10
	}
});

//Criar props com redux
const mapStateTopProps = (state) => {
	return {
		email:state.auth.email,
		senha:state.auth.senha
	};
};

const LoginConnect = connect(mapStateToProps, { editEmail, editSenha })(Login);
export default LoginConnect;