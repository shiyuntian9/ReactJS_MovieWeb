import './Home.css';

const menu = [
    {
        name:"Spider Man",
        path:"spiderman.jpg",
        text:"With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man."
        

    },
    {
        name:"Bat Man",
        path:"Batman.jpg",
        text:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        
    },
    {
        name:"Moon Knight",
        path:"MoonKnight.jpg",
        text: "Steven Grant discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among powerful gods of Egypt."
        
    },

];

function Home(){
    const list = menu.map(item =>{
    return(
        <li className="panel-item" key={item.name}>
            <img className="card_pic" src={item.path} alt="Cute Cats of mine"/>
            
            <p>{item.text}</p>
        </li>
    )
});

return(
    <>
        <ul className="panel__list">
            {list}
        </ul>
    </>
)
}

export default Home;