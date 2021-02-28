import React from 'react';
import WindowWidget from './windowwidget';
import logger from "../../common/logger";

let ItemWindow = ({item, dispatch}) =>  {

    logger.info('[ItemWindow|in]: going to render %s item', JSON.stringify(item))

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

};

export default ShopWindow;
