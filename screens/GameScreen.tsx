import {TextInput, Button, Text, View, StyleSheet, SafeAreaView, Alert} from "react-native";
import {useState} from "react";
import NumberContainer from "../components/game/NumberContainer.tsx";
import PrimaryButton from "../components/PrimaryButton.tsx";

function generateRandomBetween(min:number, max:number, exclude:number) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen ({userNumber}:any) {
const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)

    function nextGuessHandler(direction:any) {

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
    }

    return<View style={styles.screen}>
    <Text style={styles.title}> Opponents Guess</Text>
    {/*GUESS*/}
        <NumberContainer>{currentGuess}</NumberContainer>

    <View>
        <Text>Higher or lower?</Text>

        <View>
        <PrimaryButton  onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
        {/*+ -*/}
    </View>
    {/*<View>LOG ROUNDS</View>*/}
</View>
}
export default GameScreen;
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:12
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#644d02',
        textAlign:'center',
        borderWidth:2,
        borderColor:'#9c1919',
        padding:12



    }
})