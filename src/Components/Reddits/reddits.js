import React from 'react';
import './reddits.css';
import RedditsList from '../RedditsList/redditsList';
function Reddits(props) {
    return (
        <section className='reddit-container'>
            <RedditsList userSearchResult={props.userSearchResult} userSubSearch={props.userSubSearch}/>
        </section>
    )
};

export default Reddits;