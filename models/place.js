export class Place{
    constructor(title, imageUri, location,id){
        this.title = title,
        this.imageUri = imageUri,
        this.address = location.address,
        this.location = {lat:location.lat, lng:location.lng}; //{lat:0.10141, lng:127.}
        this.id = id;
    }
}