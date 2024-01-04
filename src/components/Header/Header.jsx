import reactImg from '../../assets/react-core-concepts.png'
import './Header.css';
const reactDescriptions = ['Fundamental','Crucial','Core'];


function getRandomInt(a){
    return(
      Math.floor(Math.random() * (a+1))
    );
  }

export default function Header(){
    const description = reactDescriptions[getRandomInt(2)];
    return(
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }