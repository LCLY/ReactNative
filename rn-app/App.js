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
        // spread operator which takes existing array
        // and pull out everything out from old array
        // and put into the new array and add new element after coma
        setCourseGoals(courseGoals => [...courseGoals, enteredGoal]);
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
            <View>
                {courseGoals.map(goal => (
                    <View key={goal} style={styles.listItem}>
                        <Text>{goal}</Text>
                    </View>
                ))}
            </View>
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
    listItem: {
        padding: 10,
        marginTop: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
    },
});
