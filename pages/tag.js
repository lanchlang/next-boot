import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps ({ query: { page,tag } }) {
    return { page,tag }
  }

  render () {
    return <div>
      <h1>My blog post #{this.props.page}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  }
}