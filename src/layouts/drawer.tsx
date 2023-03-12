import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WalletIcon from '@mui/icons-material/Wallet';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.jpg'

import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, IconButton, Stack } from '@mui/material';

import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MenuBookOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { width } from '@mui/system';



const routes = [
    {
        name:"Service Manager",
        icon:<VolunteerActivismIcon/>,
        to:"/"
    },
    {
        name:"Payment",
        icon:<WalletIcon/>,
        to:"/payment"
    },
    {
        name:"Alert",
        icon:<NotificationsNoneIcon/>,
        to:"/alert"
    },
    {
        name:"Withdrawals",
        icon:<LocalAtmIcon/>,
        to:"/withdrawal"
    },
    {
        name:"Manage Services",
        icon:<ManageAccountsIcon/>,
        to:"/services"
    },
    {
        name:"Settings",
        icon:<SettingsIcon/>,
        to:"/settings"
    },
    {
        name:"Support",
        icon:<SupportAgentIcon/>,
        to:"/support"
    }
]

export const NavBar = ({children}:any)=>{

    const [state, setState] = useState(false)

    const [target, setTarget] = useState(0)

    const navigate = useNavigate()

    const handleSelected = (e:any,idx:number)=>{
        setTarget(idx)
    }


    return(
        <Box sx={{display:"flex"}}>
            
            <Drawer
                anchor='left'
                variant='permanent'
                open={state}
                
                sx={{p:20}}
            >
            <Stack  spacing={1} direction={"row"} mt={5} sx={{display:"flex", justifyContent:"space-around"}}>
                <Box sx={{display:state?"flex":"none"}}>
                    <img src={logo} alt='Company Logo' width={"90px"}/>
                </Box>
                <IconButton onClick={()=>{setState(!state)}} >
                    <MenuIcon/>
                </IconButton>
            </Stack>
            
                <List sx={{display:"block", textAlign:"center", justifyContent:"center", width:state?"100%":"100px", overflow:"hidden"}}>
                {
                    routes.map((item, index)=>{
                    return (
                            <ListItem key={item.name} onClick={()=>navigate(item.to)}>
                                <ListItemButton 
                                    selected={target === index} 
                                    onClick={(event)=>{handleSelected(event,index)}}
                                    sx={{justifyContent: "center"}}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth:0,
                                            mr: state? 3 : "auto",
                                            justifyContent: "center"
                                        }} 
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={item.name} 
                                        sx={{opacity: state? 1: 0}}
                                    />
                                </ListItemButton>
                            </ListItem>
                            )
                    })
                }
                </List>
            </Drawer>
            <Box component={"main"} sx={{flexGrow:1}}>
                {children}
                <Outlet/>
            </Box>
        </Box>
    )
}