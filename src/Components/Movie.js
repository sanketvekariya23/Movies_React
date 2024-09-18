import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
const Movie = () => {
  let { id } = useParams();
  // get all movies
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

  const movie = data?.find( (movie) => movie.id === parseInt(id) );

  return (
    <>
      <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h3>{movie ? movie.title : "Movie not found"}</h3>
      {movie && movie.movie ? (
        <iframe 
          width="100%" 
          height="100%" 
          src={movie.movie} 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          title={movie.title}
          style={{ flex: 1 }} // Make iframe take up remaining space
        ></iframe>
      ) : (
        <p>No video available.</p>
      )}
    </div>
    </>
  );
}

export default Movie;
