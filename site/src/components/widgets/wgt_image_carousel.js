import React, { Fragment } from 'react';
import logger from "../../common/logger";
import { S3Image } from 'aws-amplify-react';


let ImageCarousel = ({id, imageKeys, edit, dispatcher}) =>  {
    logger.info('[ImageCarousel|in]: (%s)', JSON.stringify(imageKeys))
    const carouselId = `theCarousel-${id}`
    return (
        <Fragment>
        <div id={carouselId} className="carousel slide mb-3" data-ride="carousel">
             <ol className="carousel-indicators">
                { imageKeys.map((o,index) => <li key={index} data-target={`#${carouselId}`} data-slide-to={index} className={0 === index ? " active" : ""}></li>) }
            </ol>
            <div className="carousel-inner">
            { imageKeys.map((o,index) => 
                <div key={index} className={"carousel-item" + (0 === index ? " active" : "")}>

                    <S3Image imgKey={o} className="d-block w-80 mx-auto img-fluid" width="100%" height="80%" aria-label=" :  "/>  
                    { edit && 
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" className="btn btn-primary" onClick={e => {e.preventDefault(); dispatcher({ type: 'removeImage', value: o})}}>remove image</button> 
                        </div>
                     }   
                    
                </div>
            ) }
            </div>
            <a className="carousel-control-prev" href={`#${carouselId}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={`#${carouselId}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
            
        </div>
        </Fragment>
    ); 
};

export default ImageCarousel;
