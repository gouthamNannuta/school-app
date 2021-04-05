import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
//import MyHeader from '../components/MyHeader'
//import {ListItem,Icon} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase'
import { RFValue } from 'react-native-responsive-fontsize';
//import SwipeableFlatlist from '../components/SwipeableFlatlist'

export default class TeacherClassLinkScreen extends React.Component {
constructor(){
    super()
    this.state={
        classlink:"",
        grade:"",
        section:"",
        date:""
    }
}

addClassLinkAndDeatils=()=>{
    var classlink= this.state.classlink
    var grade = this.state.grade
    var section= this.state.section
    
    var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

    db.collection("classlink").add({
       "classlink" : classlink,
       "grade" : grade,
       "section" : section ,
       "date"       : date + '-' + month + '-' + year,
        })
}
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Give Today'S Class Link</Text>
                <Text style={styles.sidetitle}>ClassLink</Text>
            <View>
            <TextInput placeholder="class Link" onChangeText={(text)=>{
                this.setState({
                    classlink:text
                })
            }} style={styles.textinput}  />
            </View>
            <Text style={styles.sidetitle}>Grade</Text>
            <TextInput placeholder="Grade" onChangeText={(text)=>{
                this.setState({
                    grade:text
                })
            }}/>
            <Text style={styles.sidetitle}>Section</Text>
            <TextInput placeholder="Section" onChangeText={(text)=>{
                this.setState({
                    section:text
                })
            }}/>   
            <TouchableOpacity style={styles.button} onPress={this.addClassLinkAndDeatils()} ><Text>update</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#6fc0b8",
      
    },
    title:{
        fontSize:RFValue(20),
        alignSelf:'center'
   
    },
    sidetitle:{
        fontSize:RFValue(15),
        
    },
    button:{
        backgroundColor:"white",
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        shadowColor: "#000",
        marginTop: RFValue(20),
        marginLeft:RFValue(30),

        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16
    }
})