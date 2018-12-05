import React, { Component } from 'react'
import fly from 'flyio'
export default class extends Component {
  static async getInitialProps ({ query: { page,id } }) {
    const res = await fly.get('https://api.github.com/repos/zeit/next.js')
    console.log(res)
    return { page,id }
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