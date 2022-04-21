import { useState, useRef, createRef, useEffect } from "react";

export const src = "https://media.istockphoto.com/videos/short-one-minute-story-about-a-young-couple-meeting-a-friend-in-the-video-id1358085867";


const getVideo = (url, setBlob) => fetch(url).then(res => res.blob())
    .then(b => {
        setBlob(window.URL.createObjectURL(b))
    }).catch(() => setBlob('error'))

export const useSection5VideoStateManager = () => {

    const [currentTime, setCurrentTime] = useState(0);
    const [readableTime, setReadableTime] = useState('0:00');
    const [playing, setPlaying] = useState(false);
    const [previewLocation, setPreviewLocation] = useState(0);
    const [openPreview, setOpenPreview] = useState(false);
    const [previewSlideWidth, setPreviewSlideWidth] = useState(1);
    const [blob, setBlob] = useState();

    const previewTimeout = useRef();

    const videoRef = createRef();
    const previewBoxRef = createRef();

    const handleChange = ({target: {value}}) => {
        const vid = videoRef.current;
        vid.currentTime = (vid.duration * value)/100;
    }
    const handlePlay = () => {
        videoRef.current[playing ? 'pause' : 'play']();
    }
    const doSetCurrentTime = () => {
        const rd = num => Math.floor(num);
        const twoFigures = num => String(num).length === 1 ? `0${num}` : num; 

        const vid = videoRef.current;
        const ct = vid.currentTime;
        const rct = rd(ct);

        setCurrentTime(rd((ct/vid.duration)*100));
        setReadableTime(rd(rct/60) + ':' + twoFigures(rct%60));
    }

    const handlePreview = (e, hide) => {
        if(hide){
            previewTimeout.current = setTimeout(setOpenPreview.bind(null, false), 5000);
            return;
        }
        clearTimeout(previewTimeout.current);
        if(e.nativeEvent.path.some(el => (el instanceof HTMLElement) && el.classList.contains('preview'))) return;
        const pb = previewBoxRef.current;
        const bc = pb.getBoundingClientRect();
        let location = e.pageX - bc.x;
        location = location < 0 ? 0 : location;
        setPreviewLocation(location);
        setOpenPreview(true);
        setPreviewSlideWidth(bc.width);
    }

    useEffect(() => { getVideo(src, setBlob) }, [setBlob]);

    return {
        currentTime,
        readableTime,
        playing,
        previewLocation,
        openPreview,
        previewSlideWidth,
        videoRef,
        previewBoxRef,
        blob,
        setPlaying,
        handleChange,
        handlePlay,
        doSetCurrentTime,
        handlePreview
    }

}

export const useSection3VideoStateManager = () => {
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [blob, setBlob] = useState();
    const videoRef = createRef(); 

    const toggle = () => videoRef.current[videoPlaying ? 'pause' : 'play']()

    useEffect(() => { getVideo('./images/sec31.webm', setBlob) }, [setBlob]);

    return {
        videoPlaying,
        blob,
        videoRef,
        toggle,
        setVideoPlaying
    }
}