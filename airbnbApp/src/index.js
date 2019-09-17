import React from 'react';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1IjoiamdkaGFyYiIsImEiOiJjazBndms4d24wODd2M25tb2Jvb2JpaXMwIn0.N25OQLFPatXAIb_jgQ06zQ');

import Routes from './routes';

const App = () => <Routes />;

export default App;