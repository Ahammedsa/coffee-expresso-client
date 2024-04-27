import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
       e.preventDefault();
       const  form = e.target ;
        const name = form.name.value ;
        const qunatity = form.qunatity.value 
        const supplier = form.supplier.value ;
        const test = form.test.value ;
        const  category = form.category.value;
        const details = form.details.value ;
        const photo = form.photo.value ;
        const newCoffee = {name , qunatity , supplier , test, category , details , photo } ;
        console.log(newCoffee)
        // A-1.1 send server site 
        fetch('http://localhost:5000/coffee' , {
          method : "POST",
          headers : {
            'content-type'  :"application/json"
          },
          body : JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId ){
            Swal.fire({
              title: 'Success!',
              text: 'User added successfully ',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
          
        })
  }
    return (
        <div className="bg-[#F4F3F0] p-24 ">
            <h1 className="text-3xl font-extrablod">Add new Coffee</h1>
            <p className=" text-md text-center mt-5"> It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            {/* Form row*/}
            <form onSubmit={handleAddCoffee}>
                <div className="md:flex"> 
                    <div className="form-control md:w-1/2">
                          <label className="label ">
                            <span>Coffee Name</span>
                          </label>
                          <label className="input group">
                          <input className="mt-2" name="name" placeholder="Enter Coffee Name" />
                          </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                          <label className="label ">
                            <span>Quantity</span>
                          </label>
                          <label className="input group">
                          <input className="w-full mt-2" name="qunatity" placeholder="Enter code Quantity" />
                          </label>
                    </div>
                </div>
                <div className="md:flex"> 
                    <div className="form-control md:w-1/2">
                          <label className="label ">
                            <span>Supplier</span>
                          </label>
                          <label className="input group">
                          <input className="w-full " name="supplier" placeholder="Enter supplier code" />
                          </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                          <label className="label ">
                            <span>Test</span>
                          </label>
                          <label className="input group">
                          <input className="w-full" name="test" placeholder="Available Quantity" />
                          </label>
                    </div>
                </div>
                <div className="md:flex"> 
                    <div className="form-control md:w-1/2">
                          <label className="label ">
                            <span>Categoery</span>
                          </label>
                          <label className="">
                          <input className="input  w-full " name="category" placeholder="Categoery" />
                          </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                          <label className="label ">
                            <span>Details</span>
                          </label>
                          <label className="">
                          <input className="input w-full" name="details" placeholder="details" />
                          </label>
                    </div>
                </div>
                <div className=""> 
                    <div className="form-control ">
                          <label className="label ">
                            <span>Photo</span>
                          </label>
                          <label className="input group">
                          <input className="w-full mt-2" name="photo" placeholder="Enter photo url" />
                          </label>
                         <input type="submit" className="btn btn-warning w-full mt-5" value="Add coffee" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;