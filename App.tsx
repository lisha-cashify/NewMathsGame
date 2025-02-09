import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import StarGameScreen from "./screens/StarGameScreen.tsx";
import GameScreen from "./screens/GameScreen.tsx";

function App(): React.JSX.Element {
    const [userNumber, setUseNumber] = useState<number | null>(null);

    function pickedNumberHandler(pickedNumber: number) {
        setUseNumber(pickedNumber);
    }

    let screen = <StarGameScreen onPickNumber={pickedNumberHandler} />;
    if (userNumber) {
        screen = <GameScreen
            userNumber = {userNumber}

        />;
    }

    return (
        <View style={styles.rootScreen}>
            <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: '#ddb52f',
    },
});

export default App;
