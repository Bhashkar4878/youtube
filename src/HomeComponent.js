import "./HomeComponent.css";
import VideoPreviewComponent from "./VideoPreviewComponent";
import YT_LG from "./downloadyout.png";
import YUT_PG from "./yout logo.png";
import side from "./Side.png";
import Videos from "./video.json";
import channel from "./Videopage.json";
// import loginComponent from "./loginComponent";


function HomeComponent() {
    return (
        <div>
            <div class="wrapper">
                <div id="item1">
                    <div id="si1"><img src={YUT_PG}
                        height="40px"
                        width="75px" />
                    </div>
                    <div id="si2">
                        <img src={YT_LG}
                            height="40px"
                            width="135px" />
                    </div>
                </div>
                <div id="item2">
                    <div id="si3"><input type="text" placeholder="Search" aria-label="Search" id="search"/>
                    </div>
                    <div id="si4"> <button className="imgsrh">Search</button></div>
                </div>
                
                    <div id="item3">
                    <a href="/login"><button id="myButton"><b>Sign in</b></button>   </a>
              </div>
             
            </div>
            <div class="body">
                <div id="str">
                    <img src={side} id="side"></img>
                </div>
                <div id="ved">
                    {Videos.map(function(video,index){
                        return(  <VideoPreviewComponent 
                            title={video.title}
                            cname={video.channelName}
                            // clink={channel.id}
                            link={video.thumbnail.url}
                            id={video.id}>
                            </VideoPreviewComponent>

                        )
                    })}
                        {channel.map(function(chanel){
                                return( <VideoPreviewComponent
                                    Dura={chanel.subscribers} 
                                    cimg={chanel.thumbnail}>
                                    </VideoPreviewComponent>
                                )}
                            )}
                
                </div>
            </div>
        </div>
    )


}
export default HomeComponent;