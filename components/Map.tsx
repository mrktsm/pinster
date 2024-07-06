
import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';

const accessToken = 'pk.eyJ1IjoibXJrdHNtIiwiYSI6ImNseTlnYjV0aTBwcWMyaXBxZjV3MDJjOGsifQ.JPR_WsGDfQabgU7ePUAYEA';
Mapbox.setAccessToken(accessToken);

export default function Map () {
    return (
        <MapView style={{ flex: 1 }} styleURL="mapbox://styles/mapbox/dark-v11">
            <Camera followZoomLevel={16} followUserLocation />
            <LocationPuck />
        </MapView>
    );
}