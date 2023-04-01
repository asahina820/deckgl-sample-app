import React from 'react';
import { LineLayer } from '@deck.gl/layers';
import { MapboxOverlay } from '@deck.gl/mapbox';
import Map, { useControl, NavigationControl, FullscreenControl, ScaleControl, GeolocateControl } from 'react-map-gl';
// Mapbox GL JS
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

const App = () => {
    const DeckGLOverlay = (props) => {
        const overlay = useControl(() => new MapboxOverlay(props));
        overlay.setProps(props);
        return null;
    };
    // Mapboxアクセストークン
    const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYXNhaGluYTgyMCIsImEiOiJjbGV6cnd0NjMwMjNkNDJvZmt0OHlnc3ozIn0.6WFjD9Wm4W1THTWgAuHEvQ';
    // 初期ビューポートの設定
    const INITIAL_VIEW_STATE = {
        latitude: 38.875584,
        longitude: 139.7454316,
        bearing: 0,
        pitch: 0,
        zoom: 5,
    };
    // LineLayerで使うデータ
    const data = [{ sourcePosition: [139.7454316, 38.875584], targetPosition: [145.7454316, 40.875584] }];
    // LineLayer
    const layers = [new LineLayer({ id: 'line-layer', data })];
    return (
        <div className="App">
            <Map
                initialViewState={INITIAL_VIEW_STATE}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                style={{ width: '100vw', height: '100vh' }}
                mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
            >
                <DeckGLOverlay layers={layers} />
                <GeolocateControl />
                <FullscreenControl />
                <NavigationControl />
                <ScaleControl />
            </Map>
        </div>
    );
};

export default App;
