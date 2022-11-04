import { Html, Head, Main, NextScript } from 'next/document';

export default function document() {
    return (
        <Html>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/svg+xml" href="https://raw.githubusercontent.com/Luk4x/user-register-interface/main/public/favicon.ico" />
                <meta name="author" content="Lucas Maciel (luk4xm4ci3l@gmail.com)" />
                <meta name="keywords" content="HTML, CSS, Javascript, JS, typescript, tailwind, nextjs, npm, rocketseat, nlw, nlw ignite, copa" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />
                <meta property="og:title" content="Copa" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                <title>Copa</title>
            </Head>
            <body className="bg-[#121214] bg-app bg-no-repeat bg-cover">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
