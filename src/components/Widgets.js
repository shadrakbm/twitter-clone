import "../styles/Widgets.css"

import SearchIcon from "@mui/icons-material/Search"

import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets-input">   
                <SearchIcon className="widgets-searchIcon" />
                <input placeholder="Rechercher" type="text"/>
            </div>

            <div className="widgets-container">
                <h2>Tendances</h2>

                <TwitterTweetEmbed tweetId={""} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="shadoubidou"
                options={{height: 400}} />
            </div>

        </div>
    )
}

export default Widgets