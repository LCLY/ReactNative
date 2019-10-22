import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        console.log(goalTitle);
        // spread operator which takes existing array
        // and pull out everything out from old array
        // and put into the new array and add new element after coma
        setCourseGoals(courseGoals => [
            ...courseGoals,
            { id: Math.random().toString(), value: goalTitle },
        ]);
    };

    const removeGoalHandler = goalId => {
        // to update the course goals
        setCourseGoals(currentGoals => {
            // basically return a array that the id doesnt match
            return currentGoals.filter(goal => goal.id !== goalId);
        });
    };

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={addGoalHandler}></GoalInput>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem
                        id={itemData.item.id}
                        title={itemData.item.value}
                        onDelete={removeGoalHandler}
                    ></GoalItem>
                )}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
});
