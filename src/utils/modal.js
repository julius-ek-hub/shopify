import { useState, useRef } from "react";

export const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'inherit',
    color: 'white',
    width: 450,
    maxWidth: '100%',
    p: 4,
  };

  const backgroundColor = '#212326';

  export const modalProps = {
    "aria-labelledby": "dark-modal",
    "aria-describedby": "dark-modal",
    closeAfterTransition: true,
    BackdropProps: {
    timeout: 500,
    style: { backgroundColor }
  }
}


export const useModalState = (current) => {
    const [ open, setOpen ] = useState(current);
    const themeCol = useRef();

    const handleOpen = () => {
        setOpen(true);
        themeCol.current = document.querySelector('meta[name="theme-color"]');
        themeCol.current.setAttribute('content', backgroundColor);
    };
    const handleClose = () => {
        setOpen(false);
        themeCol.current.setAttribute('content', '#fff');
    }


    return [open, handleOpen, handleClose]
}