import {popular} from "../../data.js";
import ListP from "../ListP.jsx";

export default function Popular(){
    return (
        <section id='popular' className='container'>
            <h2>5 самых популярных гитар мира</h2>
            {popular.map((gitar, index) => (
                <ListP
                    key={index}
                    title={gitar.title}
                    text={gitar.text}
                    img={gitar.img}
                />
            ))}
        </section>
    );
}