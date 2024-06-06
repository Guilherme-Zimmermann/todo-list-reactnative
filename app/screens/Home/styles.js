import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#141414"
  },
  form: {
    flexDirection: "row",
    marginBottom: 42,
    marginTop: 48,
    gap: 12,
  },
  input: {
    backgroundColor: "#292929",
    borderRadius: 5,
    color: "#FFFFFF",
    flex: 1,
    fontSize: 16,
    height: 54,
    padding: 16,
    width: 150,
  },
  button: {
    backgroundColor: "#1e6f9f",
    borderRadius: 8,
    padding: 8,
    height: 54,
    alignContent: "center",
    justifyContent: "center",
  },
});
