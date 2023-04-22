import { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Colors } from "../../constans/colors";
import { Place } from "../../models/place";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm({ onCreatePlace }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [pickedLocation, setPickedLocation] = useState("");
  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function savePlaceHandler() {
    const placeData = new Place(enteredTitle, selectedImage, pickedLocation);
    console.log(placeData);
    const titleIsValid = placeData.title.trim().length > 0;
    const imageIsValid = placeData.imageUri.trim().length > 0;
    const isValid = typeof(placeData.location.lat);
    const isValidLat = String(isValid)==="number";


    console.log(titleIsValid);
    console.log(imageIsValid);
    console.log(isValidLat);
    console.log(placeData.address + "".length);
    console.log(placeData.location.lat)
    // console.log(placeData.address.length)
    // const latIsvalat = !isNaN(placeData.location.lat ) && placeData.location.lat>0;
    // const latIsvalng = !isNaN(placeData.location.lng ) && placeData.location.lng>0;
    if (!isValidLat|| !titleIsValid || !imageIsValid) {
      return Alert.alert("Invalid input", "Please check your input values");
    }

    onCreatePlace(placeData);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <View style={styles.button}>
        <Button onPress={savePlaceHandler}>Add Place</Button>
      </View>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 16,
    marginBottom: 4,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  button: {
    marginBottom: 24,
  },
});
