import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class Input extends Component {
  render() {
    const { label, value, onChange } = this.props
    return (
      <TextField
        margin="normal"
        label={label}
        value={ value }
        onChange={onChange}
        style={{display: 'block'}} />
    )
  }
}

export default Input