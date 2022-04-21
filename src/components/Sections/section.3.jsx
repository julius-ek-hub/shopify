import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import CircularProgress from '@mui/material/CircularProgress';

import Button, { Go } from '../buttons';
import { useSection3VideoStateManager } from '../../utils/videos';


const items = [
    {
        title: `Sell everywhere`,
        image: `./images/sec31.webm`,
        description: `Use one platform to sell products to anyone, anywhere—in person 
        with Point of Sale and online through your website, social media, 
        and online marketplaces.`,
        go: `Explore ways to sell`
    },
    {
        title: `Market your business`,
        image: `./images/sec32.webp`,
        description: `Take the guesswork out of marketing with built-in 
        tools that help you create, execute, and analyze digital marketing campaigns.`,
        go: `Explore how to market your buiness`
    },
    {
        title: `Manage everything`,
        image: `./images/sec32.png`,
        description: `Gain the insights you need to grow—use a single dashboard to 
        manage orders, shipping, and payments anywhere you go.`,
        go: `Explore how to manage youe business`
    },
];


const Section3 = ({ className }) => {
    const vsm = useSection3VideoStateManager();

    return (
    <section className={`section-3 ${className}`}>
        <div>
            <div>
                <h1>With you wherever you're going</h1>
                <div className="intro">
                One platform with all the ecommerce and point of sale 
                features you need to start, run, and grow your business.
                </div>
            </div>
        </div>
        <div>
            <div>
                <div style={{position: 'relative'}}>
                    { !vsm.blob ? <div className='video-loading-ui'><CircularProgress/>Fetching Video...</div> :
                    <>
                        <video 
                            src={items[0].image}
                            ref={vsm.videoRef}
                            onPlay={() => vsm.setVideoPlaying(true)}
                            onPause={() => vsm.setVideoPlaying(false)}
                        />
                        <Button onClick={vsm.toggle} sx={{
                            position: 'absolute', 
                            right: 0, 
                            bottom: 0
                            }}>
                                { vsm.videoPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
                        </Button>
                    </>
                    }
                </div>
                <div>
                    <div>
                        <h2>{items[0].title}</h2>
                        <div>
                            {items[0].description}
                        </div>
                        <Go label={items[0].go}/>
                    </div>
                </div>
            </div>
            {items.slice(1).map((item, i) => (
                <div key={i}>
                    <div>
                        <img src={item.image} alt="Presentation"/>
                    </div>
                    <div>
                        <div>
                            <h2>{item.title}</h2>
                            <div>
                                {item.description}
                            </div>
                            <Go label={item.go}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
)
}

export default Section3;