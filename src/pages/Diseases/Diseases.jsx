import React, { useEffect } from "react";
import "./Diseases.scss";
import { useDispatch, useSelector } from "react-redux";
import { getDiseases } from "../../redux/diseases/diseases.functions";
import { Link } from "react-router-dom";

const Diseases = () => {
  const dispatch = useDispatch();
  const { diseases, isLoading, error } = useSelector((state) => state.diseases);

  useEffect(() => {
    dispatch(getDiseases());
  }, []);

  return (
    <div>
      {isLoading ? (
        <img
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt="loading"
        />
      ) : !error ? (
        diseases.map((disease) => {
          return (
            <div>
              {" "}
              <div key={disease._id}>
                <h1>{disease.name}</h1>
              </div>
              <Link to={`/diseasesCreate`} key={disease._id}>
                +
              </Link>
              <Link
                to={`/specialistsPut/edit/${disease._id}`}
                key={disease._id}
              >
                Edita
              </Link>
              <Link
                to={`/specialistsPut/edit/${disease._id}`}
                key={disease._id}
              >
                Elimina
              </Link>
            </div>
          );
        })
      ) : (
        <div>
          <h3>{error}</h3>
        </div>
      )}
    </div>
  );
};

export default Diseases;
