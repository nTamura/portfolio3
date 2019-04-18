import dashvotesSq from 'assets/img/dashvotes-square.png'
import scenarionSq from 'assets/img/scenarion-logo-square.png'
import minicryptoSq from 'assets/img/mini-crypto-square.png'
import scenarionLabsWeb from 'assets/img/scenarion-labs-web.png'
import scenarionWeb from 'assets/img/scenarion-web.png'
import minicryptoMockup from 'assets/img/minicrypto-mockup.png'
import dashvotesScreen from 'assets/img/dashvotes-screen.png'
import dashvotesScreen2 from 'assets/img/dashvotes-screen2.png'

const projects = [
  {
    title: 'Scenarion.io',
    description:
      'React web app for Scenarion, with sign up flow, & client dashboard. ',
    type: 'Responsive web app',
    tags: [
      'React',
      'Redux',
      'Material-UI',
      'Firebase',
      'Netlify',
      'SEO',
      'Zapier',
    ],
    summary:
      'I had worked together with the lead designer to transform their old, one page HTML wep page to a rich, interactive web app. I created a custom, Material-UI theme and a typography component library, and deployed it on Netlify for a serverless stack. As a fun bonus, I created webhooks to alert our Slack communication channel of any new signups',
    summary2: '',
    url: 'https://scenarion.io',
    github: '',
    preview: scenarionSq,
    image1: scenarionWeb,
    image2: scenarionLabsWeb,
    image3: '',
    slug: '/portfolio/scenarion',
  },
  {
    title: 'Mini-Crypto',
    description: 'A simple cryptocurrency tracker for mobile devices.',
    type: 'Mobile web app',
    tags: [
      'React',
      'React Hooks',
      'Firebase',
      'JSS',
      'API',
      'Mobile',
      'LocalStorage',
    ],
    summary:
      'This app quickly allows you to bring up the coin prices that you care about by favoriting it without needing to sign up or log in. The web app utilizes localstorage and an external API to fetch current prices. I had originally made this in RoR years back and decided to re-explore the concept using React.',
    summary2: '',
    url: 'https://mini-crypto.firebaseapp.com/',
    github: 'https://github.com/nTamura/mini-crypto',
    preview: minicryptoSq,
    image1: minicryptoMockup,
    image2: '',
    image3: '',
    slug: '/portfolio/minicrypto',
  },
  {
    title: 'Dashvotes',
    description: 'Create, vote and view polls.',
    type: 'Progressive web app',
    tags: ['React', 'Firestore', 'Firebase Auth', 'Recharts', 'PWA'],
    summary:
      'DashVotes is a mobile PWA which allows users to create and vote on existing polls. The votes will be collected via Firebase Firestore, and displayed via chart. I had some fun exploring form validation and user authentication through Firebase Auth. ',
    summary2: '',
    url: 'https://dashvotes.firebaseapp.com/',
    github: 'https://github.com/nTamura/dashvotes',
    preview: dashvotesSq,
    image1: dashvotesScreen,
    image2: dashvotesScreen2,
    image3: '',
    slug: '/portfolio/dashvotes',
  },
]

export default projects
