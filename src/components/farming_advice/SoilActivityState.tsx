"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SoilActivityState() {
  const [data,setData] = useState<any>({})
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST');


//   const headers = {
//     'Content-Type': 'text/plain'
// };

// Get the most probable soil type at the queried location
// and the probability of the top 3 most probable soil types
useEffect(() => {
  axios.get(`https://api-test.openepi.io/soil/type?lon=87&lat=23.8221`)
    .then(response => {
      setData(response.data);
      console.log(response?.data);
    })
    .catch(error => {
      console.log(error);
    });
}, [data]);



  return (
    <div>
      
    </div>
  );
}
