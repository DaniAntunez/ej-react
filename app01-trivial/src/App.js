import './App.css';
import HelloWorld from './components/HelloWorld';
import Boton from './components/Boton';
import Sibling from './components/Sibling';
import InputBtn from './components/InputBtn';
import Card from './components/Card';
import List from './components/List';
import Todo from './components/Todo';
import BtnClick from './components/BtnClick';
import Counter from './components/Counter';
import TodoAdd from './components/TodoAdd';
import SimpleForm from './components/SimpleForm';
import TodoAddPro from './components/TodoAddPro';
import CounterEffect from './components/CounterEffect';
import FetchAnimeGallery from './components/FetchAnimeGallery';
import AnimePadre from './components/AnimePadre';
import DigitalClock from './components/DigitalClock';
import Countdown from './components/CountDown';
import CountdownToEnd from './components/CountDownToEnd';
import StopWatch from './components/StopWatch';
import Trivial from './components/Trivial';
// import TrivialPrueba from './components/TrivialPrueba';

function App() {

  const anime = {
    title: "El mejor anime del mundo",
    img: "https://www.formulatv.com/images/series/posters/2100/2183/dest_1.jpg",
    description: "La ostia con cebolla, mejor fucking final ever!!!"
    }

  return (
    <div className='App'>
      <div className='App-header'>
        <HelloWorld />
        <Boton />
        <Sibling />
        <InputBtn text="Soy el boton de " name="Daniel" />
        <InputBtn text="Soy un numero" name={22} />
        <Card datos={anime} />
        <List />
        <Todo />
        <BtnClick />
        <Counter />
        <TodoAdd />
        <SimpleForm />
        <TodoAddPro />
        <CounterEffect />
        <FetchAnimeGallery />
        <AnimePadre />

        <p className='comp'>Component MyClock</p>
        <div className={"flexH"}>
          <DigitalClock />
          <Countdown />
          <CountdownToEnd />
          <StopWatch />
        </div>
        
        <Trivial />
        {/* <TrivialPrueba /> */}
      </div>
    </div>
  );
}

export default App;
