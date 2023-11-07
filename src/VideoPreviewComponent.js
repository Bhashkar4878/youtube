import "./HomeComponent.css"

function VideoPreviewComponent(props){
const title = props.title;
const cname = props.cname;
const link = props.link;
const Dura = props.Dura;
const cimg = props.cimg;
const id = props.id;
return (
        <div className="video1">
            <a href={"/vedioPage/"+id}>
             <div className="vimg">
                <img className="vimg1" src={link}></img>
             </div>
            </a>
            <div className="cpart">
                <div className="cimg">
                    <img className="cimg1" src={cimg}></img>
                </div>
                <div className="cname">
                    <div className="cname1"><b>{title}</b></div>
                </div>
            </div>
            <div className="tpart">
                <div className="ititle">
                    <b>{cname}</b>
                </div>
                <div className="atitle">
                    {Dura}
                </div>
            </div>
        </div>
        );

}
export default VideoPreviewComponent;