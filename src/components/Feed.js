import "../styles/Feed.css"

import Tweetbox from "./Tweetbox"

function Feed() {
    return (
        <div className="feed">
            <div className="feed-header">
                <h2>Accueil</h2>
            </div>

            <Tweetbox />
        </div>
    )
}

export default Feed