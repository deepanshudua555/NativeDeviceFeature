import PlaceForm from "../components/Places/PlaceForm";
import { insetPlace } from "../util/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insetPlace(place);
    navigation.navigate("AllPlaces")
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;