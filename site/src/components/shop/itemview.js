import React, { Fragment } from 'react';
import { useParams, useRouteMatch } from "react-router-dom";
import logger from "../../common/logger";

let ItemView = ({items, user, dispatch}) =>  {

    const { itemid } = useParams()
    const { url, path } = useRouteMatch()

    logger.info('[ItemView|in]: going to render item id: %s', itemid)
    const item = items.filter(o => o.id === itemid)[0]

    if( item ){
        logger.info('[ItemView]: item found: %s', JSON.stringify(item))
        return (
            <Fragment>
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
                <ol className="carousel-indicators">
                    { [...Array(item.images.length).keys()].map((o,index) => <li key={index} data-target="#myCarousel" data-slide-to={index} className=""></li>) }
                </ol>
                <div className="carousel-inner">
                { item.images.map((o,index) => 
                    <div key={index} className={"carousel-item" + (0 === index ? " active" : "")}>

                        <img src={o.src} className="d-block w-80 mx-auto" width="80%" height="80%" aria-label=" :  "/>
                        
                        <div className="container">
                            <div className="carousel-caption text-left">
                            </div>
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
    }
    else
        return null;

};

export default ItemView;
