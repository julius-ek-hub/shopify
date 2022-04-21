import { useRef } from "react";

export default function VideoPreview({previewLocation, open, sliderWidth, src}){

    const videoRef = useRef();
    const readableRef = useRef();

    (()=> {
        try{
            const vid = videoRef.current;
            const rr = readableRef.current;
            if(!vid || !rr) return;
            vid.currentTime = (vid.duration * previewLocation)/sliderWidth;
            const rd = num => Math.floor(num);
            const twoFigures = num => String(num).length === 1 ? `0${num}` : num; 
            const ct = vid.currentTime;
            const rct = rd(ct);
            rr.innerText = rd(rct/60) + ':' + twoFigures(rct%60);
        }catch(e){}
    })()

    return (
        <div className="video-player preview" 
            style={{left: previewLocation - 75, display: open ? 'block' : 'none'}}>
            <div className="container">
                <video src={src} ref={videoRef}/>
                <div className="cover">
                    <span className="readable" ref={readableRef}>0:00</span>
                </div>
            </div>
        </div>
    )
}