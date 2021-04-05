import React, { Fragment } from 'react';
import logger from "../../common/logger";
import { S3Image } from 'aws-amplify-react';

let ImageCarousel = ({imageKeys, admin, edit, dispatcher}) =>  {
    logger.debug('[ImageCarousel|in]: (%s)', JSON.stringify(imageKeys))
    return (
        <Fragment>
        <div id="myCarousel" className="carousel slide mb-3" data-ride="carousel" data-interval="false">
            <ol className="carousel-indicators">
                { [...Array(imageKeys.length).keys()].map((o,index) => <li key={index} data-target="#myCarousel" data-slide-to={index} className=""></li>) }
            </ol>
            <div className="carousel-inner">
            { imageKeys.map((o,index) => 
                <div key={index} className={"carousel-item" + (0 === index ? " active" : "")}>
                    {/* <img src={o.src} className="d-block w-80 mx-auto" width="100%" height="80%" aria-label=" :  "/> */}
                    <S3Image imgKey={o} className="d-block w-80 mx-auto" width="100%" height="80%" aria-label=" :  "/>
                    <div className="carousel-caption d-none d-md-block">
                        <button type="button" className="btn btn-primary" onClick={e => dispatcher({ type: 'removeImage', value: o.id})}>remove image</button> 
                    </div>
                </div>
            ) }
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
            
        </div>
        </Fragment>
    ); 
};

export default ImageCarousel;
