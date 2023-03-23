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
            <Avatar src="https://pbs.twimg.com/profile_images/1633211100131934208/WJAF3uI5_400x400.jpg" />
        </div>
        <div className="post-body">
            <div className="post-header">
                <div className="post-header-user">
                    <h3>
                        Shadrak{" "}
                        <span className="post-header-special">
                            <VerifiedUserMaterial className="post-badge" fontSize="x-small" /> @shadoubidou
                        </span>
                    </h3>
                </div>
                <div className="post-header-description">
                    <p>Bien joué ! Tu viens de lire le tout premier post d'un des réseaux sociaux les plus importants du 21ème siècle</p>
                </div>
            </div>
            <img src="https://media.giphy.com/media/YRuFixSNWFVcXaxpmX/giphy.gif" alt="GIF de Leonardo DiCaprio qui te félicite"/>
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