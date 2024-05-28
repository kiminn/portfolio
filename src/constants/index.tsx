import photo from '@/assets/img/photo.jpeg';
import postmobism from '@/assets/projects/postmobism.png';
import chapchap from '@/assets/projects/chapchap.png';
import MMM from '@/assets/projects/MMM.png';

export const headerNav = [
    {
        id: 1,
        title: 'intro',
        url: '#intro',
    },
    {
        id: 2,
        title: 'skills',
        url: '#skills',
    },
    {
        id: 3,
        title: 'projects',
        url: '#projects',
    },
    {
        id: 4,
        title: 'contact',
        url: '#contact',
    },
];

export const introText = {
    title: ['Hello,', `I'm a`, 'FE Developer'],
    img: photo,
};

export const frontEndText = [
    {
        text: 'JavaScript',
    },
    {
        text: 'React',
    },
    {
        text: 'TypeScript',
    },
    {
        text: 'NEXTjs',
    },
];

export const libraryText = [
    {
        text: 'Recoil',
    },
    {
        text: 'React-Query',
    },
    {
        text: 'RHF',
    },
    {
        text: 'zod / yup',
    },
    {
        text: 'Socket.io',
    },
    {
        text: 'RTK',
    },
    {
        text: 'zustand',
    },
];

export const styleSheetText = [
    {
        text: 'Chakra UI',
    },
    {
        text: 'MUI UI',
    },
    {
        text: 'tailwind css',
    },
    {
        text: 'styled-components',
    },
    {
        text: 'scss',
    },
    {
        text: 'emotion',
    },
    {
        text: 'storybook',
    },
];

export const communicationText = [
    {
        text: 'Github',
    },
    {
        text: 'Notion',
    },
    {
        text: 'Slack',
    },
    {
        text: 'Linear',
    },
    {
        text: 'Figma',
    },
    {
        text: 'Jira',
    },
];

export const projectsText = [
    {
        title: 'PostMobism',
        img: postmobism,
        code: 'https://github.com/mobi-MIMIZ/PostMobism?tab=readme-ov-file',
        stack: ['production period : 2024.02.03 ~ 2024.02.17', 'use stack : TypeScript, React, RTK, styled-component'],
    },
    {
        title: 'Chap-chap',
        img: chapchap,
        code: 'https://github.com/mobi-chap-chap/chap-chap',
        stack: [
            'production period : 2024.01.19 ~ 2024.01.30',
            'use stack : TypeScript, React, rhf+zod, tailwind-css, react-query',
        ],
    },
    {
        title: 'MMM',
        img: MMM,
        code: 'https://github.com/Manners-Maketh-Market/MMM',
        stack: ['production period : 2023.10 ~ 2023.12', 'use stack : React, Recoil, react-query, styled-component'],
    },
];

export const contactText = [
    {
        link: 'https://open.kakao.com/o/gM7YLzwf',
        title: 'KAKAO : webstupids',
    },
    {
        link: 'mailto:webstoryboy@naver.com',
        title: 'mail : webstoryboy@naver.com',
    },
];

export const footerText = [
    {
        title: 'youtube',
        desc: '유튜브에 오시면 더 많은 강의를 볼 수 있습니다.',
        link: 'https://www.youtube.com/@Webstoryboy',
    },
    {
        title: 'github',
        desc: '깃헙에 오시면 더 많은 소스를 볼 수 있습니다.',
        link: 'https://github.com/webstoryboy',
    },
    {
        title: 'blog',
        desc: '블러그에 오시면 더 많은 정보를 볼 수 있습니다.',
        link: 'https://webstoryboy.co.kr',
    },
    {
        title: 'gsap',
        desc: 'GSAP에 오시면 더 많은 강의를 볼 수 있습니다.',
        link: 'https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq',
    },
    {
        title: 'react',
        desc: '리액트로 만든 사이트를 같이 만들어 봅니다.',
        link: 'https://github.com/webstoryboy/port2023-react',
    },
    {
        title: 'vue',
        desc: '뷰로 만든 사이트를 같이 만들어 봅니다.',
        link: 'https://github.com/webstoryboy/port2023-vue',
    },
    {
        title: 'next',
        desc: '넥스트로 만든 사이트를 같이 만들어 봅니다.',
        link: 'https://github.com/webstoryboy/port2023-next',
    },
];
