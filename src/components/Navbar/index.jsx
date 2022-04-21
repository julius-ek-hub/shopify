import NavBarDesktop from "./large-screens";
import NavBarMobile from "./small-screens";
import { useEffect } from "react";
import { monitorScroll } from '../../utils/fxns';

const NavBar = ({className}) => {
    useEffect(() => monitorScroll(), []);

    return className  === 'large-screen' ? <NavBarDesktop/> : <NavBarMobile/>
}

export default NavBar;