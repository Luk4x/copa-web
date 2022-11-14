import { Html, Head, Main, NextScript } from 'next/document';

export default function document() {
    return (
        <Html>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="https://raw.githubusercontent.com/Luk4x/user-register-interface/main/public/favicon.ico"
                />
                <meta name="author" content="Lucas Maciel (luk4xm4ci3l@gmail.com)" />
                <meta
                    name="keywords"
                    content="html, css, javascript, typescript, tailwind, nextjs, reactjs, axios, npm, rocketseat, ignite, nlw copa, luk4x"
                />
                <meta
                    property="og:description"
                    content="Aplicação Web temática da copa do mundo desenvolvida durante a trilha Ignite da NLW Copa da Rocketseat."
                />
                <meta
                    property="og:image"
                    content="https://user-images.githubusercontent.com/86276393/201685338-134b99c4-0d5a-4fbf-bd64-2ba097493531.png"
                />
                <meta property="og:title" content="Copa" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <title>Copa</title>
            </Head>
            <body className="bg-[#121214] bg-app bg-no-repeat bg-cover">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
