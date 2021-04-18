import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([{}]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <div className="grid">
        {countries?.map((country) => {
          const {
            flag,
            name,
            population,
            region,
            capital,
            numericCode,
          } = country;
          return (
            <div className="card" id="card" key={numericCode}>
              <div className="card-img__container">
                <Link to={`/countries/${name}`}>
                  <img src={flag} alt={name} />
                </Link>
              </div>

              <div className="card-data__container">
                <h3 className="country-name">{name}</h3>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span className="country-region">{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Countries;
