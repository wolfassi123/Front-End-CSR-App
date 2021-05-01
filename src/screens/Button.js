import React, { useState } from 'react';
import {View, Switch, StyleSheet, Image ,Alert ,Button} from 'react-native';
import {Text} from "react-native-web";
import Icon from '@expo/vector-icons/AntDesign';


export default function App({navigation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {setIsEnabled(previousState => !previousState);
        console.log (isEnabled);
    }
    const inter = () =>{ setIsEnabled(false)};

//


    return (
        <View style={{backgroundColor:"#FFF",height:"100%"}}>
            <Image source ={require('../images/usj.jpg')}
                   style={{width:"100%",height:"35%"}}
            />
                <Text
                    style={{
                        alignSelf:"center",
                        position: 'absolute', left: '49%', top: '40%',
                        transform: 'translate(-50%, -50%)',
                        borderWidth:2,
                        borderColor:"Black",
                        color:"Black",
                        fontFamily:"SemiBold"
                    }}>Turn On/Off</Text>
            <Icon
                style={{
                    borderRadius:20,
                    borderWidth: 2,
                    borderColor: 'rgb(170, 207, 202)',
                    overflow: "hidden",
                    alignSelf:"center",
                    position: 'absolute', left: '49%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
                name="poweroff" color={isEnabled ? "green" : "red"} size={80}
                onPress={toggleSwitch}



            />
            <Text
                style={{
                    alignSelf:"center",
                    position: 'absolute', left: '49%', top: '60%',
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

            <View
                style={{top:'30%'}}
            >
                <Button
                    style={{

                    }}
                    title="Movement"
                    onPress={() => (alert('Movement was detected in the surroundings. Robot will turn off.'),inter())}
                />
            </View>



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

            <View style={{
                position: 'absolute', left: '10%', top: '75%',
                transform: 'translate(-50%, -50%)',
                marginHorizontal:55,
                alignItems:"center",
                justifyContent:"center",
                marginTop:60,
                backgroundColor:"#00716F",
                paddingVertical:50,
                borderRadius:50
            }}>
                <Text
                    style={{
                        alignSelf:"center",
                        position: 'absolute', left: '49%', top: '10%',
                        transform: 'translate(0%, 0%)',
                        borderWidth:2,
                        borderColor:"Black",
                        color:"Black",
                        fontFamily:"SemiBold"
                    }}>User:</Text>
                <Text
                    style={{
                        alignSelf:"center",
                        position: 'absolute', left: '49%', top: '30%',
                        transform: 'translate(0%, 0%)',
                        borderWidth:2,
                        borderColor:"Black",
                        color:"Black",
                        fontFamily:"SemiBold"
                    }}>U.V.Lights:</Text>

                <Text
                    style={{
                        alignSelf:"center",
                        position: 'absolute', left: '49%', top: '50%',
                        transform: 'translate(0%, 0%)',
                        borderWidth:2,
                        borderColor:"Black",
                        color:"Black",
                        fontFamily:"SemiBold"
                    }}>Pump:</Text>
                <Text
                    style={{
                        alignSelf:"center",
                        position: 'absolute', left: '49%', top: '70%',
                        transform: 'translate(0%, 0%)',
                        borderWidth:2,
                        borderColor:"Black",
                        color:"Black",
                        fontFamily:"SemiBold"
                    }}>Status:</Text>
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