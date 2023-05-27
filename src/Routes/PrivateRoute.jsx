import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   const { users, loading } = useContext(AuthContext);

   if (loading) {
      return (
         <div className='min-h-screen bg-slate-200'>
            <Puff
               height="100"
               width="100%"
               radius={1}
               color="#4fa94d"
               ariaLabel="puff-loading"
               wrapperStyle={{}}
               wrapperClass=""
               visible={true}
            />
         </div>);
   }

   if (users) {
      return children;
   }

   return (
      <Navigate state={{ from: location }} to="/login" replace>
         {children}
      </Navigate>
   );
};

export default PrivateRoute;