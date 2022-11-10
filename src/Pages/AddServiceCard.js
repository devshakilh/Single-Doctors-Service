import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AddServiceRow from './AddServiceRow';


const AddServiceCard = () => {
    const { user } = useContext(AuthContext);
    const [add, setAdd] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-11-server-blush.vercel.app/add?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setAdd(data))
        }
    }, [user?.email])





    return (
        <div className='grid gap-5  my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                add.map(add => <AddServiceRow
                    key={add._id}
                    add={add}


                ></AddServiceRow>)
            }

        </div>
    );
};

export default AddServiceCard;