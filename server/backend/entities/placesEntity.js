PlacesEntity = {

	createPlaces: function(places){

		places = {};
		places.locations = places;
		places.timestamp = Date.now();
		return places;
	},

	populatePlaces: function(){

		for(var i =0; i < PlacesArray.length; i++){
			Places.insert(PlacesArray[i])
		}
	}


};