import React, { useState, useEffect } from "react";

export const ApiTest = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setstate(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
      {state.map((item) => (
        <div className="col">
          <div className="card h-100">
            <img
              src={item.url}
              alt="Headshot of Laura Jones"
              className="card-img-top"
            />

            <div className="card-body">
              <h5 className="card-title">{item.id}</h5>
              <p className="card-text"> {item.title} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
