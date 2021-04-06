import React from 'react';
import {Link} from "react-router-dom";
import logger from "../../common/logger";

let ShopHeader = ({admin}) => {
    logger.debug(`[ShopHeader|in] (${admin})`);
    if( admin )
        return (
            <div className="container">
                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                    <Link to="/shop/0" style={{ padding: "0 10px", fontWeight: "bold" }} className="p-2 text-muted"> new item </Link>
                    </nav>
                </div>
            </div>
        )
    else
        return null

};

export default ShopHeader;


