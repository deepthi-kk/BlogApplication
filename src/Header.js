import React from "react";
import "./Header2.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar , IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import  {useStateValue} from "./StateProvider";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';



function Header() {

    const [{user},dispatch]=useStateValue();
    return (
        <div className ="header">
            <div className="header_left"> 
                <img
                src="https://image.flaticon.com/icons/svg/1312/1312139.svg"
                alt=""
                />
                <div className="header_input" >
                    <SearchIcon />
                    <input placeholder="Search Facebook"type="text"/>
                </div>

            </div>
            <div className="header_middle">
                <div className="header_option 
                header_option--active">
                    <HomeIcon fontSize="large"/>
                 </div>
                 <div className="header_option ">
                    <FlagIcon fontSize="large"/>
                 </div>
                 <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                 </div>
                 <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                 </div>
                 <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                 </div>

             </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg/220px-Matt_LeBlanc_as_Joey_Tribbiani.jpg"/>
                    <h4>Deepthi Chowdhary</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
                
             </div>    
        </div>
        );
}

export default Header;
