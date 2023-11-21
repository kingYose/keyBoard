const Buttons = (props) => {

        return (
                <div className="buttons">
                        <button onClick={() => props.setText(props.text.slice(0, - 1))}>delete</button>
                        <button onClick={() => props.setLanguage(!props.language)}>chenge language</button>
                        <button onClick={() => props.setText("")}>cleerAll</button>
                        <button onClick={() => props.setText(props.text + " ")}>space</button>
                        <button onClick={() => props.setCollor(!props.Collor)}>setCollor</button>


                </div>)
}
export default Buttons;