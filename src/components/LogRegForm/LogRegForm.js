import { Link, Outlet } from 'react-router-dom';
import './LogRegForm.css';

export function LogRegForm({formData}){
  return (
    <form className='log-reg-form'>
      <picture>
        <source srcSet={formData.logo} type="image/svg"/>
        <img className='log-reg-form__logo' src={formData.legacyLogo} alt="logo" />
      </picture>
      <h1 className='log-reg-form__title'>{formData.title}</h1>
      <Outlet />
      <button className='log-reg-form__button'>{formData.buttonText}</button>
      <p className='log-reg-form__redirect-line'>
        {formData.redirectLine}<Link className='log-reg-form__redirect-link' to={formData.redirectLink}>Войти</Link>
      </p>
    </form>
  )
}