//import logo from './logo.svg';
import './App.css';
import ImageSlider_Photo from "./Components/Slider_Photo";
import ImageSlider_Food from "./Components/Slider_Food";
import ImageSlider_Passion from "./Components/Slider_Passion";
import Apropos from "./Components/Apropos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const MenuItems = [
    {
      title: "Mes photos",
      url: "#id-photo",
      cName: "nav-links",
    },
    {
      title: "Nourriture",
      url: "#id-food",
      cName: "nav-links",
    },

    {
      title: "Passion",
      url: "#id-passion",
      cName: "nav-links",
    },
    {
      title: "A propos",
      url: "#id-propos",
      cName: "nav-links",
    },

  ]
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="slider_title">Instamag  <span>(glisser les photos)</span></h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
            )
          })}
        </ul>
      </nav>
      <div className="container mt-5 carousel">

        <ImageSlider_Photo />
        <ImageSlider_Food />
        <ImageSlider_Passion />
        <Apropos />
        <footer>
          <ul class="social-icons">
            <li>
              <a href="https://www.facebook.com/harimisaharenasoa.rajaona">
                <img class="ico" src="image/facebook.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img class="ico" src="image/github.png" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/harex_t">
                <img class="ico" src="image/twitter.png" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/harimisa-harenasoa-rajaona-4210a4201/">
                <img class="ico" src="image/linkedin.png" />
              </a>
            </li>
            <li>
              <a href="+261327006180">
                <img class="ico" src="image/phone.png" />
              </a>
            </li>
          </ul>
        </footer>
      </div >
    </div>


  );

}

export default App;
