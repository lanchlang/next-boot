import React, { Component } from 'react'
import Button from 'antd/lib/button';
import Head from 'next/head'
import BaseHead from '../components/BaseHead'
import "../styles/main.scss"


export default class extends Component {
  static getInitialProps ({ query: { page,id } }) {
    return { page,id }
  }

  render () {
    return <div>
      <BaseHead/>
      <Head>
          <title>My page title</title>
      </Head>
      <h1>My blog post #{this.props.page}</h1>
      <p>
        <Button type="primary">Ok</Button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  }
}