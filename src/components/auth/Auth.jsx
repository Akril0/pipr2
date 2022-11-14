import { useState } from 'react';

function Auth({ auth, inden, setUser }) {
   const [data, setData] = useState({ userName: '', password: '' });

   function handlInputChange(text, name) {
      setData({ ...data, [name]: text.target.value });
   }

   return (
      <div>
         <form>
            <label>
               Логин
               <input
                  type="text"
                  value={data.userName}
                  onChange={(text) => handlInputChange(text, 'userName')}
               />
            </label>
            <label>
               Пароль
               <input
                  type="password"
                  value={data.password}
                  onChange={(text) => handlInputChange(text, 'password')}
               />
            </label>
            <button
               type="button"
               onClick={() => {
                  data.userName.length > 5
                     ? auth(data.userName, data.password, setUser)
                     : console.log('Слишком короткое имя');
               }}
            >
               Войти
            </button>
            <button
               type="button"
               onClick={() => {
                  data.userName.length > 5
                     ? inden(data.userName, data.password, setUser)
                     : console.log('Слишком короткое имя');
               }}
            >
               Зарегистрироваться
            </button>
         </form>
      </div>
   );
}

export default Auth;
