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
        <div id="id-passion" class="contener">

            <Slider {...setting}>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/DA2.jpg" />
                        </div>

                        <div className="details">
                            <h2>Dessin Anime</h2>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/musique.jpg" />
                        </div>
                        <div className="details">
                            <h2>Chant et Musique</h2>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/jeu.jpg" />
                        </div>

                        <div className="details">
                            <h2>Jeu video</h2>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img class="image-fond" src="image/film.jpg" />
                        </div>

                        <div className="details">
                            <h2>Film</h2>
                        </div>
                    </div>
                </div>

            </Slider >
        </div>
    );
}

export default App;