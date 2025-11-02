import { type Movie, type SortOption } from "../types/movie.types";

export const sortMovies = (movies: Movie[], sortBy: SortOption): Movie[] => {
  const sorted = [...movies];

  // TODO: 정렬 기준 (3가지)에 따라서 다른 값을 return하는 정렬 로직 구현
  switch (sortBy) {
    case "popularity":
      return sorted.sort((a, b) => b.popularity - a.popularity);

    case "rating":
      return sorted.sort((a, b) => b.vote_average - a.vote_average);

    case "release_date":
      return sorted.sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
      );

    default:
      return sorted;
  }
};
