import './App.css';
import Auth from './components/auth/Auth';
import User from './components/user/User';
import { useState } from 'react';
import auth from './data/auth';
import inden from './data/inden';

function App() {
   const [user, setUser] = useState(null);

   return (
      <div className="App">
         <User user={user} />
         <Auth auth={auth} inden={inden} setUser={setUser} />
      </div>
   );
}

export default App;
