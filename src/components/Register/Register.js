import { Outlet } from 'react-router-dom';
import './Register.css';

export function Register(){
  return(
    <main className='register'>
      <Outlet />
    </main>
  )
}