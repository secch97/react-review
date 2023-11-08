import React from "react";

const BasicTypes = () => {
  const name:string = "Saul";
  const edad:number = 35
  const isActive:boolean = true;
  const powers: string[] = ["Speed", "Fly", "Water breath"];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {edad} - {isActive ? "Activo":"Inactivo"}
      <br></br>
      {powers.join(", ")}
    </>
  );
};

export default BasicTypes;
