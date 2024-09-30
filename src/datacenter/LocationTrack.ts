import { getData } from "@/datacenter/esp32";

let latitude:any; 
let longitude:any;




async function fetchData() {
    try {
          const data = await getData();
          latitude = data?.Latitude;
          longitude = data?.Longitude;


        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
fetchData();





export {longitude, latitude}


