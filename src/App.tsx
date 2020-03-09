import { h, FunctionComponent } from 'preact';
import './style.css';
import { container } from './App.css';
import { Button } from 'reakit';

const App: FunctionComponent = () => {
  return (
    <div class={container}>
      <Button>Open Modal</Button>
    </div>
  );
};

export default App;
