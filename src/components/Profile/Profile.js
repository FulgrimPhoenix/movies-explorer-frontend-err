import { useForm } from "../../hooks/useForm";
import "./Profile.css";

export function Profile({ profileData, isLoggedIn }) {
  const {values, onChange, setValue} = useForm([])

  return (
    <main className="profile">
      <h1 className="profile__title">{profileData.title}</h1>
      <form className="profile__form">
        <div className="profile__input-cell">
          <h2 className="profile__input-title">{currentInput.title}</h2>
          {isLoggedIn ? (
            <input name="name" value={values["name"||""]} onChange={onChange}/>
          ) : (
            <p className="profile__input-value">{currentUser.name}</p>
          )}
        </div>
        ;
      </form>
    </main>
  );
}
