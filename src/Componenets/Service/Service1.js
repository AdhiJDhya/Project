// import React from 'react';
// import {Link} from 'react-router-dom';
// import './Service.css';
// import Footer from '../Footer/Footer';

// const Service1 = () => {
//   return (
//     <div>
//       <div  className="care">
//       <div className='img1'>
//        <Link to='/Book'><button><img src='https://www.tn.gov/content/tn/humanservices/for-families/child-care-services/jcr:content/content/tn_image_149134274.img.jpg/1581456462499.jpg'/></button></Link>
//        <h1>child care</h1>
//        </div>
//       <div className='img2'>
//        <Link to='/Book'><button><img src='https://food.amerikanki.com/wp-content/uploads/2020/05/Cheat-Sheet-Infographics-Cheat-Sheet-Infographics-For-Cooking.jpg'/></button></Link>
//        <h1>Cooking</h1>
//        </div>
//       <div>
//        <Link to='/Book'><button><img src='https://tse4.mm.bing.net/th?id=OIP.tIbKF1wILzMTbsT2Wrvp4gHaE8&pid=Api&P=0&h=180'/></button></Link>
//        <h1>Homecleaning</h1>
//        </div>
//       <div>
//        <Link to='/Book'><button><img src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F01%2FAmazon-garden-tools.jpg'/></button></Link>
//        <h1>Gardening</h1>
//        </div>
//        </div>
//        <div>
//        <Footer/>
//        </div>
//     </div>

//       );
// };

// export default Service1;





import React from 'react';
import {Link} from 'react-router-dom';
import data1 from '../Assets/data1';
import Item from '../Item/Item';
import './Service.css';
import Footer from '../Footer/Footer';

const Service1 = () => {
  return (
    <div className="service-container">
      <div className='ccc'>
        {data1.map((item, i) => {
          return <Link to='/book'><Item key={i} id={item.id} name={item.name} image={item.image} /></Link>;
        })}
        <div className="aaa">
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Service1;
