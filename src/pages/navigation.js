import Intro_page_1 from './pages/Intro_page_1';
import Intro_page_2 from './pages/Intro_page_2';
import Intro_page_3 from './pages/Intro_page_3';
import {Link} from 'react-router-dom';

function navigation() {
    return (
      <nav>
          <ul>
            <Link to='/Intro_page_1'>
              <li>Intro_page_1</li>
            </Link>
            <Link to='/Intro_page_2'>
              <li>Intro_page_2</li>
            </Link>
            <Link to='/Intro_page_3'>
              <li>Intro_page_3</li>
            </Link>
          </ul>
      </nav>
    );
  }

export default navigation;