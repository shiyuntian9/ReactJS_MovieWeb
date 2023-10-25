
import AccordionSection from './AccordionSection';
import './About.css';
function About(){
    return(
        <>
            <AccordionSection className="accordion" title="What is Catflix?">
                <p className='paragraph'>
                Catflix is an online streaming service that provides its members with a wide variety of movies, TV shows, documentaries, and more. It can be accessed from any device with an internet connection, including smartphones, tablets, and smart TVs.
                </p>
            </AccordionSection>
            <AccordionSection className="accordion"  title=" What types of content can I find on Catflix?">
            <p className='paragraph'>Catflix has a vast library of content, including movies, TV shows, documentaries, and original programming. Its catalog spans various genres, including action, drama, comedy, horror, sci-fi, and more. You can find both classic titles and new releases on the platform.
            </p>
            </AccordionSection> 
            <AccordionSection className="accordion"  title="Can I watch Catflix offline?">
            <p className='paragraph'>Yes, you can download select titles from Netflix to watch offline. This feature is available on the Catflix app for iOS and Android devices.
            </p>
            </AccordionSection> 
            <AccordionSection className="accordion" title="How do I sign up for Catflix?">
            <p className='paragraph'>To sign up for Catflix, you can visit their website and select a subscription plan. You will be prompted to enter your email address and choose a password. You will also need to enter your billing information to start your membership.
            </p>
            </AccordionSection> 
        </>
        

    )
    
}
export default About;