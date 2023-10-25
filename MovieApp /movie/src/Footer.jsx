import './footer.css';

function Footer({page, setPage}){
    return(
        <footer className='footer'>

            {/* <ul className='footer__place-list'>
                <li className='footer__place-item'>
                    <a className='footer__place-link' href='https://www.marvel.com/corporate/about'>
                        About CatFlix
                    </a>
                </li>
                <li className='footer__place-item'>
                    <a className='footer__place-link' href='/sunbeams.html'>
                        Help
                    </a>
                </li>
                <li className='footer__place-item'>
                    <a className='footer__place-link' href='/sunbeams.html'>
                        Privacy
                    </a>
                </li>
            </ul> */}
            <ul className='footer__link-list'>
                <li className='footer__link-item'>
                <a className='footer__link-link' href="#" onClick={
                        (e)=>{
                            e.preventDefault();
                            setPage("Home");
                        }
                    }> 
                    Home
                    </a>
                </li>
                <li className='footer__link-item'>
                <a className='footer__link-link' href="#" onClick={
                        (e)=>{
                            e.preventDefault();
                            setPage("ContactUs");
                        }
                    }> 
                    Contact Us
                    </a>
                </li>
                <li className='footer__link-item'>
                    <a className='footer__link-link' href="#" onClick={
                        (e)=>{
                            e.preventDefault();
                            setPage("About");
                        }
                    }> 
                    FAQ
                    </a>
                    
                </li>
            </ul>
            <ul className='footer__social-list'>
                <li className='footer__social-item'>
                    <a className='footer__social-link' href='https://www.facebook.com/'>
                        Facebook
                    </a>
                </li>
                <li className='footer__social-item'>
                    <a className='footer__social-link' href='https://www.tiktok.com/'>
                        Tiktok
                    </a>
                </li>
                <li className='footer__social-item'>
                    <a className='footer__social-link' href='https://www.instagram.com'>
                        Instagram
                    </a>
                </li>
            </ul>


        </footer>
    );
}

export default Footer;