import React from 'react';
import './reddit.css';

function Reddit(props) {
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
                    <h2 className='reddit-title'>{props.reddit.title}</h2>
                </div>
                <div>
                    <figure>
                        <div className='img-container'>
                            {props.reddit.img}
                        </div>
                        <hr/>
                        <figcaption>
                            <p>{props.reddit.id}</p>
                            <p>{props.reddit.time}</p>
                            <p>{props.reddit.comments}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>

        </article>
    )
};

export default Reddit;