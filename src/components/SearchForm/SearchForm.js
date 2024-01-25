import "./SearchForm.css";

export function SearchForm({ formSearchUtils }) {
  return (
    <form className="search__form">
      <img
        className="search__icon"
        src={formSearchUtils.search_icon}
        alt={formSearchUtils.alt_search_icon}
      />
      <input className="search__input" placeholder="Фильмы" />
      <button className="search__button" /*onSubmit={formUtils.onSubmit}*/><p className="search__button-text">{formSearchUtils.button_text}</p></button>
      <div className="serch__container">
        <input
          type="checkbox"
          className="serch__checkbox"
          name="shortfilm"
          id="shortfilm"
          value="no"
        />
        <label for="shortfilm" className="serch__checkbox-picture"></label>
      </div>
      <p className="search__checkbox-title">{formSearchUtils.checkbox_title}</p>
    </form>
  );
}
