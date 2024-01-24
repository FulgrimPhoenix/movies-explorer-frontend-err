import './SearchForm.css'

export function SearchForm({ formUtils }) {
  return (
    <form className="search__form">
      <input className="serch__input" />
      <button /*onSubmit={formUtils.onSubmit}*/>Найти</button>
      <div className='check-container'>
        <input type="checkbox" className='serch__shortfilm-checkbox' name='shortfilm' id='shortfilm' value='no' />
        <label for='shortfilm' className='serch__shortfilm-checkbox-picture'></label>

      </div>
      <p>Короткометражки</p>
    </form>
  )
}