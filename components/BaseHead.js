import Head from 'next/head'
export default ()=>(
        <Head>
              <meta charset="utf-8"/>
              <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              {/* <!-- Set render engine for 360 browser --> */}
              <meta name="renderer" content="webkit"/>

              {/* <!-- No Baidu Siteapp--> */}
              <meta http-equiv="Cache-Control" content="no-siteapp" />
              {/* <!-- Disable tap highlight on IE --> */}
              <meta name="msapplication-tap-highlight" content="no"/>

              {/* <!-- Web Application Manifest --> */}
              <link rel="manifest" href="/static/manifest.json"/>

              {/* <!-- Add to homescreen for Chrome on Android --> */}
              <meta name="mobile-web-app-capable" content="yes"/>
              <meta name="application-name" content="Web Starter Kit"/>
              <link rel="icon" sizes="192x192" href="/static/images/touch/chrome-touch-icon-192x192.png"/>

              {/* <!-- Add to homescreen for Safari on iOS --> */}
              <meta name="apple-mobile-web-app-capable" content="yes"/>
              <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
              <meta name="apple-mobile-web-app-title" content="Web Starter Kit"/>
              <link rel="apple-touch-icon" href="/static/images/touch/apple-touch-icon.png"/>

              {/* <!-- Tile icon for Win8 (144x144 + tile color) --> */}
              <meta name="msapplication-TileImage" content="/static/images/touch/ms-touch-icon-144x144-precomposed.png"/>
              <meta name="msapplication-TileColor" content="#2F3BA2"/>

              {/* <!-- Color the status bar on mobile devices --> */}
              <meta name="theme-color" content="#2F3BA2"/>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              {/* <!-- SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones -->
  <!--
    <link rel="canonical" href="http://www.example.com/">
    --> */}
              <link href="https://cdn.bootcss.com/antd/3.11.0/antd.min.css" rel="stylesheet"></link>

        </Head>
)