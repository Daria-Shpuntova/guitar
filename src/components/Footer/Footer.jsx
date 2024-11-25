import {menu} from "../../data.js";
import './Footer.css'

export default function Footer(){
    return(
        <footer>
            <ul>
                <li><a href='#story'>{menu.story}</a></li>
                <li><a href='#typeG'>{menu.typeG}</a></li>
                <li><a href='#sovet'>{menu.sovet}</a></li>
                <li><a href='#popular'>{menu.popular}</a></li>
            </ul>
            <p>Разработано <a href='https://daryaspuntovawebsites.ru/'>Шпунтова Дарья</a></p>
        </footer>
    )
}