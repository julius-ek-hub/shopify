export const Logo = () => (
    <a href="#d" className='logo'>
        <img src='./images/logo/logo.png' alt="Logo"/>
        <h2>Shopify</h2>
    </a>
)

export const Header = ({children, left, ...rest}) => {
    return (
        <header {...rest}>
            <nav>
                <div className='nav-left'>
                    <Logo/>
                    {left}
                </div>
                <div className='nav-right'>
                    {children}
                </div>
            </nav>
        </header>
    );
}