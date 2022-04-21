import useMediaQuery from '@mui/material/useMediaQuery';
import { Input } from "../Try.form";
import { TryButton } from '../buttons';

const Section1 = ({className}) => {
    const smallEnough = useMediaQuery('(max-width:700px)');
    return (
    <section className={`section-1 ${className || ''}`}>
        <div>
            <h1>The platform commerce is <span>built on</span></h1>
            <div className="muted">
                Millions of the world's most successful brands 
                trust Shopify to sell, ship and process payments anywhere.
            </div>
            <div className={`form ${smallEnough ? 'fill' : ''}`}>
                <Input placeholder="Please enter text" />
                <TryButton/>
            </div>
            <div className="muted small">
                Try Shopify free for 14 days, no credit card required. 
                By entering your email, you agree to receive marketing emails from Shopify.
            </div>
        </div>
        <div>
            <img src="./images/sec11.webp" alt="Section 1"/>
        </div>
    </section>
)
}

export default Section1;