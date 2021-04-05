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
          <h3 className="header">Header</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            nostrum minus doloremque quisquam veritatis voluptates officiis.
            Harum, esse quibusdam id minima, incidunt veniam dolorum, neque
            sequi aliquid voluptas quidem atque qui corrupti fugiat voluptatem
            repellat molestiae obcaecati provident necessitatibus quisquam! In
            sint quidem doloribus maxime ut iusto quod? Tenetur, sed!
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
