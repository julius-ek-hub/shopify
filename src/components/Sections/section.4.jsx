import { Go } from "../buttons";

const Section4 = ({className}) => {

    return (
    <section className={`section-4 ${className || ''}`}>
        <div>
            <h2>Empowering independent business owners everywhere</h2>
            <h2>
                Millions of businesses in <strong>175 countries</strong> around the world have 
                made over <strong>$200 billion USD</strong> in sales using Shopify.
            </h2>
            <Go label="Learn more about Shopify" sx={{fontSize: '20px', fontWeight: 'bolder'}}/>
        </div>
        <div>
            <img src="./images/sec41.png" alt="Presentation"/>
        </div>
    </section>
)
}

export default Section4;