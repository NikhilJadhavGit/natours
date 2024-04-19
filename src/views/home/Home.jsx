import './Home.scss'
import logo from "../../assets/logo-white.png"
import imagecomponentimage1 from "../../assets/nat-1-large.jpg";
import imagecomponentimage2 from "../../assets/nat-2-large.jpg";
import imagecomponentimage3 from "../../assets/nat-3-large.jpg";
import globeIcon from "../../assets/icons8-globe-ios-17-outlined-96.png";
import compassIcon from "../../assets/icons8-compas-others-96.png";
import mapIcon from "../../assets/icons8-map-ice-cream-96.png";
import heartIcon from "../../assets/icons8-heart-ios-17-outlined-96.png";

const Home = ()=>{
    return (
        <>
        <section className='header'>
            <div className='brand'>
                <img src={logo} alt="" />
            </div>
            <div className='heading'>
                <h1><span className='heading-main'>Outdoor</span>
                <span className='heading-sub'>Is where Life Happens</span></h1>
                <a className='btn btn-white' href="#" rel="noopener noreferrer">More details</a>
            </div>
            
            
        </section>
        <main className='about'>
            <h2 className='header-secondary'>Exiting tours for adventurous people</h2>
            <div className="row">
                <div className="col_1of2">
                    <div className="content">
                    <h3>
                        You're going to fall in love with nature
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatem exercitationem excepturi ratione doloremque dicta nam suscipit beatae, praesentium nisi minima? Dolorum delectus pariatur adipisci quisquam quos est magni dolore!</p>
                    </div>
                    <div className="content">
                    <h3>
                        Live Adventures like you have never before
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatem exercitationem excepturi ratione doloremque dicta nam suscipit beatae</p>
                    </div>
                    <a href='#' className="btn-txt">Learn more &rarr;</a>
                </div>
                <div className="col_1of2">
                    <div className="composition">
                        <img class="composition__photo composition__photo-1" src={imagecomponentimage1} alt=""  srcset="" />
                        <img class="composition__photo composition__photo-2" src={imagecomponentimage2} alt=""  srcset="" />
                        <img class="composition__photo composition__photo-3" src={imagecomponentimage3} alt=""  srcset="" />
                    </div>
                </div>
            </div>
        </main>
        <div className='features'>
            <div className='alignCenter'>
                
                <div className="feature">
                <img height={96} width={96} src={globeIcon} alt="globe--v1"/>
                    <h3>Explore the world</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto excepturi, non aperiam eligendi, sequi magni labore iure magnam quas assumenda ipsa! Veniam necessitatibus</p>
                </div>
                <div className="feature">
                <img height={96} width={96} src={compassIcon} alt="globe--v1"/>
                    <h3>Meet nature</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto excepturi, non aperiam eligendi, sequi magni labore iure magnam quas assumenda ipsa! Veniam necessitatibus</p>
                </div>
                <div className="feature">
                <img height={96} width={96} src={mapIcon} alt="globe--v1"/>
                    <h3>Find your way</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto excepturi, non aperiam eligendi, sequi magni labore iure magnam quas assumenda ipsa! Veniam necessitatibus</p>
                </div>
                <div className="feature">
                    <img height={96} width={96} src={heartIcon} alt="globe--v1"/>
                    <h3>Live a healthier life</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto excepturi, non aperiam eligendi, sequi magni labore iure magnam quas assumenda ipsa! Veniam necessitatibus</p>
                </div>  
            </div>
        </div>

        </>
    );
}

export default Home;