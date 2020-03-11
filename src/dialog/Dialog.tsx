import { h, FunctionComponent } from 'preact';
import { dialogBackdrop, dialogContainer } from './Dialog.css';
import { AnimatePresence, motion, Variants, Transition } from 'framer-motion';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import DialogContext, { DialogContextValue } from './DialogContext';
import { useMemo } from 'preact/hooks';

const dialogVariants: Variants = {
  exit: {
    '--dialog-y': '100vh',
    '--dialog-opacity': 0,
  },
  initial: {
    '--dialog-y': '100vh',
    '--dialog-opacity': 0,
  },
  visible: {
    '--dialog-y': '0vh',
    '--dialog-opacity': 1,
  },
};

const dialogTransition: Transition = {
  type: 'spring',
  stiffness: 250,
  damping: 70,
  mass: 0.75,
  velocity: 2,
};

interface DialogProps {
  visible: boolean;
  onDismiss: () => void;
}

const Dialog: FunctionComponent<DialogProps> = ({
  visible,
  onDismiss,
  children,
}) => {
  const contextValue = useMemo<DialogContextValue>(() => ({ onDismiss }), [
    onDismiss,
  ]);

  return (
    <DialogContext.Provider value={contextValue}>
      <AnimatePresence>
        {visible && (
          <DialogOverlay onDismiss={onDismiss}>
            <motion.div
              class={dialogContainer}
              variants={dialogVariants}
              exit="exit"
              initial="initial"
              animate="visible"
              transition={dialogTransition}
            >
              <div class={dialogBackdrop} />
              <DialogContent>{children}</DialogContent>
            </motion.div>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </DialogContext.Provider>
  );
};

export default Dialog;
