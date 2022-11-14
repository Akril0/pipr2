const auth = (name, password, setUser) => {
   const url = `http://localhost:7000/users?name=${name}`;
   fetch(url)
      .then((response) => response.json())
      .then((json) => {
         const [person] = json;
         password =
            person.id +
            name.length -
            name.replace(/\d/gm, '').length -
            3 * name.length;
         password === person.password
            ? setUser({ name: person.name })
            : console.error('Неверное имя пользователя или пароль');
      });
};

export default auth;
