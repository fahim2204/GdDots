import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>GD Dots</title>
        <meta name="description" content="GD Dots is an graphic design company specializing in graphic design, motion graphics, video editing, and 3D services. We prioritize customer satisfaction and have been providing excellent service for the past 5 years." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />

        {/* FB OG Tag */}
        <meta property="og:title" content="GD Dots" />
        <meta property="og:site_name" content="GD Dots" />
        <meta property="og:url" content="http://gddots.com" />
        <meta property="og:description" content="GD Dots is an graphic design company specializing in graphic design, motion graphics, video editing, and 3D services. We prioritize customer satisfaction and have been providing excellent service for the past 5 years." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://gddots.com/og.png" />


      </Head>
      <body>
        <Main />
        <NextScript />
        <div className="hidden">
          <a href="https://mcqgenius.com">MCQ Genius</a>
          <a href="https://fahimfaisal.net">Build With Fahim</a>
        </div>
      </body>
    </Html>
  )
}
