import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

import Button from '../buttons';
import Language from './Language';

export function Footer(){
    return (
        <footer>
            <div>
                <div>
                    <Button>About</Button>
                    <Button>Careers</Button>
                    <Button>Press and Media</Button>
                    <Button>Shopify Plus</Button>
                    <Button>Site Map</Button>
                </div>
            </div>
            <div>
                <div>
                    <h5>ONLINE STORE</h5>
                    <Button>Sell Online</Button>
                    <Button>Features</Button>
                    <Button>Examples</Button>
                    <Button>Website builder</Button>
                    <Button>Online retail</Button>
                </div>
                <div>
                    <h5></h5>
                    <Button>Ecommerce website</Button>
                    <Button>Domain names</Button>
                    <Button>Themes</Button>
                    <Button>Shopping cart</Button>
                    <Button>Ecommerce hosting</Button>
                </div>
                <div>
                    <h5></h5>
                    <Button>Mobile commerce</Button>
                    <Button>Ecommerce software</Button>
                    <Button>Online store builder</Button>
                    <Button>Dropshipping Business</Button>
                    <Button>Store themes</Button>
                </div>
                <div>
                    <h5>POINT OF SALE</h5>
                    <Button>Point of sale</Button>
                    <Button>Features</Button>
                    <Button>Hardware</Button>
                </div>
                <div>
                    <h5>SUPPORT</h5>
                    <Button>24/7 Support</Button>
                    <Button>Shopify Help Center</Button>
                    <Button>Shopify Community</Button>
                    <Button>API Documentation</Button>
                    <Button>Free Tools</Button>
                    <Button>Free stock photos</Button>
                    <Button>Websites for sale</Button>
                    <Button>Logo maker</Button>
                    <Button>Business name generator</Button>
                    <Button>Research</Button>
                </div>
                <div>
                    <h5>SHOPIFY</h5>
                    <Button>Contact</Button>
                    <Button>Partner program</Button>
                    <Button>Affiliate program</Button>
                    <Button>App developers</Button>
                    <Button>Investors</Button>
                    <Button>Blog topics</Button>
                    <Button>Community Events</Button>
                </div>
            </div>
            <div>
                <div>
                    <Button><FacebookOutlinedIcon/></Button>
                    <Button><TwitterIcon/></Button>
                    <Button><YouTubeIcon/></Button>
                    <Button><InstagramIcon/></Button>
                    <Button><LinkedInIcon/></Button>
                    <Button><PinterestIcon/></Button>
                </div>
                <div>
                    <Button>Terms of Service</Button>
                    <Button>Privacy Policy</Button>
                    <Language/>
                </div>
            </div>
        </footer>
    )
}