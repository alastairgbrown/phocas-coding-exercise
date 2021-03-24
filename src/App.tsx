import './App.css';
import { Organisation } from './Organisation';
import { queries } from './queries';
import { TestItem } from './TestItem';

export const useEmulator: boolean = true
export const showTestItems: boolean = false
export const url = 'https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api'
export const operationId = '806fb7b1-64fb-4ec1-853b-f4ac7554cc64'

function App() {
  return (
    <div className="App">
      <Organisation organisationId={operationId}/>
      {queries.resources.filter((r: any) => showTestItems && r.body && r.body.text)
                      .map((data,i) => <TestItem key={i} data={data} />)}
    </div>
  );
}

export default App;
