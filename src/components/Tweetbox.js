import "../styles/Tweetbox.css"

import { Avatar, Button } from "@mui/material"

function Tweetbox() {
  return (
    <div className="tweetbox">
        <form>
            <div className="tweetbox-input">
                <Avatar src="https://pbs.twimg.com/profile_images/1633211100131934208/WJAF3uI5_400x400.jpg" />
                <input placeholder="Quoi de neuf ?" type="text"></input>
            </div>
            <Button className="tweetbox-tweet">Tweeter</Button>
        </form>
    </div>
  )
}

export default Tweetbox