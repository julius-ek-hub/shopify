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
import { useVideoStateManager } from '../../../utils/video.player';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function Loading() {
  return (
    <div className='video-loading-ui'>
      <CircularProgress/>
      Loading Video...
    </div>
  );
}

function LoadError() {
  return (
    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Failed to load video — Please check connection or re-open this modal
    </Alert>
  );
}




export default function VideoPlayer({onClose}){
    const vsm = useVideoStateManager();

    return ( !vsm.blob ? <Loading/> : vsm.blob === 'error' ? <LoadError/> :
        <div className="video-player">
            <div className="container">
                <Button onClick={onClose} sx={{ml:'auto', mb: '10px'}}><Close/></Button>
                <video 
                    onTimeUpdate={vsm.doSetCurrentTime} 
                    src={vsm.blob} ref={vsm.videoRef} 
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
                            src={vsm.blob}
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