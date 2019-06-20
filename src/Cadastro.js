import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { conect } from 'react-redux';

import { editEmail, editSenha, cadastrar } from './actions/AuthActions';

export default class Cadastro extends Component{

	static navigationOptions = {
		title:"Cadastro",
		headerStyle:{
			backgroundColor:'#FFFF00'
		},
		headerTintColor:'#000000'

	}

	constructor(props){
		super(props);
		this.state = {
			nomeInput:'',
			emailInput:'',
			senhaInput:''
		}

	}


	render(){
		return(
			<View style={styles.container}>
			
				<Text style={styles.texto}>Nome:</Text>
				<TextInput style={styles.input}  />
				
				<Text style={styles.texto}>E-mail:</Text>
				<TextInput style={styles.input} value={this.props.email} onChangeText={(txt) => this.props.editEmail(txt)}/>
				
				<Text style={styles.texto}>Senha:</Text>
				<TextInput style={styles.input} secureTextEntry={true} value={this.props.senha} onChangeText={(txt) => this.props.editSenha(txt)} />
					
				<Button title="Cadastrar" onPress={() => {this.props.cadastrar(this.props.email, this.props.senha) }}/>
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

const CadastroConnect = connect(mapStateToProps, { editEmail, editSenha, cadastrar })(Cadastro);
export default CadastroConnect;