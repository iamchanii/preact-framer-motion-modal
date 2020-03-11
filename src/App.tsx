import { h, FunctionComponent } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import './style.css';
import { container } from './App.css';
import Dialog from './dialog/Dialog';
import DialogHeader from './dialog/DialogHeader';

const useDialog = () => {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => {
    setOpen(true);
  }, []);

  const dismiss = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    isOpen,
    open,
    dismiss,
  };
};

const App: FunctionComponent = () => {
  const { isOpen, open, dismiss } = useDialog();

  return (
    <div class={container}>
      <button onClick={open}>Open Modal</button>
      <Dialog visible={isOpen} onDismiss={dismiss}>
        <DialogHeader>Dialog Title</DialogHeader>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Quisque ac arcu vestibulum, ullamcorper turpis ac, auctor magna.
        <br /> Nullam ultricies magna a nibh elementum, quis vulputate
        liguladapibus.
        <br /> Etiam magna sem, consectetur sit amet semper at, lobortis id
        orci.
        <br /> Nam a sollicitudin velit, eget maximus turpis.
        <br /> Sed faucibus pellentesque purus, nec convallis nunc mollis at.
        <br /> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Aliquam porta porttitor magna eu fermentum.
        <br />
      </Dialog>
    </div>
  );
};

export default App;
