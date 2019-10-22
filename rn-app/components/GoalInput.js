import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    };
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <Button title="ADD" onPress={addGoalHandler}></Button>
                    <Button
                        title="CANCEL"
                        color="red"
                        onPress={props.onCancel}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    textInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 10,
        width: "80%",
        padding: 10,
    },
    buttonContainer: {
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default GoalInput;
