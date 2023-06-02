import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToyRow = ({ toyData, toy, setToy }) => {
   const { _id, sellerName, toyName, category, price, quantity } = toyData;

   const handleDelete = (_id) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {

            fetch(`https://robotics-toys-server-sagar-ghosh1.vercel.app/toy/${_id}`, {
               method: 'DELETE',
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data)
                  if (data.deletedCount > 0) {
                     Swal.fire(
                        'Deleted!',
                        'Your toy has been deleted.',
                        'success'
                     )
                     const remaining = toy.filter(toy => toy._id !== _id);
                     setToy(remaining);
                  }
               })
         }
      })
   }

   return (
      <tr>
         <td>{sellerName}</td>
         <td>
            <div className="font-semibold">{toyName}</div>
         </td>
         <td>{category}</td>
         <td>{quantity}</td>
         <td>${price}</td>
         <th className='flex'>
            <Link to={`/update/${_id}`} className="text-xl text-indigo-600 mr-4"><FaRegEdit /></Link>
            <Link onClick={() => handleDelete(_id)} className="text-xl text-red-500"><FaRegTrashAlt /></Link>
         </th>
      </tr>
   );
};

export default ToyRow;