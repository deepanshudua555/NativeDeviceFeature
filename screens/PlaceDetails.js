import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewBase,
} from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constans/colors";
import { useEffect, useState } from "react";
import { deletePlace, fetchPlaceDetails } from "../util/database";

function PlaceDetails({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState();

  function showOnMapHandler() {
    navigation.navigate("Map", {
      initialLat: fetchedPlace.location.lat,
      initialLng: fetchedPlace.location.lng,
    });
  }
  const setLoadedPlacesId = route.params.placeId;
  async function deletePlaceHandler() {
    Alert.alert(
      //title
      "Are you sure",
      //body
      "Do You want to DELETE the Place?",
      [
        {
          text: "Yes",
          onPress: () => {
            deletePlace(setLoadedPlacesId);
            navigation.goBack();
          },
        },
        {
          text: "No",
          // onPress: () => console.log('No Pressed'),
          // style: 'cancel',
        },
      ],
      { cancelable: true }
      //clicking out side of alert will not cancel
    );
  }

  useEffect(() => {
    //use selectedPlaceId to fetch data for a single place
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(setLoadedPlacesId);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    }
    loadPlaceData();
  }, [setLoadedPlacesId]);

  if (!fetchedPlace) {
    return (
      <View style={styles.fallBack}>
        <Text>Loading place data...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View onMap
        </OutlinedButton>

        <OutlinedButton icon="trash" onPress={deletePlaceHandler}>
          Delete this Place
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  fallBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
