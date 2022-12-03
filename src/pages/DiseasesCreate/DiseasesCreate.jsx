import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postDiseases } from "../../redux/diseases/diseases.functions";

const DiseasesCreate = () => {
  const { register, handleSubmit } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const createDiseases = async (data) => {
    // console.log(data.img[0]);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("img", data.img[0]);
    formData.append("symptoms", data.symptoms);
    formData.append("treatment", data.treatment);
    formData.append("mortality", data.mortality);

    dispatch(postDiseases(formData, navigate));
    console.log("Info del posts", formData);
  };

  return (
    <div>
      <h2>Nueva Enfermedad</h2>
      <form onSubmit={handleSubmit(createDiseases)}>
        <label>
          Nombre
          <input type="text" name="name" {...register("name")}></input>
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            {...register("description")}
          ></input>
        </label>
        <label>
          Imagen
          <input type="file" name="img" {...register("img")}></input>
        </label>
        <label>
          Sintomas
          <input type="text" name="symptoms" {...register("symptoms")}></input>
        </label>
        <label>
          Tratamientos
          <input
            type="text"
            name="treatment"
            {...register("treatment")}
          ></input>
        </label>
        <label>
          Mortalidad
          <input
            type="text"
            name="mortality"
            {...register("mortality")}
          ></input>
        </label>

        <button>Añadir</button>
      </form>
    </div>
  );
};

export default DiseasesCreate;
