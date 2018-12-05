import React from 'react'
import App, {Container} from 'next/app'
import BaseHead from '../components/BaseHead'
//layout模板：header,footer...
class Layout extends React.Component {
  render () {
    const {children} = this.props
    return <div className='layout'>
      <BaseHead/>
      {children}
    </div>
  }
}

export default class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  }
}