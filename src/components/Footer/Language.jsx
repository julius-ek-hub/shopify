import { useState } from 'react';

import Menu from '@mui/material/Menu';

import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Close from '@mui/icons-material/Close'

import Button from '../buttons';

const countries = [
    'Australia',
    'Belgium',
    'Brazil',
    'Canada (English)',
    'Canada (Français)',
    'Colombia',
    'Denmark',
    'Deutschland',
    'España',
    'Español (Intl.)',
    'France',
    'Hong Kong SAR',
    'India',
    'Indonesia',
    'Ireland',
    'Italia',
    'Malaysia',
    'México',
    'Nederland',
    'New Zealand',
    'Nigeria',
    'Norway (English)',
    'Philippines',
    'Singapore',
    'South Africa',
    'Sverige',
    'USA',
    'United Kingdom',
    'Việt Nam',
    '中国',
    '中國香港特別行政區',
    '台灣',
    '日本',
    '简体中文',
    '대한민국'
];

const Countries = ({from = 0, to}) => {
    return (
        <div>
            {countries.slice(from, to).map((c, k) => (
                <Button key={k} className="drop-down-menu-item">{c}</Button>
            ))}
        </div>
    )
}

export default function Language(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <>
            <Button onClick={({currentTarget})=> setAnchorEl(currentTarget)}>
                <LanguageIcon sx={{mr: '4px'}}/> 
                USA
                <ArrowDropDownIcon/>
            </Button>
            <Menu 
                onClose={setAnchorEl.bind(null, null)}
                anchorEl={anchorEl}
                sx={{zIndex: 90000}}
                open={open}>
                <div className='countries-picker'>
                    <div>
                        <h3>Country/region</h3>
                        <Button sx={{ml: 'auto'}} 
                            onClick={setAnchorEl.bind(null, null)}>
                            <Close/>
                        </Button>
                    </div>
                    <div>
                        <Countries to={18}/>
                        <Countries from={18}/>
                    </div>
                </div>
            </Menu>
        </>
    )
}