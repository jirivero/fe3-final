import React from "react";
import { useGlobalContext } from "../Components/utils/global.context";
import DentistCard from "../Components/Card"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
 const {state} = useGlobalContext()
  return (
    <>
    
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs?.map(dentist =>(
          <DentistCard key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
            />
          ))}
      </div>
    </>
  );
};

export default Favs;
