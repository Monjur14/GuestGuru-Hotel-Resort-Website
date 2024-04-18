import { useEffect, useState } from "react"
import Slider from "../Components/Slider"
import Card from "../Components/Card"
import UseAuth from "../CustomHook/UseAuth";

const Home = () => {
    useEffect(() => {
        document.title = 'Home Page';
        return () => {
          document.title = 'Title';
        };
      }, []);

    const [data, setData] = useState([])

    fetch("Data.json")
    .then((res) => res.json())
    .then((data) => {
        setData(data)
    })

    const {user} = UseAuth()
  return ( 
    <div className="contain">
        <Slider/>
        <div>
            <div className="text-center mt-16">
                <h1 className="text-4xl font-bold">Discover Our Exclusive Estates</h1>
                <p className="max-w-[500px] mx-auto mt-3 text-sm text-gray-500">Celebrate Luxury Living: Explore Our Exquisite Collection of Estates Available for Sale and Rent in Desirable Locations Across the Globe.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                {
                    data.map((item) => (
                        <Card key={item.id} img={item.image} title={item.estate_title} id={item.id} description={item.description} status={item.status} area={item.area} price={item.price} facility={item.facilities}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Home
