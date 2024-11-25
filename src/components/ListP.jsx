export default function ListP(props) {
    return (
        <div className='content1'>
            <div className='contantImg'>
                <img src={props.img} alt={props.title} />
            </div>
            <div className='contantText'>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}