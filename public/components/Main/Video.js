import React from 'react';

const Video = () => {
    return (
        <div className="Video">
            <iframe width="720" height="405" src="https://www.youtube.com/embed/OfWibnD_UyY?si=QJlNmvK2G1HhEIlj?mute=1"
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
        </div>
    );
};

export default Video;