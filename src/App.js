import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SkillTestCotainer from './components/SkillTestContainer/SkillTestCotainer';
import TestDetails from './components/SkillTestContainer/TestDetails/TestDetails';
function App() {
  return (
    <div className="App" >
      <Header />
      <Sidebar />
      <SkillTestCotainer/>
    </div>
  );
}

export default App;
