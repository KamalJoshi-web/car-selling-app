import axios from "axios";
import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import { Link, useParams } from "react-router-dom";
import Pagination from "./Pagination";

const Cars = () => {
  const [cars, setCars] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { pageNumber } = useParams();
  const carsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    const fetchCarsData = async () => {
      try {
        const { data } = await axios.get("https://myfakeapi.com/api/cars");
        setCars(data.cars);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchCarsData();
  }, [pageNumber]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMsg msg={error} />;
  }
  const currentPage = parseInt(pageNumber) || 1;
  const lastPageIndex = currentPage * carsPerPage;
  const firstPageIndex = lastPageIndex - carsPerPage;
  const CurrentCars = cars.slice(firstPageIndex, lastPageIndex);
  return (
    <div>
      <div className=" flex justify-around  items-center flex-wrap gap-5 my-10">
        {CurrentCars.map((car, index) => (
          <CarCard cars={car} key={index} />
        ))}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(cars.length / carsPerPage)}
          baseUrl="/cars"
        />
      </div>
    </div>
  );
};

export default Cars;
