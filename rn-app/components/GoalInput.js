import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
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
                <Button
                    title="ADD"
                    onPress={() => props.onAddGoal(enteredGoal)}
                ></Button>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignContent: "center",
    },
    textInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 5,
        width: "80%",
    },
});

export default GoalInput;
