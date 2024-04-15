import './Home.css'
import logo from "../../assets/logo-white.png"
const Home = ()=>{
    return (
        <section className='header'>
            <div className='brand'>
                <img src={logo} alt="" />
            </div>
            <div className='heading'>
                <h1><span className='heading-main'>Natours</span>
                <span className='heading-sub'>Nature is truly beautiful</span></h1>
                <a className='btn btn-white' href="#" rel="noopener noreferrer">More details</a>
            </div>
            
            
        </section>

    );
}

export default Home;