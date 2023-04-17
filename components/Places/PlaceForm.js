import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constans/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm() {
  const [enteredTitle, setEnteredTitl] = useState("");

  function chnageTitleHandler(enteredText) {
    setEnteredTitl(enteredText);
  }
  return (
    <ScrollView style = {styles.form}>
      <View>
        <Text style = {styles.label}>Title</Text>
        <TextInput style = {styles.input} onChangeText={chnageTitleHandler} value={enteredTitle} />
      </View>
      <ImagePicker/>
      <LocationPicker/>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
    form:{
        flex:1,
        padding:24,
    },
    label:{
        fontWeight:'bold',
        marginBottom:4,
        color:Colors.primary500
    },
    input:{
        marginVertical:8,
        paddingHorizontal:4,
        paddingVertical:8,
        fontSize:16,
        borderBottomColor:Colors.primary700,
        borderBottomWidth:2,
        backgroundColor:Colors.primary100,
        borderRadius:4,
    },
})