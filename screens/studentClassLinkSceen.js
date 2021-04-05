import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Linking,Alert } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
//import MyHeader from '../components/MyHeader'
//import {ListItem,Icon} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase'
//import SwipeableFlatlist from '../components/SwipeableFlatlist'

export default class StudentClassLinkScreen extends React.Component {
    constructor(){
        super()
        this.state={
            classlink:"",
            emailId:firebase.auth().currentUser.email,
            grade:"",
            section:"",
            date:"",
        }
    }
    componentDidMount(){
        this.getTime()
        this.getClassLink()
    }
    getTime(){
        var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    this.setState({
        date:date + '-' + month + '-' + year,
        
    })
    }
    getClassLink= async() =>{
    var usergrade = await db.collection("users").where("emailId","==",this.state.emailId).get().then((snapshot)=>{
        snapshot.forEach((doc) => {
          this.setState({
              grade:doc.data().grade,
              section:doc.data().section
          })
           db.collection("classlink")
          .where("grade","==",this.state.grade)
          .where("section","==",this.state.section)
          //.where("date","==",this.state.date)
          .get()
          .then((snapshot)=>{
              snapshot.forEach((doc) => {
                  this.setState({
                      classlink:doc.data().classlink
                  })
                  console.log(this.state.classlink)
              })
          })
    })})
    console.log(this.state.grade)
    console.log(this.state.section)
    console.log(this.state.date)
    
}
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.linkText}>
                    {this.state.classlink}
                </Text>
            <View>
            <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
                if(this.state.classlink===""){
                 Alert.alert("Link not updated Today")   
                }else{
              Linking.openURL(this.state.classlink);
            }}}>
               Join
          </Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
link:{
    backgroundColor:"white",
    justifyContent:'center',
    alignItems:'center',
    fontSize:20,
    fontWeight:'bold',  

},
  container:{
    flex:1,
    backgroundColor:'#77b5fe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  hyperlinkStyle: {
    color: 'black',
    fontWeight:'bold',
    width:150,
    height:RFValue(50),
    backgroundColor:"white",
    fontSize:30,
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:25,
    borderColor:"black",
    borderWidth:1,
    marginTop:400,
    paddingLeft:40
},
linkText:{
    color:"black",
    backgroundColor:"white",
    borderRadius:25,
    fontWeight:'bold',
    fontSize:RFValue(17),
    width:"80%",
    padding:10,
}
})