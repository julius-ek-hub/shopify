import { Go, TryButton } from "../buttons";

const Section7 = ({className}) => {

    const returnToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
    <section className={`section-7 ${className || ''}`}>
        <div>
            <h1>Start your business journey with Shopify</h1>
            <div>
               Try Shopify for free, and explore all the tools 
               and services you need to start, run, and grow your business.
            </div>
            <TryButton/>
        </div>
        <Go label="Back to top" direction="top" onClick={returnToTop}/>
    </section>
)
}

export default Section7;