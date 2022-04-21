import React from 'react';
import navItems from './nav-items';
import DropDownMenu from './utils.large-screens';
import Button from '../buttons';
import { TryButton } from '../buttons';
import { Header } from './utils.both';

export default function NavBarDesktop() {
  const fetMenu = (from, to) => (
    <ul>
        {navItems.slice(from, to).map((items, i) => (
            <li key={i}>
                <DropDownMenu items={items} mainMenu={true}/>
            </li>
        ))}
    </ul> 
  );

  return (
    <Header className='desktop' left={fetMenu(0, 4)}>
        {fetMenu(4)}
        <Button sx={{color: 'black', mt: '10px', mr: '10px'}}>Login</Button>
        <TryButton sx={{mt: '10px'}}/>
    </Header>
  );
}
