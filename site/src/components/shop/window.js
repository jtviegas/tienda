import React from 'react';
import WindowWidget from './windowwidget';
import logger from "../../common/logger";

let Window = ({items, user, dispatch}) =>  {

    logger.debug('[Window|in] (items: %s, user: %s)', JSON.stringify(items, user))

    if ( null !== items && Array.isArray(items) && (0 < items.length) ){
        logger.info('[Window|in]: going to render %d items', items.length)
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        { items.map((o,index) => <WindowWidget key={index} item={o} dispatch={dispatch} />) }
                    </div>
                    <nav className="row float-right">
                        <a className="btn btn-outline-dark btn-sm m-1" href="#">&lt;&lt;</a>
                        <a className="btn btn-outline-dark btn-sm m-1" href="#">&lt;</a>
                        <a className="btn btn-outline-dark btn-sm m-1 disabled" href="#">&gt;</a>
                        <a className="btn btn-outline-dark btn-sm m-1" href="#">&gt;&gt;</a>
                    </nav>
                </div>
            </div>
        ); 
    }
    else
        return null
};

export default Window;
