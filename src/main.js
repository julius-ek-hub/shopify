import NavBar from './components/Navbar';
import sections from './components/Sections';
import Me from './components/me';
import { Footer } from './components/Footer';

import { useMediaQuery } from '@mui/material';

function App() {
  const largeEnough = useMediaQuery('(min-width:1100px)');

  return [
      NavBar,
      ...sections,
      Footer,
      Me
    ].map((Section, i) => <Section className={largeEnough ? 'large-screen' : 'small-screen'} key={i}/>)
}

export default App;
