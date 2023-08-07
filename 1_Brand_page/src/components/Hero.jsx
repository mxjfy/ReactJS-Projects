import '../index.css';
import amazone from '../assets/img/amazon.png';
import flipkart from '../assets/img/flipkart.png';
import shoe from '../assets/img/shoe_image.png';
const HeroSection = () => {
    return (
        <main>
            <div className="hero-content">
                <h1>YOUR FEET DESERVE <br/> THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="shop-btn">
                    <button className="shop">Shop Now</button>
                    <button className="cate">Category</button>
                </div>

                <div className="shop-icon">
                    <img src={amazone} alt="amazon" />
                    <img src={flipkart} alt="flipkart" />
                </div>
            </div>

            {/* product image */}
            <div className="hero-product-img">
                <img src={shoe} alt="shoe_image" />
            </div>
        </main>
    )
}

export default HeroSection;