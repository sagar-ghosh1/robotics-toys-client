import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
   useTitle('Blog');

   return (
      <div>
         <div className='min-h-screen pt-10'>
            <div>
               <div className="lg:w-10/12 mx-auto">
                  <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md">
                     <div className="collapse-title text-xl font-medium bg-indigo-50">
                        <p>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                     </div>

                     <div className="collapse-content">
                        <p className="mb-5">Access tokens and refresh tokens are two types of tokens used in OAuth 2.0, an open standard for authorization.
                           Access tokens are typically short-lived, expiring after a few hours or days. This is to protect the users privacy and security. If an access token is compromised, it can only be used for a limited period of time. </p>

                        <p>Refresh tokens are longer-lived tokens that can be used to obtain new access tokens. This is useful for applications that need to access protected resources on behalf of the user over a long period of time. For example, a weather app might use a refresh token to access the users location data every few minutes. Refresh tokens should be stored securely on the client-side. This can be done in a variety of ways, such as in a browsers local storage or in a database.</p>
                     </div>
                  </div>

                  <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md my-5">
                     <div className="collapse-title text-xl font-medium bg-indigo-50">
                        <p>Compare SQL and NoSQL database</p>
                     </div>

                     <div className="collapse-content">
                        <p className="mb-5">SQL (Structured Query Language) is the standard language for dealing with relational databases. SQL database or relational database is a collection of highly structured tables. Each row reflects a data entity, and every column defines a specific information field. Relational databases are built using a structured query language (SQL) to create, store, update, and retrieve data. Therefore, SQL is the underlying programming language for all relational database management systems (RDBMS) such as MySQL, Oracle, and Sybase, among others.</p>

                        <p>NoSQL databases are non-tabular databases and store data differently than relational tables It avoids joins and is easy to scale. The major purpose of using a NoSQL database is for distributed data stores with humongous data storage needs.</p>
                     </div>
                  </div>

                  <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md my-5">
                     <div className="collapse-title text-xl font-medium bg-indigo-50">
                        <p>What is express & express js?</p>
                     </div>

                     <div className="collapse-content">
                        <p className="mb-5">Express.js is a lightweight web application framework for Node.js, used for building APIs and web applications.
                           Next.js is a React framework that provides server-side rendering, static site generation, and other advanced features for building React-based web applications.</p>
                     </div>
                  </div>

                  <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md">
                     <div className="collapse-title text-xl font-medium bg-indigo-50">
                        <p>What is MongoDB aggregate and how does it work?</p>
                     </div>

                     <div className="collapse-content">
                        <p className="mb-5">MongoDB aggregate is a feature for performing advanced data aggregation and processing. It uses a pipeline of stages to manipulate and aggregate data, including grouping, filtering, sorting, and computing results. It allows for flexible and powerful data transformations within the database.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Blog;