import React, { useState } from 'react';

function CounterDisplay ({ count }) {
   return <h2> {count}</h2>;
 };
 


 


 
 
 function Counter  ({ valoreIniziale, decremento })  {
   const [contatore, setContatore] = useState(valoreIniziale);
 
   const decrementaContatore = () => {
     setContatore(prevCount => prevCount - decremento);
   };
 
   const resettaContatore = () => {
     setContatore(valoreIniziale);
   };
 
   return (
     <div>
      
       <CounterDisplay count={contatore} />
 
      
       <button onClick={decrementaContatore}>Decrementa</button>
 
       <button onClick={resettaContatore}>Resetta</button>
     </div>
   );
 };
 
 export default CounterDisplay







