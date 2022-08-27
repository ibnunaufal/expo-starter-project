import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#ddd" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={(pressData) => pressData.pressed && styles.pressItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}> {props.text} </Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressItem: {
    opacity: 0.5,
  },
});
