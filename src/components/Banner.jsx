import axios from "axios";
import { useEffect, useState } from "react";
import URI from "../../config";

export default function Banner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${URI}/solution/getSolution`);
        if (response.status !== 200) {
          throw new Error('Failed to fetch data');
        }
        console.log(response.data.data);

        setData(response.data.data); // Adjust according to your API structure
      } catch (error) {
        console.error('Fetch Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <div
          id={`solution-${index}`} // Add unique ID for each solution
          key={index}
          className={`mt-[40px] ${
            index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F7FCFF]'
          } grid grid-cols-1 md:grid-cols-2 py-4`}
        >
          {/* Content */}
          <div
            className={`ml-5 ${
              index % 2 === 0 ? 'order-1 lg:ml-40' : 'order-2 lg:ml-20'
            } font-roboto my-auto`}
          >
            <h1 className="font-bold text-2xl md:text-3xl">{item.title}</h1>
            <p className="text-xs mt-4 mr-4 lg:mr-28">{item.longDescription}</p>
          </div>
          {/* Image */}
          <div
            className={`mx-auto ${
              index % 2 === 0 ? 'order-2' : 'order-1'
            } my-auto`}
          >
            <img
              className="max-w-[300px] md:w-[450px]"
              src={`${URI}/uploads/${item.longImage}`}
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </>
  );
}
