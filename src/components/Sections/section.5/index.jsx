import Button from "../../buttons";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import VideoPlayer from "./VideoPlayer";

import { boxStyle, modalProps, useModalStateManager } from '../../../utils/modal';

const Section5 = ({className}) => {
    const [open, handleOpen, handleClose] = useModalStateManager();
    
    return (
    <section className={`section-5 ${className || ''}`}>
        <div>
            <div><img src="./images/sec51.jpg" alt="Presentation"/></div>
            <div>
                <h1>
                    &ldquo;
                        Weve been able to build something in 3 years that a lot of brands 
                        havent actually gotten to in 10 years.
                    &rdquo;
                </h1>
                <img src="./images/sec52.png" alt="Presentation"/>
                <h3>Chioma | Cee Cee's Closet NYC</h3>
                <Button className='open-video-btn' onClick={handleOpen} color="green" varient="contained">
                    <PlayArrowIcon/>
                    <span>Play Chioma and Uchenna's story</span>
                </Button>
                <Modal {...{...modalProps, open, onClose: handleClose}}>
                    <Fade in={open}>
                        <Box sx={{...boxStyle, width: '100%'}}>
                            <VideoPlayer onClose={handleClose}/>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </div>
        <div>
            {[...new Array(8)].map((i, j) => (
                <img key={j} src={`./images/sec5${j+3}.${[0, 1, 6].includes(j) ? 'png' : 'webp'}`} alt="Presentation"/>
            ))}
        </div>
    </section>
)
}

export default Section5;