import { Movie } from "./movie";

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {id: 1, title: "film 1", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, deleniti eum odio illo pariatur doloremque esse veniam libero inventore non natus id voluptatum consectetur magni quos? Totam corrupti placeat iste", imageUrl: "1.jpg", isPopular: false, datePublished: new Date(1990,10,10)},
      {id: 2, title: "film 2", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, deleniti eum odio illo pariatur doloremque esse veniam libero inventore non natus id voluptatum consectetur magni quos? Totam corrupti placeat iste.", imageUrl: "2.jpg", isPopular: true, datePublished: new Date(1990,10,10)},
      {id: 3, title: "film 3", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, deleniti eum odio illo pariatur doloremque esse veniam libero inventore non natus id voluptatum consectetur magni quos? Totam corrupti placeat iste", imageUrl: "3.jpg", isPopular: false, datePublished: new Date(1990,10,10)},
      {id: 4, title: "film 4", description: "film 4 açıklama", imageUrl: "4.jpg", isPopular: true, datePublished: new Date(1990,10,10)},
      {id: 4, title: "film 5", description: "film 5 açıklama", imageUrl: "5.jpg", isPopular: true, datePublished: new Date(1990,10,10)},
    ]
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter(i=>i.isPopular);
  }

  getMovieById(id: number): Movie {
    return this.movies.find(i=>i.id==id);
  }
}
