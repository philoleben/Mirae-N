import "./Mindmap4.scss"
import exit from '../images/exit.png';
import choco from '../images/choco.png';
import logo from '../images/logo.png';
import arrow1 from '../images/4arrow1.png';
import background from '../images/background.png';
import tugging from '../images/artwork/tugging.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MindContent from "./MindContent";
import { typeFourImage } from "../common/utils";


function Mindmap4({ data, conindex, subindex }) {
    console.log('마인드맵 데이타 : ',data," conindex : ", conindex, " subindex : ",subindex);
  const [click, setClick] = useState(false);
  const mindmapData = data.contents[conindex].subs[subindex].mindmap
  
  var filelist = typeFourImage(mindmapData.image_one)

  var mindContent = (content) =>{
    return <MindContent content={content}/>
  }
  function onClick() {
    setClick(click => !click);
  }
  const book_title = data.subject + ' '+  data.grade + '-' + data.semester;

  console.log(data, conindex ,subindex)
  return (
    <div className="mindmap4-wrap">
      <div className="header">
        <img className="logo" src={logo} alt=''/>
        <div className="center">
          <img className="choco" src={choco} alt='' />
          <h1 className="book">초등 {book_title}</h1>
        </div>
        <Link to="/"><img className="exit" src={exit} alt=''/></Link>
      </div>
      <div className="contents-wrap">

      </div>
      <div className="contents">
        <div className="mindmap-box">
          <div className="subject">
            <div className="subject-wrap"onClick={() => onClick()} >
              <img className="background" src={background} alt='' />
              <div className="text">{mindmapData.title}</div>
            </div>
            {(click && filelist[0] != '') ? <img className="artwork1" src={'/image/s3-1/'+filelist[0]} alt=''/> : null}
            <div className="item1" style={{display : click? "" : "none"}}>
              {click ? <img className="arrow" src={arrow1} alt=''/> : null}
              <div className="content">
                {click ? mindContent(mindmapData.contents_one) : null}
                {(click && filelist[1] != '') ? <img className="artwork2" src={'/image/s3-1/'+filelist[1]} alt=''/> : null}
                {(click && filelist[2] != '') ? <img className="artwork3" src={'/image/s3-1/'+filelist[2]} alt=''/> : null}
                {(click && filelist[3] != '') ? <img className="artwork4" src={'/image/s3-1/'+filelist[3]} alt=''/> : null}
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">Copyright ⓒ MIRAE N CO.LTD. All Rights Reserved</div>
    </div>

  );

}


export default Mindmap4;