import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,TextInput } from 'react-native';
//import MyHeader from '../components/MyHeader'
//import {ListItem,Icon} from 'react-native-elements'
//import db from '../config'
//import firebase from 'firebase'
//import SwipeableFlatlist from '../components/SwipeableFlatlist'

export default class PrincipalAddTeacherScreen extends React.Component {
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        return(
            <View>
                <View>
                    <TextInput
                    placeholder="Teacher Name"

                    />
                </View>
            </View>
        )
    }
}