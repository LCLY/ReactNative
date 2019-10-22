import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState("");
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        console.log(enteredGoal);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="ADD" onPress={addGoalHandler}></Button>
            </View>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    textInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 5,
        width: "80%",
    },
});
