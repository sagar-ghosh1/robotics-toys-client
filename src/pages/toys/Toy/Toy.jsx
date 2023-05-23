import React from 'react';
import { Link } from 'react-router-dom';

const toy = ({ toy }) => {
   const {_id, sellerName, toyName, category, price, quantity } = toy;

   return (
      <tr>
         <td>{sellerName}</td>
         <td>
            <div className="font-semibold">{toyName}</div>
         </td>
         <td>{category}</td>
         <td>{quantity}</td>
         <td>${price}</td>
         <th>
            <Link to={`/toy-details/${_id}`} className="btn btn-outline btn-sm rounded-sm capitalize">Toy details</Link>
         </th>
      </tr>
   );
};

export default toy;