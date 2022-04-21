import themes from "../utils/themes";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import  But  from "@mui/material/Button";

import TryForm from "./Try.form";
import { boxStyle, modalProps, useModalStateManager } from "../utils/modal";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Close from "@mui/icons-material/Close";

const Button = (props)=> {
    const _props = {...props, sx: {...props.sx, color: !props.color ? 'inherit' : 'black'}}
    return (
        <ThemeProvider theme={themes}>
            <But {..._props}/>
        </ThemeProvider>
    )
}

export const Go = ({label, color, sx, direction = 'right', ...rest}) => (
    <Button color={color || 'green'} sx={{
        mt: '8px',
        fontWeight: 'bolder',
        '& svg': {
            transition: '0.3s transform'
        },
        '&:hover svg': {
            transform: direction === 'right' ? 'translateX(5px)' : 'translateY(-5px)'
        },
        ...sx
    }} {...rest}>{label} { direction === 'right' ? <ArrowForwardIcon/> : <ArrowUpward/> } </Button>
);


export const TryButton = (props) => {
    const [open, handleOpen, handleClose] = useModalStateManager(false);

    return (
        <>
            <Button color="green" variant="contained" onClick={handleOpen} {...props}>Get Started</Button>
            <Modal {...{...modalProps, open, onClose: handleClose}}>
                <Fade in={open}>
                    <Box sx={boxStyle}>
                        <div style={{display: 'flex'}}>
                            <Button onClick={handleClose} sx={{ml:'auto'}}><Close/></Button>
                        </div>
                        <TryForm/>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}


export default Button;