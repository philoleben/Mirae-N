import './Home.scss';
import Contents from './Contents';
import newdata from '../data.json'
import useFullscreen from "./useFullscreen";
import frame from "../images/web/frame.png";
import book from "../images/web/book.png";
import choco from "../images/web/choco.png";
import logo from "../images/web/logo.png";
import cloud1 from "../images/web/cloud1.png";
import cloud2 from "../images/web/cloud2.png";
import cloud3 from "../images/web/cloud3.png";



function Home({data}){

  console.log(newdata.contents);
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { triggerFull } = useFullscreen(onFullS);
  triggerFull();
  return (
    <div className="home-wrap">
      <div className="contents">
        <div className="header"></div>
        <div className="content">
          <div className="frame">
            <div className="img-box">
              <img src={cloud1} className="cloud1"/>
              <img src={logo}/>
              <img src={choco}/>
              <img src={cloud2} className="cloud2"/>
              <img src={cloud3} className="cloud3"/>
            </div>
            <div className="top">
              <div className="book-title">초등 사회 3-1</div>
              <img className="book-cover" src={book}/>
            </div>
            <div className="accordion-box">
              <Contents data={data} />
            </div>
            <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Home;