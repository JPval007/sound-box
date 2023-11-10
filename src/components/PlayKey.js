//Import Audio libraries


function PlayKey(props) {
    
    return (
        <>
            <button className="btn btn-primary drum-pad w-100" id={props.text}>{props.text}
            <audio className="clip" id={props.text} src={props.source}></audio></button>
        </>
    );
}

export default PlayKey;