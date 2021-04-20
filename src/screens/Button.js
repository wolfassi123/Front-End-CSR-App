import React, { useState } from 'react';
import { View, Switch, StyleSheet} from 'react-native';
import {Text} from "react-native-web";
import Icon from '@expo/vector-icons/AntDesign';




export default function App({navigation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {setIsEnabled(previousState => !previousState);
        console.log (isEnabled);
    }


    return (
        <View style={{backgroundColor:"#FFF",height:"100%"}}>

                <Text
                    style={{
                        alignSelf:"center",
                        position: 'absolute', left: '49%', top: '45%',
                        transform: 'translate(-50%, -50%)',
                        borderWidth:2,
                        borderColor:"Black",
                        color:"Black",
                        fontFamily:"SemiBold"
                    }}>Turn On/Off</Text>

            <Switch
                style={{
                    alignSelf:"center",
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}

                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            <Icon
                style={{
                    alignSelf:"center",
                    position: 'absolute', left: '50%', top: '70%',
                    transform: 'translate(-50%, -50%)'
                }}
                name="poweroff" color={isEnabled ? "green" : "red"} size={60}
                onPress={toggleSwitch}



            />



            <Text
                style={{
                    alignSelf:"center",
                    position: 'absolute', left: '49%', top: '55%',
                    transform: 'translate(-50%, -50%)',
                    borderWidth:2,
                    borderColor:"Black",
                    color:"Black",
                    fontFamily:"SemiBold"
                }}
            >
                {"The robot is turned "}
                {isEnabled ? "On " : "Off "}
                {"currently"}
            </Text>

            <View style={{
                position: 'absolute', left: '90%', top: '90%',
                transform: 'translate(-50%, -50%)',
                marginHorizontal:55,
                alignItems:"center",
                justifyContent:"center",
                marginTop:30,
                backgroundColor:"#00716F",
                paddingVertical:10,
                borderRadius:23
            }}>
                <Text

                    onPress={()=> {navigation.navigate('Login')
                        console.log("Exit")

                    }}

                    style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Exit</Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});