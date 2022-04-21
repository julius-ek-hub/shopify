import { Go } from "../buttons";

const Section6 = ({className}) => {

    return (
    <section className={`section-6 ${className || ''}`}>
        <div>
            <h1>Get the help you need, <br/>every step of the way</h1>
            <div>
                <div className="card">
                    <h4>Shopify support</h4>
                    <div>
                        Contact support 24/7, whether you're troubleshooting 
                        issues or looking for business advice.
                    </div>
                    <Go label="Contact support"/>
                </div>
                <div className="card">
                    <h4>Shopify App Store</h4>
                    <div>
                        Add features and functionality to your business with 6,000+ 
                        apps that integrate directly with Shopify.
                    </div>
                    <Go label="Visit the Shopify App Store"/>
                </div>
                <div className="card">
                    <h4>Shopify Experts Marketplace</h4>
                    <div>
                        Hire a Shopify expert to help you 
                        with everything from store setup to SEO.
                    </div>
                    <Go label="Explore the Shopify Experts Marketplace"/>
                </div>
            </div>
        </div>
        <div>
            <img src="./images/sec61.webp" alt="Presentation"/>
        </div>
    </section>
)
}

export default Section6;