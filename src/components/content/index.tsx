import {Link} from 'react-router-dom';

import AddListing from "./addListing";

const ProductListing = () =>{

    return (
    
<div className="row">
    <Link to="/addListing">Create Listing</Link>
    <AddListing />
</div>
    )

}


export default ProductListing;