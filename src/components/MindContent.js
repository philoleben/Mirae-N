import { useState } from 'react';
import { changeMarbleNum } from '../common/utils.js';
import "./MindContent.scss"


function newlineToBr(content){
    if(content === null){
        return ""
    }
    console.log(content)
    var replaceString = content.replace(/\n/g, '<br>').replace(/(?! +‘| +')( +)/g,' ');
    return replaceString
}

function spanindex(index){
    return Math.floor(index/2)
}

function dotChecker( line ) {
  return line.startsWith("•");
}

function pipeChecker( line ) {
    return line.startsWith(" -");
}

function pipeSpace( line ){
    if(line.startsWith("-")){
        return line.replace(/-/g," - ")
    }else{
        return line
    }
}

function MindContent (content){
    var data = newlineToBr(content.content)
    
    var pattern = /\{.+?\}/g;
    var findanswer = data.match(pattern)
    if(findanswer === null){
        findanswer = []
    }
    console.log("findanswer : " ,findanswer.length);

    const [boollist, setBoollist] = useState(Array.from(new Array(findanswer.length)).map((v,i)=> "ex"));
    console.log("booklist : ",boollist)
    var onClick = (count)=>{
        console.log("conclick : " , boollist[count])
        if(boollist[count] === "on"){
            boollist[count] = "off"
        }else{
            boollist[count] = "on"
        }
        setBoollist([...boollist])
    }

    var answer_count = 0
    var span_count = 0
    var linelist = [];

    var splitline = data.split('<br>')
    console.log("splitline : ",splitline)
    splitline.map((lineb) =>{
        var lineTag = "" 
        var line = pipeSpace(lineb.trim())
        var spanlist = []
        var templine = line
        lineTag = dotChecker(line) ? " circle" : lineTag
        lineTag = pipeChecker(line) ? " pipe" : lineTag
        var mablelist = changeMarbleNum(line)
        
        if(mablelist.length === 2){
            spanlist.push(mablelist[0])
            templine = mablelist[1]
            lineTag = " marble"
        }
        
        var splitstring = templine.split(/[{}]+/)
        console.log("splitstring : ", splitstring)
        if(splitstring.length%2 === 1){
            splitstring.map((split, index)=>{
                if(index%2 === 0){
                    if(split.length !== 0){
                        spanlist.push(<span>{split}</span>)
                        span_count += 1;
                    }
                }else{
                    console.log("split : ", split)
                    console.log("answer_count : ", answer_count)
                    var clickindex = answer_count
                    var spantag = (
                    <span className={'answer '+(boollist[clickindex])} onClick={()=>{onClick(clickindex)}}>
                        <div className={'answer_img'}>{split}</div>
                        {split}
                    </span>
                    )
                    spanlist.push(spantag)
                    console.log("answer_count : ", answer_count)
                    answer_count += 1;
                }
                return true
            })
        }else{
            spanlist.push({data})
            console.log("괄호 갯수가 이상한데...?")
        }
        console.log("spanlist : ",spanlist)
        var linetag = <div className={`line`+ lineTag}>{spanlist}</div>;
        linelist.push(linetag)
        return true
    })

    var returnvalue = <div className={'mindcontent'}>{linelist}</div>
    if(answer_count === 1 && linelist.length === 1 && span_count === 0){
        console.log('linelist : ' ,linelist);
        console.log(linelist[0][0]);
        returnvalue = <div className={'mindcontent '+(boollist[spanindex(0)])} onClick={()=>{onClick(0)}}>
            <div className={'mindcontent_img'}/>
                {linelist}
            </div>
    }

    console.log(returnvalue);
    return (
        returnvalue
    )    
}

export default MindContent;