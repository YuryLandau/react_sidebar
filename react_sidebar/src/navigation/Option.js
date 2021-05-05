function Option(props){
    return (
        <li>
            <img src={props.image} alt=""/>
            <p href="#" className="option">
                {props.value}
            </p>
        </li>
    )
}

export default Option;