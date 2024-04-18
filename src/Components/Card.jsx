import { Link } from "react-router-dom"
import UseAuth from "../CustomHook/UseAuth"

const Card = ({img, title, id, description, status, area, price, facility}) => {
  const {user} = UseAuth()
  return (
    <div className="p-3 border border-gray-300 rounded-lg">
        <img src={`${img}`} alt="" className="rounded-lg h-56 w-full object-cover"/>
        <h1 className="text-2xl font-bold mt-2">{title}</h1>
        {/* <p className="text-sm text-gray-600 min-h-16 lg:min-h-20">{description}</p> */}
        <p className="mt-3 font-semibold">Status: <span>{status}</span></p>
        {/* <p className="font-semibold">Area: <span>{area}</span></p> */}
        <p className="font-semibold">Price: <span>{price}</span></p>
        {/* <p className="font-semibold">Location: <span>Tropical Paradise Island</span></p> */}
        {/* <p className="font-semibold">Facilities: {facility[0]}, {facility[1]}, {facility[2]}, {facility[3]}</p> */}
        <Link to={user ? `/details/${id}` : "/login"}><button className="bg-blue-600 text-white text-xl px-6 py-1 rounded-lg font-semibold mt-4">View Details</button></Link>
    </div>
  )
}

export default Card
