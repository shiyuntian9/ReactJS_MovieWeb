import Home from "./Home";
import About from "./About";
import Movie from "./Movie";
import './Main.css';
import ContactUs from "./ContactUs";

function Main({page, setPage}){
    
    return(
        <main >
            {page ==='Home' && <Home/>}
            {page ==='About' && <About/>}
            {page ==='Movie' && <Movie setPage={setPage}/>}
            {page ==='ContactUs' && <ContactUs/>}
        </main>
    );
}

export default Main;