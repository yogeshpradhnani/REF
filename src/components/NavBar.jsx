import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "./Form";
import About from "./About";


function NavBar() {
  const [data, setData] = useState(null);
  const [solution, setSolution] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user/getWebData"
 
      );
        setData(response.data.Data.logo);
      } catch (err) {
        console.error("Error fetching data:", err.message || err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchSolution = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getSolution");
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        setSolution(response.data.data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchSolution();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDemoPopup = () => {
    setIsDemoOpen(!isDemoOpen);
  };

  const toggleSolutionDropdown = () => {
    setIsSolutionOpen(!isSolutionOpen);
  };

  return (
    <nav className="w-full fixed shadow-md bg-white top-0 z-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img className="w-[124px]" src={`http://localhost:3001/${data}`} alt="Logo" />
          </div>
          <div className="hidden md:flex md:space-x-8 lg:space-x-12 text-lg font-semibold">
            <button className="hover:text-gray-900">Features</button>
            <button className="hover:text-gray-900">Pricing</button>
            <div className="relative">
              <button
                onClick={toggleSolutionDropdown}
                aria-expanded={isSolutionOpen}
                className="hover:text-gray-900 mt-2"
              >
                Solution
              </button>
              {isSolutionOpen && (
                <div className="absolute left-0 bg-white shadow-lg mt-2 w-48 rounded-md z-10">
                  <ul>
                    {solution.map((item, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-200 cursor-pointer "
                        onClick={() => {
                          document.getElementById(`solution-${index}`).scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                        }}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
         <button> <a  href={<About />}>About&nbsp;Us</a></button>
            {/* <Link to="/about" className="hover:text-gray-900">
              About Us
            </Link> */}
 
            <button
          
              onClick={toggleDemoPopup}
              className=" bg-[#FD89558C] border-1 border-[#FD8955]  text-black rounded-md px-2 py-1 hover:bg-orange-600"
            >
              Get a Demo
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-white md:hidden">
          <ul className="space-y-4 py-4 text-center">
            <li>
              <button className="block hover:text-gray-900 mx-auto">Features</button>
            </li>
            <li>
              <button className="block hover:text-gray-900 mx-auto">Pricing</button>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={toggleSolutionDropdown}
                  aria-expanded={isSolutionOpen}
                  className="block hover:text-gray-900 mx-auto"
                >
                  Solution
                </button>
                {isSolutionOpen && (
                  <ul className="mt-2 bg-white shadow-lg w-full rounded-md">
                    {solution.map((item, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          document.getElementById(`solution-${index}`).scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                        }}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link to="/about" className="block hover:text-gray-900">
                About Us
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDemoPopup}
                className="w-3/4 mx-auto bg-orange-500 text-white rounded-md px-4 py-2 hover:bg-orange-600"
              >
                Get a Demo
              </button>
            </li>
          </ul>
        </div>
      )}

      {isDemoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Form onClose={toggleDemoPopup} />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
