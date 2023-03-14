import "../styles/Sidebar.css"

import SidebarOption from "./SidebarOption"

import TwitterIcon from "@mui/icons-material/Twitter"
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import PermIdentityIcon from "@mui/icons-material/PermIdentity"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

import { Button } from "@mui/material"

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitter-icon"/>

            <SidebarOption active Icon={HomeIcon} text="Accueil" />
            <SidebarOption Icon={SearchIcon} text="Explorer" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Signets" />
            <SidebarOption Icon={PermIdentityIcon} text="Profil" />
            <SidebarOption Icon={MoreHorizIcon} text="Plus" />

            <Button className="sidebar-tweet">Tweeter</Button>
        </div>
    )
}

export default Sidebar