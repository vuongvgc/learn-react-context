import React, { useContext } from 'react'
import ButtonTheme from './ButtonTheme'
import logo from './logo.svg'
import { ThemeContext } from './theme-context'

function Homepage() {
  const value = useContext(ThemeContext)
  return (
    <header
      className="App-header"
      style={{
        backgroundColor: value.theme.background,
        color: value.theme.foreground,
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <ThemeContext.Consumer>
        {(value) => {
          return <div>{value.theme.background}</div>
        }}
      </ThemeContext.Consumer>
      <ThemeContext.Consumer>
        {(value) => {
          return (
            <button onClick={() => value.toggleTheme()}>Toggle Theme</button>
          )
        }}
      </ThemeContext.Consumer>
      <ButtonTheme />
    </header>
  )
}

export default Homepage
