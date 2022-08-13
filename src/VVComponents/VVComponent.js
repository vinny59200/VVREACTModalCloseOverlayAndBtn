function VVComponent(props){
    return (<div>
        <h1>Welcome in VV modal app!</h1>
        <br/>
        <button onClick={props.onShow}>Pop the modal!</button>
    </div>)
}

export default VVComponent;