import React from 'react';
import {Text,View,Image,TextInput ,Alert} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


export default class Register extends React.Component{

    constructor(props){

        super(props);

        this.state={
            username:'',
            password:'',
            c_password:'',
            loggedIn:false,
        };
        this.onInputChange=this.onInputChange.bind(this);
        this.signup=this.signup.bind(this);

        //this.handleChange=this.handleChange.bind(this);
        //this.submit=this.submit.bind(this);

    }

    componentDidMount() {
        if(window.token){
            this.setState({loggedIn:true});
        }
    }


    /*handleChange(event){
        let username=event.target.username;
        let value=event.target.value;
        let data={};
        data[username]=value;

        this.setState(data);
    }*/
    onInputChange(event){
        console.log(event.target.name,event.target.value)
        this.setState({[event.target.name]:event.target.value})
        //this.onInputChange=this.onInputChange.bind(this);
    }


    signup(){
        const {navigate} = this.props.navigation
        console.log("Signing Up")
        const user = this.state.username
        const pass = this.state.password
        const c_pass = this.state.c_password
        console.log(user)
        console.log(pass)
        console.log(c_pass)
        if(this.state.c_password===this.state.password){window.api.post('/users/signup',{username:user,password:pass},{headers:{"Content-Type":"application/json"}})
            .then((Response)=>{navigate('Login')})
            .catch((Error)=>{console.log(Error)})}
        else{
            console.log("Error confirming your password.")
            alert("Passwords do not match.")
        }
    }

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image.jpg')}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Save the world</Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Sanitizing the room one room at a time.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                  
                    <TextInput
                        type="text" name='username' value={this.state.username} placeholder="Username" onChange={this.onInputChange}
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput
                       type="password" name='password' value={this.state.password} onChange={this.onInputChange} placeholder="Password"
                        secureTextEntry
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />


                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>

                   <TextInput
                       type="password" name='c_password' value={this.state.c_password} onChange={this.onInputChange} placeholder="Confirm Password"
                        secureTextEntry
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text
                        onPress={this.signup}
                        style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Register</Text>
                </View>


                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text
                        onPress={()=>navigate('Login')}
                        style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Back</Text>
                </View>


              
            </View>
        )
    }
}