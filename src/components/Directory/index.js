import React from 'react';
import ShopMen from '../../assects/88d29bd5e65c81b4a6b6950463170e72.jpg';
import ShopWomen from '../../assects/44b9bdecb7c29d07515351d4565d5b19.jpg';
import './styles.scss'

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item" style={{
                    backgroundImage: `url(${ShopMen})`
                }}>
                <a>Shop Mens</a>    
                </div>

                <div className="item" style={{
                    backgroundImage: `url(${ShopWomen})`
                }}>
                 <a>Shop Womens</a>   
                </div>
            </div>
        </div>
    );
};

export default Directory;