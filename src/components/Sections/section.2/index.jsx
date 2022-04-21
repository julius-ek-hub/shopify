import { Go } from '../../buttons';
import { Icon1, Icon2, Icon3, Icon4} from './icons';

const Section2 = ({className}) => {

    return (
    <section className={`section-2 ${className || ''}`}>
        <div>
            <h1>Bring your business online</h1>
            <div className="intro">
                Create an ecommerce website backed by powerful 
                tools that help you find customers, drive sales, and manage your day-to-day.
            </div>
            <Go label="Explore more examples" color="black"/>

            <div className="image-container">
                <div className="card">
                    <img src="./images/sec21.webp" alt="Presentation"/>
                    <a href="#top">
                        <div>FOOD &amp; DRINK</div>
                        <div>Alfred</div>
                    </a>
                </div>
                <div className="card">
                    <img src="./images/sec22.webp" alt="Presentation"/>
                    <a href="#top">
                        <div>JEWELRY</div>
                        <div>Corey Moranis</div>
                    </a>
                </div>
                <div className="card">
                    <img src="./images/sec23.webp" alt="Presentation"/>
                    <a href="#top">
                        <div>FOOD &amp; DRINK</div>
                        <div>Detour Coffee</div>
                    </a>
                </div>
                <div className="card">
                    <img src="./images/sec24.webp" alt="Presentation"/>
                    <a href="#top">
                        <div>BEAUTY &amp; COSMETICS</div>
                        <div>Then I Met You</div>
                    </a>
                </div>
                <div className="card">
                    <img src="./images/sec25.webp" alt="Presentation"/>
                    <a href="#top">
                        <div>HOME &amp; GARDEN</div>
                        <div>Miss Boon</div>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <h1>Take the best path forward</h1>
            <div className="cards">
            <div className="card">
                <div className='icon'>
                    <Icon1/>
                </div>
                <div className='title'>Start an online business</div>
                <div className='content'>
                    Create a business, whether you've got a fresh idea or 
                    are looking for a new way to make money.
                </div>
            </div>
            <div className="card">
                <div className='icon'><Icon2/></div>
                <div className='title'>Move your business online</div>
                <div className='content'>
                    Turn your retail store into an online store and keep 
                    serving customers without missing a beat.
                </div>
            </div>
            <div className="card">
                <div className='icon'><Icon3/></div>
                <div className='title'>Switch to Shopify</div>
                <div className='content'>
                    Bring your business to Shopify, no matter which 
                    ecommerce platform you're currently using.
                </div>
            </div>
            <div className="card">
                <div className='icon'><Icon4/></div>
                <div className='title'>Hire a Shopify expert</div>
                <div className='content'>
                    Get set up with the help of a trusted freelancer or agency 
                    from the Shopify Experts Marketplace.
                </div>
            </div>
            </div>
        </div>
    </section>
)
}

export default Section2;