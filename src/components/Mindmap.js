import "./Mindmap.scss"
import arrow1 from '../images/arrow1.png';
import arrow1_dot from '../images/arrow1_dot.png';
import arrow2 from '../images/arrow2.png';
import arrow2_dot from '../images/arrow2_dot.png';
import arrow3 from '../images/arrow3.png';
import arrow3_dot from '../images/arrow3_dot.png';
import { useState, useContext } from 'react';
import MindContent from "./MindContent";
import { boxStyle, titleStyle } from '../common/utils.js';
import { Accordion } from "react-bootstrap";
import AccordionContext, { ContextConsumer } from '../contexts/AccordionContext';
import { BASE_URL } from "../constants";

function Mindmap({ data, conindex, subindex, background }) {
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
    <div className="mindmap1-box">
          <div className="subject">
            <div className="subject-wrap"onClick={() => onClick()} >
              {/* <div style={titleStyle}></div> */}
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
            <div className="item3" style={{display : click? "" : "none"}}>
              <div className="subject" style={boxStyle(data.subject)}>
                {click ? mindContent(mindmapData.mind_three) : null}
              </div>
              {click ? <img className="arrow" src={arrow3} alt=''/> : null}
              {click ? <img className="dot_arrow" src={arrow3_dot} alt=''/> : null}
              {(click && mindmapData.image_three != null) ? <div className="artwork"><img className="artworkImg" src={`${BASE_URL}/image/`+book_image+mindmapData.image_three} alt=''/></div> : null}
              <div className="content" style={boxStyle(data.subject)}>{click ? mindContent(mindmapData.contents_three) : null}</div>
            </div>
          </div>
        </div>     
  );

}


export default Mindmap;