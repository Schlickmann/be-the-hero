import 'intl'; 
import 'intl/locale-data/jsonp/en-CA';
import React from 'react';

import { IncidentsProvider } from './src/contexts/IncidentsContext';
import Routes from './src/routes';

export default function App() {
  return (
    <IncidentsProvider>
      <Routes />
    </IncidentsProvider>
  );
}