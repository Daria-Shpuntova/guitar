import {sovets} from "../../data.js";
import './Sovet.css'


export default function Sovet() {
    function Sov(props){
        return (
            <div className='content2'>
                <div className='contantText2'>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        )
    }

    return (
        <section  id='sovet' className='container'>
            <h2>Советы</h2>
            {sovets.map((sov, index) => (
                <Sov
                    key={index}
                    title={sov.title}
                    text={sov.text}

                />
            ))}
            <p>
                Следуя этим советам, Вы сможете выбрать гитару, которая будет отвечать вашим музыкальным потребностям и уровню подготовки!
            </p>
        </section>
    );

}