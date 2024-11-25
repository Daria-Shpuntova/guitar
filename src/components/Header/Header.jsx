import './Header.css'
import {menu} from "../../data.js";

export default function Header(){
    return (
        <nav>
            <ul>
                <li><a href='#story'>{menu.story}</a></li>
                <li><a href='#typeG'>{menu.typeG}</a></li>
                <li><a href='#sovet'>{menu.sovet}</a></li>
                <li><a href='#popular'>{menu.popular}</a></li>
            </ul>
        </nav>
    )
}