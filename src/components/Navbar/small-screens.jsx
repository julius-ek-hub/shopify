import { useState } from 'react';

import Button, { TryButton } from '../buttons';
import { Header, Logo } from './utils.both';

import { FetchMenu } from './utils.small-screens';

import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';


export default function NavBarMobile() {
    const [open, setOpen] = useState(false);
  
    const tryClose = ({target})=> {
        if(target.tagName !== 'DIV') return;
        setOpen(!target.className.includes('MuiBackdrop-root'));
    }
  
    const btnStyle = {mt: '10px', mr: '10px'};
  
    return (
      <Header style={{width: `calc(100% - ${open ? 300 : 0}px)`, overflow: 'hidden'}} className="mobile">
          <Button sx={btnStyle}>Login</Button>
          <Button sx={btnStyle} onClick={()=> setOpen(true)}>
            <MenuIcon/>
          </Button>
          <Drawer
              anchor='right'
              open={open}
              onClose={()=> setOpen(false)}
              onClick={tryClose}
          >
              <List sx={{width: '300px'}}>
                  <div className='small-screen-menu-logo-holder'>
                      <Logo/>
                      <Button onClick={()=> setOpen(false)}>
                          <Close/>
                      </Button>
                  </div>
                  <Divider variant='middle' sx={{mb: '25px'}}/>
                  <FetchMenu from={0} to={4}/>
                  <Divider variant='middle' sx={{mt: '20px', mb: '20px'}}/>
                  <FetchMenu from={4}/>
                  <TryButton sx={{m: '20px 10%', width: '80%'}}/>
                  <FetchMenu collection={[
                      'About',
                      'Career',
                      'Press and Media',
                      'Shopify Plus',
                      'Sitemap'
                  ].map(label => {return {label}})}/>
              </List>
          </Drawer>
      </Header>
    );
  }
