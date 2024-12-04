import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { MovieList } from "@/components/MovieList";

import movies from "@/data/movies";

function UnirCinema() {
  return (
    <>
      <Header />
      <MovieList title="Películas de Marvel" movies={movies} />
      <Footer />
    </>
  );
}

export default UnirCinema;
