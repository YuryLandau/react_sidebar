function Option(props){

    const novoScript = new Function ('return ' + props.script )
    console.log(novoScript);

    return (
        <li onClick={novoScript()}>
            <p>
                {props.value}
            </p>
        </li>
    )
}

export default Option;