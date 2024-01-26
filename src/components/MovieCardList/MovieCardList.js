import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieCardList.css";

export function MovieCardList({ cardList, cardCellData, onMoreClick }) {
  return (
    <section className="movie-card-list">
      <ul className="movie-card-list__grid">
        {cardList.map((card) => {
          return <MovieCard cardData={card} cellData={cardCellData} />;
        })}
      </ul>
      <button className="movie-card-list__button-more" onClick={onMoreClick}>Ещё</button>
    </section>
  );
}
