import React, { useState } from 'react';



function App() {
  setInterval(updateTime, 1000);
  

 const hour=new Date().toLocaleTimeString();

 const [time, setTime] = useState(hour)

 function updateTime() {
 const newTime = new Date().toLocaleTimeString()

  setTime(newTime);
}
  return( <div>
<h1>{time}</h1>
{/* {<button onClick={updateTime}>TIME<span>APP</span></button>} */}

  </div>
  );
};



 
export default App;
