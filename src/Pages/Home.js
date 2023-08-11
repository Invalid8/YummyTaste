import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../images/mini.jpg";

const Home = () => {
    return ( 
        <div className="container" style={{gap: '10px'}}>
            <h1>Welcome to Yummytaste</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum vero sit labore veniam qui nam quibusdam iure ea debitis nostrum!</p>
            <button className="nBtn"><Link to="/Menu">Get a Meal</Link></button>
            <div className="imgBox">
                <LazyLoadImage 
                    src="https://cdn.tasteatlas.com//images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?mw=1300" 
                    alt="..."
                    placeholderSrc={PlaceholderImage}
                    effect="blur"
                />
            </div>
        </div>
    );
}
 
export default Home;