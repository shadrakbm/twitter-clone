import "../styles/Feed.css"

import Tweetbox from "./Tweetbox"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            <div className="feed-header">
                <h2>Accueil</h2>
            </div>

            <Tweetbox />

            <Post />
        </div>
    )
}

export default Feed