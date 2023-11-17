const reactDescription = ["Core", "Fundamental", "Crucial"];
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="hello" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[getRandonInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}


function getRandonInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
