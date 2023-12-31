import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'


const ForgetPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");
    

   
    const forgetHandler =  () => {
        navigation.navigate("resetpassword")

    }
  return (
    <View
    style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }}
>
    <Text style={{ fontSize: 20, margin: 20 }}>Forget Passwod</Text>
    <View style={{ width: "70%" }}>
        <TextInput
            style={Styles.input}
            placeholder="Please enter email address"
            value={email}
            onChangeText={setEmail}
        />


    </View>

    <Button
        style={Styles.btn}
        onPress={forgetHandler}
        color="#fff"
       
    >
       <Text style={{ color: "#fff" }}>Send Email</Text>
    </Button>



</View>
  )
}





export default ForgetPassword

const Styles = StyleSheet.create({

    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 15,
        fontSize: 15,
    },

    btn: {
        backgroundColor: "#900",
        padding: 5,
        width: "70%",
    },
})