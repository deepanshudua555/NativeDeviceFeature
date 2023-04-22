import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "../../constans/colors";


function LoadingOverlay() {
  return (
    <View style={styles.constainer}>
      <ActivityIndicator size="large" color="#221c30" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  constainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 24,
    // backgroundColor: Colors.primary100,
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 5,
    overflow: "hidden",
  },
});