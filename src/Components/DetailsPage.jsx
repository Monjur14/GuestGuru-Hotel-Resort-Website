import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    document.title = 'Details Page';
    return () => {
      document.title = 'Title';
    };
  }, []);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      })
  }, []);

  const singleData = item.find((entry) => entry.id === id);

  return (
    <div className="contain px-2 md:px-3 lg:px-0">
      {singleData && (
        <div>
          <img
          src={`${singleData.image}`}
          alt=""
          className="rounded-lg h-96 w-full object-cover"
        />
        <h1 className="text-4xl font-bold my-2">{singleData.estate_title}</h1>
        <h3 className="text-lg text-gray-500">{singleData.description}</h3>
        <p className="text-lg mt-3 font-semibold">Status: <span>{singleData.status}</span></p>
        <p className="text-lg font-semibold">Area: <span>{singleData.area}</span></p>
        <p className="text-lg font-semibold">Price: <span>{singleData.price}</span></p> 
        <p className="text-lg font-semibold">Location: <span>{singleData.location}</span></p>
        <p className="text-lg mb-2 font-semibold">Facilities: {singleData.facilities[0]}, {singleData.facilities[1]}, {singleData.facilities[2]}, {singleData.facilities[3]}</p>
        <Link to={"/"}><button className="bg-blue-600 text-white text-xl px-6 py-1 rounded-lg font-semibold mt-3 mb-14">Back to Home</button></Link>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
