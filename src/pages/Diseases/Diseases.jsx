import React, { useEffect } from "react";
import "./Diseases.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDiseases,
  getDiseases,
} from "../../redux/diseases/diseases.functions";
import { Link, useNavigate, useParams } from "react-router-dom";

const Diseases = () => {
  const { id } = useParams();

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { diseases, isLoading, error } = useSelector((state) => state.diseases);

  const deleteSpecialist = (id) => {
    dispatch(deleteDiseases(id, navigate));
  };

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
            <div key={disease._id}>
              <div>
                <h1>{disease.name}</h1>
                <p>{disease.description}</p>
                <img src={disease.img} alt={disease.name}></img>
                <p>{disease.symptoms}</p>
                <p>{disease.treatment}</p>
                <p>{disease.mortality}</p>
              </div>

              <button onClick={() => deleteSpecialist(disease._id)}>
                Eliminar
              </button>
              {/* <button onClick={() => putSpecialist(specialist._id)}>
                Edita
              </button> */}
              <Link to={`diseasesPut/edit/${disease._id}`} key={disease._id}>
                Edita
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
