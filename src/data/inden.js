const inden = (name, password) => {
   const url = `http://localhost:7000/users?name=${name}`;
   fetch(url)
      .then((response) => response.json())
      .then((json) => {
         json.length === 0
            ? fetch(`http://localhost:7000/users?_page=1`)
                 .then((res) => res.json())
                 .then((json) => {
                    password =
                       json.length +
                       1 +
                       name.length -
                       name.replace(/\d/gm, '').length -
                       3 * name.length;
                    const userInden = { name, password };
                    fetch(`http://localhost:7000/users`, {
                       method: 'POST',
                       headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                       },
                       body: JSON.stringify(userInden),
                    })
                       .then((resp) => resp.json)
                       .then((json) => console.log(json));
                 })
            : console.error('Пользователь уже существует');
      });
};

export default inden;
