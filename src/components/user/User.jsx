import Information from '../../assets/user/question-mark.svg';

function User({ user }) {
   return (
      <div>
         {user ? (
            <div>Привет {user.name}</div>
         ) : (
            <div
               className="user"
               data-tooltip="Введите данные и нажмите 'Войти' для аутентификаци или 'Зарегестрироваться' для авторизации"
            >
               Вам следует войти <img className="inform" src={Information} />
            </div>
         )}
      </div>
   );
}

export default User;
