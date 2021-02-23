import React from 'react';

let getItemImageSrc = (item) => {
    let result = null
    if (null !== item && item.images && Array.isArray(item.images)){
         let filter = item.images.filter(o => o.index === 0)
        if ( 0 < filter.length )
            result = filter[0].src
    }
    return result
}

let ItemWidget = ({ item }) => {
    if (null !== item)
        return (
            
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img src={getItemImageSrc(item)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href="#" className="btn btn-primary">check it</a>
                    </div>
                </div>
            </div>
            
        )
    else
        return null
};

export default ItemWidget;