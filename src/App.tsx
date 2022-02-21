import React, { useState } from 'react'
import './App.css'
import Homepage from './Homepage'
import { ThemeContext, themes } from './theme-context'

function App() {
  const [theme, setTheme] = useState(themes.dark)
  const toggleTheme = () => {
    let newTheme = themes[theme.type === 'dark' ? 'light' : 'dark']
    console.debug('toggle', newTheme)
    setTheme(newTheme)
  }
  return (
    <ThemeContext.Provider
      value={{ theme: theme, toggleTheme: () => toggleTheme() }}
    >
      <div className="App">
        <Homepage />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
