import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
    padding: 8,
    width: "100%",
    justifyContent: "space-between",
  },
  taskDone: {
    color: "#626262",
    fontSize: 16,
    marginLeft: 16,
    textDecorationStyle: "dashed",
    textDecorationColor: "black",
    textDecorationLine: "line-through"
  },
  taskNone: {
    color: "#ffff",
    fontSize: 16,
    marginLeft: 16,
  },
  checkbox: {
    borderRadius: 999,
    borderColor: "#4ea8de",
    marginLeft: 18
  },
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ff0000",
    borderRadius: 5,
    padding: 8,
    height: 48,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: '#fff',
  },
});
