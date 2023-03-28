import "../styles/Post.css"

import { Avatar } from "@mui/material"

import VerifiedUserMaterial from "@mui/icons-material/VerifiedUser"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import IosShareIcon from '@mui/icons-material/IosShare'

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-header-user">
                        <h3>
                            {displayName}{" "}
                            <span className="post-header-special">
                                {verified && <VerifiedUserMaterial className="post-badge" fontSize="x-small" />} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post-header-description">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="x-small" />
                    <RepeatIcon fontSize="x-small" />
                    <FavoriteIcon fontSize="x-small" />
                    <LeaderboardIcon fontSize="x-small" />
                    <IosShareIcon fontSize="x-small" />
                </div>
            </div>
        </div>
    )
}

export default Post