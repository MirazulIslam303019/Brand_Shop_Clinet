import { useLoaderData } from "react-router-dom";


const UpdateShoes = () => {
    const loderShoe=useLoaderData();
    const {_id,name,brand,type,price,description,rating,photo}=loderShoe;

    const handletoUpdateShoes=event=>{
        event.preventDefault();
        const form=event.target;

        const name=form.name.value;
        const brand=form.brand.value;
        const type=form.type.value;
        const price=form.price.value;
        const description=form.description.value;
        const rating=form.rating.value;
        const photo=form.photo.value;

        const updateProduct={name,brand,type,price,description,rating,photo};
        console.log(updateProduct)

        fetch(`http://localhost:2000/brand/${_id}`,{
            method:'PUT',
            headers:{
               'content-type': 'application/json'
            },
            body:JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
         <div className='border-2 border-yellow-500 mt-10'>
            <h1 className="text-3xl font-bold text-yellow-500">Update Nike Shoes</h1>
             <form className=" p-10" onSubmit={handletoUpdateShoes}>
                {/* name*/}
        <div className='md:flex gap-5 '>
        <div className="form-control w-1/2">
          <label className="label">
           
          </label>
          <input type="text" placeholder="Name" name="name" defaultValue={name} className="input " required />
        <hr />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
           
          </label>
          <input type="text" placeholder="Brand Name" name="brand" defaultValue={brand} className="input " required />
          <hr />

        </div>
        </div>
                {/* color*/}
        <div className='md:flex gap-5 '>
        <div className="form-control w-1/2">
          <label className="label">
            
          </label>
          <input type="text" placeholder="type" name="type" defaultValue={type} className="input"  required/>
          <hr />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
           
          </label>
          <input type="text" placeholder="price" name="price" defaultValue={price} className="input " required />
          <hr />
        </div>
        </div>
                {/* color*/}
        <div className='md:flex gap-5 '>
        <div className="form-control w-1/2">
          <label className="label">
            
          </label>
          <input type="text" placeholder="Short description" defaultValue={description} name="description" className="input"  required/>
          <hr />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
           
          </label>
          <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input " required/>
          <hr />
        </div>
        </div>
                {/* photo*/}
        <div className='md:flex gap-5 '>
        <div className="form-control w-full">
          <label className="label">
            
          </label>
          <input type="text" placeholder="Photo" name="photo" defaultValue={photo} className="input " required />
          <hr />
        </div>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Upadte product" className='btn btn-warning'/>
        </div>
      </form>
        </div>
    );
};

export default UpdateShoes;