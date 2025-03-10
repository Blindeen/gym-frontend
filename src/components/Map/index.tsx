import { AttributionControl, MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

type MapProps = {
    location: LatLngExpression;
}

const Map = ({ location }: MapProps) => {
    return (
        <MapContainer
            style={{ height: '100%', zIndex: 0, borderRadius: '7px' }}
            center={location}
            zoom={17}
            zoomControl={false}
            attributionControl={false}
        >
            <TileLayer
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AttributionControl prefix={false} />
            <Marker position={location} />
        </MapContainer>
    );
};

export default Map;
