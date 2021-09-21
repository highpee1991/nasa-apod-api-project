import React from "react"

const Photo = props => (
    <div className="apod-container">
        <div className="apod-img">
            {props.photo.media_type === "image" ? (
            <img src={props.photo.url} alt={props.photo.title} />
            ) : (
                <iframe 
                    title="space-video"
                    src={props.photo.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />
            )}
            
        </div>
        <div className="apod-attr">
            <h2 className="h2-apos">{props.photo.title}</h2>
            <p className="apod-copyright">copyright: {props.photo.copyright}</p>
            <p className="apod-date">{props.photo.date}</p>
            <p className="apod-explanation">{props.photo.explanation}</p>
        </div>
    </div>
)

export default Photo;
