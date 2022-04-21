import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

let timeOut;
let userHasHovered = false;

const scrollHandler = (setHide) => {
    clearTimeout(timeOut);
    setHide('show-me');
    userHasHovered = false;
    timeOut = setTimeout(()=> {
        if(userHasHovered) return;
        setHide('hide-me');
    }, 3000);
}

const routeTo = url => window.location = url;

const share = () => {
    window.navigator.share({
        url: 'https://shopify.247-dev.com',
        title: 'Shopify landing page clone, built with React/Mui',
    }).catch(() => {
        window.navigator.clipboard.writeText('https://shopify.247-dev.com')
        .then(() => alert('url copied to clipboard'))
        .catch(e => alert('Failed to share ', e.message))
    })
}

const actions = [
  { icon: <GitHubIcon/>, name: 'GitHub Repo', onClick: () => routeTo('https://github.com/julius-ek-hub/shopify') },
  { icon: <LinkedInIcon/>, name: 'Linkedin Profile', onClick: () => routeTo('https://linkedin.com/in/julius-ek') },
  { icon: <WhatsAppIcon/>, name: 'WhatsApp Me', onClick: () => routeTo('https://wa.me/971528028233') },
  { icon: <EmailIcon/>, name: 'Leave me a message', onClick: () => routeTo('https://247-dev.com/leave-a-message') },
  { icon: <HomeIcon/>, name: 'Home page', onClick: () => routeTo('https://247-dev.com') },
  { icon: <ShareIcon/>, name: 'Share this project', onClick: share },
];

export default function Me() {
  const [hide, setHide] = useState('hide-me');

  useEffect(() => {
      const handleScroll = () => scrollHandler(setHide);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll)
  }, [setHide]);

  return (
    <Box 
        className={`me-box ${hide}`} 
        onMouseEnter={() => userHasHovered = true} 
        onMouseLeave={() => userHasHovered = false}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
