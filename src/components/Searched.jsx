import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";
import ErrorMsg from "./ErrorMsg";
import CarCard from "./CarCard";
import Pagination from "./Pagination";

const Searched = () => {
  const [searchedCar, setSearchedCar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id, pageNumber } = useParams();
  const carsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    const fetchSearchedCar = async () => {
      try {
        setLoading(false);
        const { data } = await axios.get(
          `https://myfakeapi.com/api/cars/name/${id}`
        );
        setSearchedCar(data.Cars);
        setError("");
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchSearchedCar();
  }, [id, pageNumber]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMsg msg={error} />;
  }
  const currentPage = parseInt(pageNumber) || 1;
  const lastPageIndex = currentPage * carsPerPage;
  const firstPageIndex = lastPageIndex - carsPerPage;
  const CurrentCars = searchedCar.slice(firstPageIndex, lastPageIndex);
  return (
    <div>
      <div className="flex justify-around  items-center flex-wrap gap-5 my-10">
        {CurrentCars.map((car, index) => (
          <CarCard cars={car} key={index} />
        ))}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(searchedCar.length / carsPerPage)}
          baseUrl={`/searched/${id}`}
        />
      </div>
    </div>
  );
};

export default Searched;
