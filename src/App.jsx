
import Header from "./components/Header/Header";
import CoreConcepts from './components/CoreConcepts'
import Examples from "./components/Examples";

export default function App() {

  return (
    <div>
      <Header></Header>
      <main>
       <CoreConcepts></CoreConcepts>
       <Examples></Examples> 
      </main>
    </div>
  );
}
