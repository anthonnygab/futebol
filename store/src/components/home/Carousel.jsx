import React from 'react';
import { Carousel } from 'antd';
import europa from '../../public/assets/picture/europa-shirt.png'
import brazil from '../../public/assets/picture/brazil-shirt.png'


const App = () => (
  <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
    <div>
      <img 
        src={europa}
        alt="promotion"
        style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center'}}
      />
    </div>
    <div>
      <img 
        src={brazil} 
        alt=""
        style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center'}} 
      />
    </div>
  </Carousel>
);

export default App;

//style={contentStyle}//