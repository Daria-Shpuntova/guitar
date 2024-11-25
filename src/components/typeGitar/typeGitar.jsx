import ListP from "../ListP.jsx";
import {typeGitar} from "../../data.js";

export default function TypeGitar() {
    return (
        <section id='typeG' className='container'>
            <h2>Виды гитар</h2>
            {typeGitar.map((gitar, index) => (
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