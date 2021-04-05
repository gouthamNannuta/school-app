import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
 //   import {AppTabNavigator} from './AppTabNavigator'
   import CustomSideBarMenu from './CustomSideBarMenu'
/*    import Settings from '../screens/settingScreen'
    import MyDonationScreen from '../screens/MyDonationScreen'
    import Notification from '../screens/notification'
    import MyReceivedBookScreen from '../screens/myReceivedBookScreen'
  */ 
import { Icon } from 'react-native-elements'
import StudentClassLinkScreen from '../screens/studentClassLinkSceen'
import StudentHomeWorkScreen from '../screens/studentHomeworkScreen'
import StudentReportsScreen from '../screens/studentReportsScreen'
import StudentTimetableScreen from '../screens/studentTimetable'
import TeacherClassLinkScreen from '../screens/teacherClassLinkScreen'
    
    export const AppDrawerNavigator = createDrawerNavigator({
        StudentClassLinkScreen:{screen:TeacherClassLinkScreen,navigationOptions:{drawerIcon:<Icon name="gift" type="font-awesome"/>,drawerLabel:"class Link"}},
        Settings:{screen:StudentClassLinkScreen,navigationOptions:{drawerIcon:<Icon name="settings" type="fontawesome5"/>,drawerLabel:"Settings"}},
        Notifications:{screen:StudentHomeWorkScreen,navigationOptions:{drawerIcon:<Icon name="bell" type="font-awesome"/>,drawerLabel:"Notifications"}},
        MyReceivedBookScreen:{screen:StudentTimetableScreen,navigationOptions:{drawerIcon:<Icon name="gift" type="font-awesome"/>,drawerLabel:"My Received Books"}}
    },{
        contentComponent:CustomSideBarMenu
    },)