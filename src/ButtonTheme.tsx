import React from 'react'
import { ThemeContext } from './theme-context'

function ButtonTheme() {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        return (
          <button onClick={() => value.toggleTheme()}>Change Themme</button>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ButtonTheme
