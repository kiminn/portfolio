import '@/assets/scss/style.scss';

interface Metadata {
    title: string;
    description: string;
    keywords: string[];
}

export const metadata: Metadata = {
    title: 'Kayoung Kim',
    description: '포트폴리오 사이트 입니다.',
    keywords: [
        '포트폴리오',
        '리액트',
        '넥스트',
        'portfolio',
        'react.js',
        'next.js',
        'kiminn'
    ],
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <html lang="ko">
            <link rel="icon" type="image/svg+xml" href="favicon.svg" />
            <body>{children}</body>
        </html>
    );
}
