import Slider from '@mui/material/Slider';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SettingsIcon from '@mui/icons-material/Settings';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import Close from "@mui/icons-material/Close";

import Button from '../../buttons';
import VideoPreview from './VideoPreview';
import { useVideoStateManager, src } from '../../../utils/video.player';

export default function VideoPlayer({onClose}){
    const vsm = useVideoStateManager();

    return (
        <div className="video-player">
            <div className="container">
                <Button onClick={onClose} sx={{ml:'auto', mb: '10px'}}><Close/></Button>
                <video 
                    onTimeUpdate={vsm.doSetCurrentTime} 
                    src={src} ref={vsm.videoRef} 
                    onPlay={()=> vsm.setPlaying(true)} 
                    onPause={()=> vsm.setPlaying(false)}/>
                <div className="cover"></div>
                <div className="controls">
                    <Button onClick={vsm.handlePlay}>
                        {vsm.playing ? <PauseIcon/> : <PlayArrowIcon/>}
                    </Button>
                    <span>{vsm.readableTime}</span>
                    <div 
                        onMouseMove={vsm.handlePreview}
                        onMouseLeave={e => vsm.handlePreview(e, true)}
                        ref={vsm.previewBoxRef}
                        className='slide-container'>
                        <Slider 
                            onChange={vsm.handleChange}
                            size='small' 
                            aria-label='small' 
                            value={vsm.currentTime}
                            defaultValue={0}/>
                        <VideoPreview 
                            previewLocation={vsm.previewLocation}
                            sliderWidth={vsm.previewSlideWidth}
                            open={vsm.openPreview}/>
                    </div>
                    <Button><ClosedCaptionOffOutlinedIcon/></Button>
                    <Button><VolumeUpIcon/></Button>
                    <Button><SettingsIcon/></Button>
                    <Button><FullscreenOutlinedIcon/></Button>
                </div>
            </div>
        </div>
    )
}