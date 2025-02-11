import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";
import { useDispatch } from "react-redux";
import { removeTodo, changeTodoStatus } from "../../../../redux/todoSlice";

export const Task = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Checkbox
            style={styles.checkbox}
            value={todo.check}
            onValueChange={() => dispatch(changeTodoStatus(todo.id))}
          />
          <Text style={todo.check ? styles.taskDone : styles.taskNone}>
            {todo.text}
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => dispatch(removeTodo(todo.id))}>
          <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
