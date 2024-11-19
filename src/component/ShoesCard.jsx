import React from 'react';
import { Link } from 'react-router-dom';

const ShoesCard = ({shoe,shoes,setShoes}) => {
    const {_id,name,brand,type,price,description,rating,photo}=shoe;

    const handletoDelete=_id=>{
      console.log(_id)

      fetch(`http://localhost:2000/brand/${_id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
          const remaining=shoes.filter(sho=>sho._id !== _id);
          setShoes(remaining)
        }

      })
    }
    return (
        <div>
            <div>
            <div className="card bg-base-100 w-9/12 shadow-xl">
  <figure>
    <img className='w-full'
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body text-start p-1">
  <p className='text-red-800 font-semibold'> {type}</p>
  <p className='font-semibold'>Brand: {brand}</p>
  <p className='font-semibold'>${price}</p>


    <p>{description}</p>

    <div className=" flex justify-between">
      <button className="btn btn-outline">Edit</button>
      <button className="btn btn-outline" onClick={()=>handletoDelete(_id)}>Delete</button>
      <Link to={`updateShoes/${_id}`}>
      <button className="btn btn-outline">Update</button>
      </Link>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default ShoesCard;