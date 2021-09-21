import React from 'react';
import "./Sidebar.css";
import SideBarRow from "./SideBarRow.js";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [{user},dispatch]=useStateValue();
    return (
        
        <div className="sidebar">
            <SideBarRow src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg/220px-Matt_LeBlanc_as_Joey_Tribbiani.jpg" title="deepthi chowdhary"/>
            <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 information center"/>
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SideBarRow Icon={PeopleIcon} title="people"/>
            <SideBarRow Icon={ChatIcon} title="Messenger"/>
            <SideBarRow Icon={StorefrontIcon} title="Shop"/>
            <SideBarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SideBarRow Icon={ExpandMoreIcon} title="More"/>
        </div>
    );
}

export default Sidebar
