import React from 'react';
import './App.css';
import { Organisation } from './Organisation';
import { queries } from './queries';
import { TestItem } from './TestItem';

function App() {
  const resources = queries.resources.filter((r: any) => r.body && r.body.text)
  return (
    <div className="App">
      <Organisation organisationId='806fb7b1-64fb-4ec1-853b-f4ac7554cc64'/>
      {resources.map(data => <TestItem key={data._id} data={data} />)}
    </div>
  );
}

export default App;
