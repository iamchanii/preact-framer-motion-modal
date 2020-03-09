import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import './style.css';
import { container } from './App.css';
import Dialog from './dialog/Dialog';

const App: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div class={container}>
      <button onClick={() => setVisible(true)}>Open Modal</button>
      <Dialog title="Dialog Title" visible={visible} onDismiss={() => setVisible(false)}>
        Hello!
        <button onClick={() => setVisible(false)}>Close Modal</button>
      </Dialog>
    </div>
  );
};

export default App;
