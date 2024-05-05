import React from 'react';
import Reddit from '../Reddit/reddit';

function RedditsList(props) {
    return(
        <>
            {props.userSubSearch.map((reddit) => (
                <Reddit reddit={reddit} key={reddit.id}/>
            ))}
            {props.userSearchResult.map((reddit) => (
                <Reddit reddit={reddit} key={reddit.id}/>
            ))}
        </>
    )
};

export default RedditsList;