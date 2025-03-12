import { View, Text, StyleSheet, TextInput,  Button, TouchableOpacity, _ScrollView, StatusBar} from "react-native";
import { useState } from "react";
import { ScrollViewBase } from "react-native";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submittedUsernames, setSubmittedUsernames] = useState([]);

    function handleLogin() {
       // console.log("Button clicked 2");
       const data = {
        username, 
        password
    }; 
    
    setSubmittedUsernames((submittedUsernames) => [...submittedUsernames, username]);
           
    }
    //console.log("Username: ", username);

    return (
        <View style={styles.container} >
            <Text style={styles.text}>Login</Text>

            <Text style={styles.text}>{username}</Text>
         
            <TextInput
            style={styles.inp}
            placeholder="Username"
            onChangeText={(text)=> setUsername(text)}
            value={username}
            />

            <TextInput
            style={styles.inp}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            />

            {/* <Button title="Login" color="#ff7700" onPress={()=>console.log("Button clicked")   } /> */}
           
            <TouchableOpacity onPress={()=> handleLogin()} style={{backgroundColor: "#ff7700",  borderRadius: 10, padding:10, marginVertical:10}}>
                <Text style={{color:"white", textAlign: "center"}}>Login</Text>
            </TouchableOpacity>

            <Text  style={styles.text2}  >{submittedUsernames.join(", ")}</Text>
            
        </View>
    );
    
}

const styles =StyleSheet.create({
    container:{
        height:"100%",
        marginTop:50,
        padding:20,
      // justifyContent: "center"
    },
    text:{
        color:"#ff7700",
        fontSize:35,
        textAlign:"center"
    },
    text2:{
        color:"#00fff",
        fontSize:27,
        textAlign:"center",
        shadowColor:"black",
        shadowOffset:10,
        shadowOpacity:1,
    },
    inp:{
        marginVertical: 10,
        padding:10,
        borderWidth:1,
        borderColor:"#ff7700",
        borderRadius:10
    }
});