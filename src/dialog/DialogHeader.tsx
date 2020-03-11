import { h, FunctionComponent } from 'preact';
import { dialogHeader, closeButton } from './DialogHeader.css';
import { useContext } from 'preact/hooks';
import DialogContext from './DialogContext';
import { MdClose } from 'react-icons/md';

interface DialogHeaderProps {
  onDismiss?: () => void;
}

const DialogHeader: FunctionComponent<DialogHeaderProps> = ({
  onDismiss: _onDismiss,
  children,
}) => {
  const { onDismiss } = useContext(DialogContext);

  return (
    <div class={dialogHeader}>
      {children}
      <button tabIndex={-1} onClick={onDismiss || _onDismiss} class={closeButton}>
        <MdClose />
        <span>Close</span>
      </button>
    </div>
  );
};

export default DialogHeader;
