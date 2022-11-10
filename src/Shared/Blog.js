import React from 'react';

const Blog = () => {
    return (
        <div className='py-10 bg-white text-black'>
            <div>
                <h1 className=' text-4xl font-semibold'>Difference between SQL and NoSQL?</h1>
                <h4 className='px-20 text-xl'>Ans: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</h4>
            </div>
            <div>
                <h1 className=' text-4xl font-semibold'>What is JWT, and how does it work?</h1>
                <h5 className='px-20 text-xl'>Ans: What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</h5>
            </div>
            <div>
                <h1 className=' text-4xl font-semibold'>What is the difference between javascript and NodeJS?</h1>
                <h5 className='px-20 text-xl'>Ans: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</h5>
            </div>

        </div>
    );
};

export default Blog;