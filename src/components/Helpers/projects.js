import dashvotesSq from 'assets/img/dashvotes-square.png'
import scenarionSq from 'assets/img/scenarion-logo-square.png'
import minicryptoSq from 'assets/img/mini-crypto-square.png'

const projects = [
  {
    title: 'Scenarion.io',
    description:
      'React app for Scenarion, with sign up flow, &amp; client dashboard. ',
    type: 'Responsive web app',
    tags: 'React, Redux, Material-UI, Firebase, Netlify',
    summary:
      'An SPA built on React, utilizing a custom Material-UI theme. I had worked together with the lead designer to bring her mockups to life. This was my first time using Redux in production and was quite the learning experience.',
    url: 'https://scenarion.io',
    preview: scenarionSq,
    image1: '',
    image2: '',
    image3: '',
    slug: '/portfolio/scenarion',
  },
  {
    title: 'Mini-Crypto',
    description: '',
    type: 'Mobile web app',
    tags: 'React, React Hooks, Firebase, JSS, API, Mobile, LocalStorage',
    summary:
      'A cryptocurrency tracker aimed for mobile devices. This app quickly allows you to bring up the coin prices that you care about by favoriting it.',
    url: 'https://mini-crypto.firebaseapp.com/',
    preview: minicryptoSq,
    image1: '',
    image2: '',
    image3: '',
    slug: '/portfolio/minicrypto',
  },
  {
    title: 'Dashvotes',
    description: '',
    type: 'Progressive web app',
    tags: 'React, Firebase, Firestore, Recharts, PWA',
    summary:
      'DashVotes is a mobile PWA which allows users to create and vote on existing polls. The votes will be collected and shown in a visual representation of the results. ',
    url: 'https://dashvotes.firebaseapp.com/',
    preview: dashvotesSq,
    image1: '',
    image2: '',
    image3: '',
    slug: '/portfolio/dashvotes',
  },
]

export default projects
