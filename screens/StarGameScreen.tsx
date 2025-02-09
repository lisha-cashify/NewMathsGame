import {TextInput, Button, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton.tsx";
import {useState} from "react";
import React from "react";
import {StyleSheet,Alert } from "react-native";
function StartGameScreen({onPickNumber}:any) {
    const [enteredNumber , setEnteredNumber] = useState<string>('');
   function numberInputHandler (enteredNumber:string){
      setEnteredNumber(enteredNumber);
   }
   function resetInputHandler(){
       setEnteredNumber('');
   }
   function confirmInputHandler(){
      const choseNumber = parseInt(enteredNumber);
   //    if(isNaN(choseNumber)|| choseNumber<=0 || choseNumber>99){
   //       Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99',
   //         [{text: 'okay', style:'destructive', onPress: resetInputHandler}]
   //           );
   //        return;
   //    }
   //    onPickNumber(choseNumber);
   // }
    if (isNaN(choseNumber) ||choseNumber <= 0 || choseNumber > 99) {
        Alert.alert(
            'Invalid number!',
            'Number has to be a number between 1 and 99.',
            [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
        );
        return;
    }

    onPickNumber(choseNumber);
}
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} maxLength={2} keyboardType="number-pad"
            autoCapitalize='none'
            autoCorrect={false}
                       onChangeText={numberInputHandler}
                       value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>RESET</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>

            <PrimaryButton onPress={confirmInputHandler}>CONFIRM</PrimaryButton>
            </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        alignItems: "center",
    },
    input: {
        borderBottomColor: '#ddb52f',
        color : '#ddb52f',
        padding: 5,
        marginVertical:8,
        fontWeight:'bold',
        height:50,
        fontSize:32,
        borderBottomWidth:2,
        width:50,
        textAlign:"center",


    },
    inputContainer :{

        padding:16,
        marginHorizontal:24,
        borderRadius:8,
        marginTop: 100,
        backgroundColor:'#72063c',
        elevation:8,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer :{
        flex:1,
    }

});

export default StartGameScreen;
