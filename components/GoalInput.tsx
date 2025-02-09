import {Button, TextInput, View, StyleSheet} from "react-native";
import React, {useState} from "react";

type PropType ={
     addGoalHandler: (text: string) => void;

}

function GoalInput (props:PropType) {
    const [enteredGoalText, setEnteredGoalText] = useState<string>("");
    function goalInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText);
    }
   function addGoalHandler(){
        props.addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
   }
    return(
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
);
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#f3f2f2",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ede9e9",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
});