import React from 'react';
import './reddit.css';

function Reddit() {
    return (
        <article className='reddit-card'>

            <div className='col-one'> 
                <button className='like-buttons'>
                    <img className='button-image' src='thumbs-up.png' width='50px'/>
                </button>
                <p>count</p>
                <button className='like-buttons'>
                    <img className='button-image' src='thumbs-down.png' width='50px'/>
                </button>
            </div>

            <div className='col-two'>
                <div>
                    <h2 className='reddit-title'>Reddits</h2>
                </div>
                <div>
                    <figure>
                        <img className='figure-image' alt='' height='300px' width='300px'/>
                        <hr/>
                        <figcaption>
                            <p>profile</p>
                            <p>hrs ago</p>
                            <p>comments</p>
                        </figcaption>
                    </figure>
                </div>
            </div>

        </article>
    )
};

export default Reddit;