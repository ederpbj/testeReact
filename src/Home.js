import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';

//Execicio
import firebase from './FirebaseConnection'

export default class Home extends Component{

	static navigationOptions = {
		title:null,
		header: null
	}

	constructor(props){
		super(props);
		this.state = {
		}

		this.cadastrar = this.cadastrar.bind(this);
		this.login = this.login.bind(this);


	}

	cadastrar(){
		this.props.navigation.navigate('Cadastro');
	}

	login(){
		this.props.navigation.navigate('Login');
	}

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>Home do Sistema</Text>
				
				<View style={styles.buttonArea}>
					<TouchableHighlight underlayColor="#CCCCCC" onPress={this.cadastrar} style={styles.button}>
						<Text style={styles.btnText}>Cadastrar</Text>
					</TouchableHighlight>
					
					<TouchableHighlight underlayColor="#CCCCCC" onPress={this.login} style={styles.button}>
						<Text style={styles.btnText}>Login</Text>
					</TouchableHighlight>
				</View>
				
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	bg:{
		flex:1,
		width:null
	},
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	title:{
		fontSize:30,
		backgroundColor:'transparent'
	},
	buttonArea:{
		marginTop:30
	},
	button:{
		backgroundColor:'#bfb300',
		margin:10,
		height:40,
		width:200,
		justifyContent:'center'
	},
	numerosArea:{
		height:80
	},
	txtArea:{
		textAlign:'center',
		fontSize:21
	},
	btnText:{
		color:'#FFFFFF',
		textAlign:'center'
	}
})