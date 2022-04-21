import { useState } from 'react';
import navItems from './nav-items';

import ListItem from '@mui/material/ListItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NoDropDown = ({label, heading}) => {
    if(heading)
        return <div className='nav-items-heading'>{label}</div>;
    return <ListItem button className='drop-down-menu-item'>{label}</ListItem>
}

const DropDownMenuItem = ({item: {label, children, heading}}) => {

    const [expanded, setExpanded] = useState(false);

    if(!children) return <NoDropDown label={label} heading={heading}/>;

    return (
        <Accordion 
            onChange={() => setExpanded(!expanded)} 
            sx={{
                border: 'none', 
                boxShadow: 'none', 
                '&:before': {backgroundColor: 'inherit'}
                }}>
            <AccordionSummary className='drop-down-menu-item'>
                {label}
                <KeyboardArrowDownIcon sx={{ml: 'auto', transform: `rotate(${expanded ? -180 : 0}deg)`}}/>
            </AccordionSummary>
            <AccordionDetails sx={{borderLeft: '1px solid rgba(0,0,0,0.3)', ml: '20px'}}>
                <FetchMenu collection={children}/>
            </AccordionDetails>
        </Accordion>
    )
}

export function FetchMenu ({from = 0, to, collection}) {

    return (collection || navItems).slice(from, to).map((item, i) => (
        <DropDownMenuItem item = {item} key={i}/>
    ))
};

