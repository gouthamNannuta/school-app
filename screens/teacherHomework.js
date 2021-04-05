import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
//import MyHeader from '../components/MyHeader'
//import {ListItem,Icon} from 'react-native-elements'
//import db from '../config'
//import firebase from 'firebase'
//import SwipeableFlatlist from '../components/SwipeableFlatlist'

export default class TeacherHomeworkScreen extends React.Component {
    constructor(){
        super()
        this.state={
            subject="",
            grade="",
            section="",
            workToDo=""
        }
    }
    render(){
        return(
            <View>
              <TextInput placeholder="subject" 
                  onChangeText={(text)=>{
                    this.setState({
                        subject:text
                    })
                }
                }
                />
              <TextInput placeholder="grade" onChangeText={(text)=>{
                    this.setState({
                        grade:text
                    })
                }
                }/>
              <TextInput placeholder="section" onChangeText={(text)=>{
                    this.setState({
                        section:text
                    })
                }
                }/>
              <TextInput placeholder="Work To Do" onChangeText={(text)=>{
                    this.setState({
                        workToDo:text
                    })
                }
                }/>
              <TouchableOpacity><Text>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}