import "./Mindmap3.scss"
import arrow1 from '../images/3arrow1.png';
import arrow1_dot from '../images/3arrow1_dot.png';
import arrow2 from '../images/3arrow2.png';
import arrow2_dot from '../images/3arrow2_dot.png';
import { useState, useContext } from 'react';
import MindContent from "./MindContent";
import { boxStyle, titleStyle } from '../common/utils.js';
import AccordionContext from '../contexts/AccordionContext';
import { BASE_URL } from "../constants";

function Mindmap3({ data, conindex, subindex, background }) {
  const [click, setClick] = useState(false);
  const mindmapData = data.contents[conindex].subs[subindex].mindmap
  console.log('마인드맵 데이타:',data, conindex);
  var mindContent = (content) =>{
    return <MindContent content={content}/>
  }
  function onClick() {
    setClick(click => !click);
  }
  const book_image = data.subject +  data.grade + '-' + data.semester + '/';

  console.log(data, conindex ,subindex)
  let context = useContext(AccordionContext);
  context.setAcorindex(conindex)
  return (
    <div className="mindmap3-box">
      <div className="subject">
        <div className="subject-wrap"onClick={() => onClick()} >
          <img className="background" src={background} alt='' />
          <div className="text">{mindmapData.title}</div>
        </div>

        <div className="item1" style={{display : click? "" : "none"}}>
          <div className="subject" style={boxStyle(data.subject)}>
            {click ? mindContent(mindmapData.mind_one) : null}
          </div>
          {click ? <img className="arrow" src={arrow1} alt=''/> : null}
          {click ? <img className="dot_arrow" src={arrow1_dot} alt=''/> : null}
          {(click && mindmapData.image_one != null) ? <div className="artwork"><img className="artworkImg" src={`${BASE_URL}/image/`+book_image+mindmapData.image_one} alt=''/></div> : null}
          <div className="content" style={boxStyle(data.subject)}>{click ? mindContent(mindmapData.contents_one) : null}</div>
        </div>
        <div className="item2" style={{display : click? "" : "none"}}>
          <div className="subject" style={boxStyle(data.subject)}>
            {click ? mindContent(mindmapData.mind_two) : null}
          </div>
          {click ? <img className="arrow" src={arrow2} alt=''/> : null}
          {click ? <img className="dot_arrow" src={arrow2_dot} alt=''/> : null}
          {(click && mindmapData.image_two != null) ? <div className="artwork"><img className="artworkImg" src={`${BASE_URL}/image/`+book_image+mindmapData.image_two} alt=''/></div> : null}
          <div className="content" style={boxStyle(data.subject)}>{click ?mindContent(mindmapData.contents_two) : null}</div>
        </div>
      </div>
    </div>
  );

}


export default Mindmap3;