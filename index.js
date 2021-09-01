import ReactDOM from "react-dom";

function App() {
    const style = {
        backgroundColor: "yellow",
        color: "blue"
    };
    return (
        <div>

            <label for="login" className="label-class"> Login:</label>
            <input id="login" type="text" />
            <br />
            <hr />
            <label for="password" className="label-class">Enter password:</label>
            <input id="password" type="password" />
            <br />
            <hr />
            <button style={style}>Approve</button>
        </div>
    )
};
ReactDOM.render(<App />, document.querySelector("#root"));
