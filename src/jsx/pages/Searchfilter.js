import React from 'react';
import { Link } from "react-router-dom";
import './try.css';
function Searchfilter() {
    return (<>
        <div className='search'>
            <div className="input-group search-area d-xl-inline-flex d-none">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                />
                <div className="input-group-append">
                    <span className="input-group-text">
                        <Link to="">
                            <Link className="flaticon-381-search-2"></Link>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </>);
}

export default Searchfilter;