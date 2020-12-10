//import logo from './logo.svg';
//import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    let setting = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <div id="id-food" class="contener">
            <Slider {...setting}>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/fritte.jpg" />
                        </div>

                        <div className="details">
                            <h2>Pomme fritte</h2>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/hamburger.jpg" />
                        </div>
                        <div className="details">
                            <h2>Hamburger</h2>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/cotellete.jpg" />
                        </div>

                        <div className="details">
                            <h2>Cotellete</h2>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/tacos.jpg" />
                        </div>

                        <div className="details">
                            <h2>Tacos</h2>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/poulet.jpg" />
                        </div>

                        <div className="details">
                            <h2>poulet</h2>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/ramen.jpg" />
                        </div>

                        <div className="details">
                            <h2>Soupe</h2>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default App;