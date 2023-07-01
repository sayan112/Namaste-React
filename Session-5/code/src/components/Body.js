import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
   const fetchData = async () => {
     const url =
       "https://www.swiggy.com/mapi/homepage/getCards?lat=22.4954988&lng=88.3709008";

     try {
       const response = await fetch(url);
       const datasiggy = await response.json();
       console.log(
         datasiggy?.data?.success?.cards[5]?.gridWidget?.gridElements
           ?.infoWithStyle?.restaurants
       );
       setRestaurants(
         datasiggy?.data?.success?.cards[5]?.gridWidget?.gridElements
           ?.infoWithStyle?.restaurants
       );
       setfilteredrestaurants(
         datasiggy?.data?.success?.cards[5]?.gridWidget?.gridElements
           ?.infoWithStyle?.restaurants
         //The ?. syntax is known as the Optional Chaining operator. It is a feature introduced in JavaScript (and supported in modern versions) that allows you to safely access nested properties of an object without causing an error if any intermediate property is null or undefined.
       );
       // Process the retrieved data here
     } catch (error) {
       console.log("Error:", error);
     }
   };
 
  useEffect(() => {fetchData()},[]);

function filteredfuncation(searchText) {
  const data = restaurants?.filter((restaurant) => {
    const name = restaurant?.info?.name.toLowerCase().replace(/\s/g, "");
    const search = searchText.toLowerCase().replace(/\s/g, "");
    return name.includes(search);
  });
  return data;
}

// remember useeffect is called after the first render

  console.log("render"); // when u are typing something component rerender every fucking time

  return (
    <>
      <div className="search-container" style={{ textAlign: "center" }}>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="search-btn"
            onClick={() => {
              const data = filteredfuncation(searchText);
             
              setfilteredrestaurants(data);
            }}
          >
            Search
          </button>
        </form>
      </div>

      <div className="restaurant-list">
        {filteredrestaurants?.map((restaurant) => {
          return <RestrauntCard {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
