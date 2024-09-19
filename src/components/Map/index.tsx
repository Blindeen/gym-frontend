import { AttributionControl, MapContainer, Marker, TileLayer } from 'react-leaflet';

import { MapProps } from './types';

const Map = ({ location }: MapProps) => {
    return (
        <MapContainer
            style={{ height: '100%', borderRadius: '7px' }}
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
