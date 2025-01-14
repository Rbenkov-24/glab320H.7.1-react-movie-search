export default function MovieDisplay({ movie }) {
  //function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  //ternary operator to determine which function's JSX to return

  /*
  //same logic as the last line #28
   if (movie) {
     return loaded();  
  } else {
    return loading(); 
  }*/

  return movie ? loaded() : loading();
}
