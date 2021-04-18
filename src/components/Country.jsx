import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([{}]);

  const { name } = useParams();
  const getCountry = async () => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    const data = await response.json();
    setCountry(data);
  };
  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div>
      <div className="country">
        {country?.map((c) => {
          const {
            numericCode,
            name,
            flag,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            borders,
            languages,
            currencies,
          } = c;

          return (
            <Fragment>
              {" "}
              <div className="img-container">
                <Link to="/" className="btn ">
                  <i className="fas fa-arrow-left"></i> Back
                </Link>
                <img src={flag} alt={name} />
              </div>
              <section className="country-data" key={numericCode}>
                <h2>{name}</h2>
                <div className="container">
                  {" "}
                  <div className="data-container">
                    <h4>
                      Native Name: <span>{nativeName}</span>
                    </h4>
                    <h4>
                      Population: <span>{population}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Sub Region: <span>{subregion}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                  <div className="currencies">
                    <h4>
                      Top Level Domain: <span>{topLevelDomain}</span>
                    </h4>
                    <h4>
                      Languages:{" "}
                      <span>{languages ? languages[0].name : null}</span>
                    </h4>
                    <h4>
                      Currencies:{" "}
                      <span>{currencies ? currencies[0].name : null}</span>
                    </h4>
                  </div>
                </div>

                <div className="border-countries">
                  <h3>Border Countries: </h3>
                  <div className="border-countries__btn">
                    {borders?.map((b) => {
                      return (
                        <ul className="border-countries__ul" key={b}>
                          <li className="border-countries__li">{b}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </section>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Country;
