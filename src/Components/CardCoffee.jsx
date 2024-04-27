import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CardCoffee = ({ coffee ,coffees , setCoffees  }) => {
  const {  _id,name, quantity, supplier, test, categoery, details, photo } = coffee;
  console.log(coffee)
  const handleDleete = (_id)=> {
    console.log( "Id delte", _id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}` , {
           method : "DELETE" ,
        })
        .then(res => res.json())
        .then(data => {
          console.log(data) ;
          if(data.deletedCount > 0){
               Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
         const reamining = coffees.filter(cof => cof._id !== _id) ;
                setCoffees(reamining)
          }
        })
      }
    });
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl my-10">
        <figure><img className="h-64 w-44 cover" src={photo} alt="Movie" /></figure>
        <div className="flex justify-between w-full items-center m-10">
          <div className="ml-10"> 
          <h2 className="card-title">Name <span>{name}</span></h2>
          <p>Qunatity {quantity}</p>
          <p>Supplier {supplier}</p>
          <p>Taste{test}</p>
          </div>
          <div className="join join-vertical space-y-4 ml-10">
            <button className="btn join-item">View</button>
          <Link to={`updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
            <button 
            onClick={()=>handleDleete(_id)}
            className="btn join-item  text-white bg-orange-500">X</button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default CardCoffee;