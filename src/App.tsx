import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Heading>
        First Component
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aperiam
        ut non recusandae, voluptas esse reprehenderit, laudantium culpa,
        cupiditate deserunt delectus voluptatibus necessitatibus cumque dolorum
        optio magnam laborum maiores. Facilis.
      </p>
    </>
  );
}
