import React from 'react';
import {Text,View,Image, TextInput ,Alert} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


export default class Login extends React.Component{
    constructor(props){

        super(props);

        this.state={
            username:'',
            password:'',
            loggedIn:false,
        };
        this.onInputChange=this.onInputChange.bind(this);
        this.login=this.login.bind(this);

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

    login(){
        const {navigate} = this.props.navigation
        console.log("Logging in")
        const user = this.state.username
        const pass = this.state.password
        console.log(user)
        console.log(pass)
        window.api.post('/users/login',{username:user,password:pass},{headers:{"Content-Type":"application/json"}})
            .then((Response)=>{navigate('Button')})
            .catch((Error)=>{console.log(Error), alert("You either used an incorrect username or password. Please try again.")})
    }



    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image.jpg')}
                    style={{width:"100%",height:"40%"}}
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
                    Sanitizing the world one room at a time.
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
                    <Icon name="user" color="#00716F" size={24}/>
                    {/*<TextInput*/}
                    {/*    type="text" name='username' value={this.state.username} placeholder="username" onChange={this.onInputChange}*/}
                    {/*    style={{paddingHorizontal:10}}*/}
                    {/*/>         */}
                    <TextInput
                        type="text" name='username' value={this.state.username} placeholder="username" onChange={this.onInputChange}
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
                    <Icon name="lock" color="#00716F" size={24}/>
                    <TextInput
                        type="password" name='password' value={this.state.password} onChange={this.onInputChange} placeholder="password"
                        secureTextEntry
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
                        onPress={this.login}
                        style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Login</Text>
                </View>
                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>New User</Text>
            </View>
        )
    }
}