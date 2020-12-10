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
        <div id="id-photo" class="contener">
            <Slider {...setting}>
                <div id="id-photo" className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/1.jpg" />
                        </div>

                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/2.jpg" />
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/9.jpg" />
                        </div>

                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/4.jpg" />
                        </div>

                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/5.jpg" />
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/7.jpg" />
                        </div>

                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default App;