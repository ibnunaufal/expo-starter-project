import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('./../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Add Your course goal!"
          placeholderTextColor={"#ccc"}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Add Goal" onPress={addGoalHandler} color='#b180f0' />
            </View>
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.close} color='red' />
            </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor:'purple',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e40dff",
    borderRadius: 10,
    backgroundColor: "#e40dff",
    width: "70%",
    padding: 8,
    color: 'white'
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 5
  }
});
