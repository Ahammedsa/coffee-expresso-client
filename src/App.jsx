
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CardCoffee from './Components/CardCoffee';
import { useState } from 'react';



function App() {
  // C-3 data load
   const loadedCoffees = useLoaderData() ;
    const [coffees , setCoffees] = useState(loadedCoffees)
  return (
    <>
       <h1>Coffee Expresso{coffees.length}</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    {
        coffees.map(coffee => 
             <CardCoffee
             key={coffee._id}
             coffee={coffee}
             coffees={coffees} 
             setCoffees={setCoffees}
             ></CardCoffee>
        ) 
       }
    </div>
       
    </>
  )
}

export default App
