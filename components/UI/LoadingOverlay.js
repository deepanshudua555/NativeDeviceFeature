import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "../../constans/colors";


function LoadingOverlay() {
  return (
    <View style={styles.constainer}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.primary700A,
  },
});