import React from "react";
import "../index.css";

const Filters = () => {
  const handleChange = (e) => {
    e.preventDefault();

    const { value } = e.target;
    const countryName = document.querySelectorAll(".country-name");
    countryName.forEach((name) => {
      //lo que pasa acá es que si un card contiene el nombre que nosotros ingresamos en el input, entonces va a mostrarse con "BLOCK", si no lo incluye, se hace desaparecer el elemento con  display "NONE"
      if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
        name.parentElement.parentElement.style.display = "block";
      } else {
        name.parentElement.parentElement.style.display = "none";
      }
    });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const region = document.querySelectorAll(".country-region");

    region.forEach((r) => {
      //Acá hacemos basicamente lo mismo. Unicamente tenemos que escalar un poco mas en el DOM para acceder al card y hacerlo desaparecer con el display "none";
      if (r.innerText.toLowerCase().includes(value.toLowerCase())) {
        r.parentElement.parentElement.parentElement.style.display = "block";
      } else {
        r.parentElement.parentElement.parentElement.style.display = "none";
      }
    });
  };

  return (
    <div>
      <div className="search-bar">
        <input
          onChange={handleChange}
          type="search"
          id="search"
          placeholder="Search for a country..."
        />
        <select onChange={handleFilter} name="select" id="select">
          <option defaultValue="Filter by Region" disabled>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
