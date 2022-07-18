import data from '@/data/data.json';
import { Html, Main, NextScript, Head } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link href="/logo.png" rel="icon" />
                <link
                    href={`${data.website}/rss.xml`}
                    rel="alternate"
                    title="RSS"
                    type="application/rss+xml"
                />
                <meta
                    content={`${data.website}/og-image.png`}
                    property="og:image"
                />
                <meta
                    content="Mike, Fiat, Mike Fiat, web dev, blogger, content creator,SEO ,Search Engine Optimization"
                    name="keywords"
                />
                <link href="/manifest.json" rel="manifest" />
                <link href="/icon.png" rel="apple-touch-icon"></link>
                <meta content="#fff" name="theme-color" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
