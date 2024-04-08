import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()
export function ThemeProvider({ children }) {
    const [Theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    }
    return (
        <>
            <ThemeContext.Provider value={{ Theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    );
}
export const useTheme = () => {
    return useContext(ThemeContext)
}