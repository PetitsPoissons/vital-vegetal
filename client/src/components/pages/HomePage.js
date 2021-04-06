// React imports
import React, { useEffect } from 'react';

// Style & Images
import M from 'materialize-css';
import assiette5 from '../../assets/assiette5.jpeg';
import lettuces2 from '../../assets/lettuces2.jpeg';

const HomePage = () => {
  useEffect(() => {
    let parallaxEl = document.querySelectorAll('.parallax');
    M.Parallax.init(parallaxEl);
  }, []);

  return (
    <>
      <div className="parallax-container">
        <div className="parallax">
          <img src={assiette5} alt="Veggie Tartines" className="parallax-img" />
        </div>
      </div>
      <div className="section white">
        <div className="row container">
          <h3 className="header">Welcome to Vital Vegetal!</h3>
          <p className="flow-text">
            This is an online cookbook and informational page, all about
            veganism! Here I share some of my favorite meals, snacks, and
            explanations on the importance of a plant-based diet. Enjoy!
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={lettuces2} alt="Lettuces" className="parallax-img" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
