import FullName from './Component/Profil/FullName';
import Adress from './Component/Profil/Adress';
import ProfilePhoto from './Component/Profil/ProfilePhoto';
import AppStyle from './App.css';

function App() {
  return (
    <div style={{ background:"lightblue",  width: "600px", height: "500px", margin: "auto"}}>
    <header></header>
    <section >
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </section>
    <footer></footer>
   </div>
  );
}

export default App;
