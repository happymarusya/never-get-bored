function Button({getTip}) {
    return (
        <div className="btnTwo animate__animated animate__zoomIn animate__delay-5s">
          <div>
            <button onClick={getTip} className="buttonTwo" id="two"><span></span> <span></span> <span></span> <span></span>Click Me!</button>
          </div>  
        </div>
    )
}
export default Button;