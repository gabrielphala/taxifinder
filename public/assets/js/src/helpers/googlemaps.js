export const initMap = () => {
    const myLatlng = { lat: -25.4834, lng: 28.1068 };
    const map = new google.maps.Map(document.getElementById("google-maps"), {
        zoom: 10,
        center: myLatlng,
    });

    return { map, myLatlng };
}

export const calculateRoute = (map, myLatlng, origin, destination) => {
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(map);
    
    const request = {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMEPRIAL
    };
    
    directionsService.route(request, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
            return;
        }
        
        directionsDisplay.setDirections({routes: []});
        map.setCenter(myLatlng);
    })
}  

export const initAutoComplete = (input, cb) => {
    const startAutoComplete = new google.maps.places.Autocomplete(
        input,
        {
            types: ['geocode'],
            componentRestrictions: {
                country: 'ZA'
            }
        }
    )

    google.maps.event.addListener(startAutoComplete, 'place_changed', () => {
        const place = startAutoComplete.getPlace();

        // if (!place.geometry) TODO: show err

        const { lat, lng } = place.geometry.location;

        cb(`${lat()},${lng()}`)
    })
}