import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    fetch("https://raw.githubusercontent.com/hafizmahdi2010/CodeWithMahdi-APIs/main/data.json")
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container  mt-3">
      <div className="card shadow">
        <div className="card-header text-center">
          <h4 className="font-weight-bold">Hey, It's Movies Time</h4>
        </div>
        <div className="card-body">
          <div className="row">
            {Array.isArray(data) ? (
              data.map((item, index) => (

                // on click on image navigate image desciption movie tab...

                <div onClick={()=>{navigate(`/movie/${item.id}`)}} key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card">
                    <img className="card-img-top" style={{cursor:'pointer'}} src={item.image} alt="Movie Poster" />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Data not found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
