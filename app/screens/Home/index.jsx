import { useState } from "react";
import { View, TextInput, Alert, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { Task } from "./components/Task";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

export const Home = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const { todos } = useSelector((slicies) => slicies.todoSlice);

  const createTodo = () => {
    if (text.trim().length) {
      const todo = {
        check: false,
        text,
        id: Date.now(),
      };
      dispatch(addTodo(todo));
      setText("");
    } else {
      Alert.alert("Erro", "Você não pode inserir uma tarefa em branco!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Tarefa"
          placeholderTextColor={"#ffff"}
          style={styles.input}
          onChangeText={setText}
          value={text}
        />

        <TouchableOpacity style={styles.button} onPress={createTodo}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
      {todos.map((todo) => (
        <Task todo={todo} key={todo.id}/>
      ))}
    </View>
  );
};
