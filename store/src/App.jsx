import './styles/index.css';
import './styles/Scroolbar.css';

import Navbar from '../../store/src/components/home/Navbar';
import Carousel from '../../store/src/components/home/Carousel';
import Shop from '../../store/src/components/home/Shop';
import Create from '../../store/src/components/home/Create';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Shop />
      <Create />
    </>
  );
}

export default App;