import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vitae! odit placeat rem </p>
        </div>
        <p className='p__opensans'>Dolorem eveniet alias iste ex minus eos, perspiciatis expedita delectus. Molestias ut cum laborum! Eligendi officiis iusto dolores, tempora sequi illo repudiandae dolorem quae eaque dolorum, at officia, odit placeat rem explicabo!</p>
      </div>
    </div>
  </div>
);

export default Chef;
