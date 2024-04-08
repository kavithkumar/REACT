import { useTheme } from "./ThemeProvider";

function Content(){
    const {Theme,toggleTheme}=useTheme()
    return(
        <>
        <div className={`App ${Theme}`}>
            <b>Current Theme {Theme}</b>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
        </>
    );
}
export default Content