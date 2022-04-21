import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '../buttons';

const MultipleDropDownMenu = ({items}) => {
    const [sideMenu, changeSideMenu] = React.useState(null);
    return (
        <div className='nav-sub-dropdown'>
            <div>
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    {item.heading ? <div className='nav-items-heading' key={i}>{item.label}</div> :
                    <MenuItem 
                        className='drop-down-menu-item'
                        onClick={() => changeSideMenu(item.children)}>
                        {item.label}
                        {item.children ? <KeyboardArrowDownIcon sx={{transform: 'rotate(-90deg)'}}/> : null}
                    </MenuItem>}
                    {i === 0 ? <Divider variant='middle'/> : null}
                </React.Fragment>
            ))}
            </div>
            {sideMenu ? 
            <div className='right-sub-menu'>
                <MultipleDropDownMenu items={sideMenu}/> 
            </div>
            : null }
        </div>
    )
}

const SingleDropDownMenu = ({items}) => {
    return items.map(({label}, i) =>                 [
        [
            i === 1 ? <Divider variant='middle' key={0}/> : null, 
            <MenuItem key={1} className='drop-down-menu-item'>
                {label}
            </MenuItem>
        ]
    ])
}

export default function DropDownMenu({items: {label, children}}) {
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  if(!children) 
      return <Button>{label}</Button>;

  return (
    <>
        <Button 
            onClick={({currentTarget})=> setAnchorEl(currentTarget)}>
            {label} <KeyboardArrowDownIcon/>
        </Button>
        <Menu 
            onClose={setAnchorEl.bind(null, null)}
            anchorEl={anchorEl}
            open={open}>
            {children.some(({children}) => children) ? 
                <MultipleDropDownMenu items={children}/> :
                <SingleDropDownMenu items={children}/>}
        </Menu>
    </>
  );
}

