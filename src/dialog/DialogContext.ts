import { createContext } from 'preact';

export interface DialogContextValue {
  onDismiss: () => void;
}

const DialogContext = createContext<DialogContextValue>({
  onDismiss: () => {},
});

export default DialogContext;
