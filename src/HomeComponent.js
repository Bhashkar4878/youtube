import "./HomeComponent.css";
import VideoPreviewComponent from "./VideoPreviewComponent";
import YT_LG from "./downloadyout.png";
import YUT_PG from "./yout logo.png";

import Videos from "./video.json";




function HomeComponent() {
    const isloggedId = localStorage.getItem("LoggedIn")
    function onLogout(){
        localStorage.setItem("LoggedIn",false);
        window.location.href = "/";
    }
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
                    {isloggedId == "true" ? (<div><button onClick={onLogout} id="myButton">Logout </button></div>) : (<div>
                        <a href="/login">
                         <button id="myButton">Sign in </button>
                         </a>
                         </div>)}
              </div>
             
            </div>
            <div class="body">
                <div id="str">
                <div className="sidebar"> 
          <div className="sidefeature">
            <div className="sideline"><i className="fa-solid fa-bars"></i><br/></div>
            <div className="sidehome"> <a href="newyoutube.html">    <i className="fa-solid fa-house"></i>
                  <br/>Home</a></div>
            <div className="sidetrend">
                <a href="trending.html">
                    <i className="fa-solid fa-fire"></i> <br/> Trending </a>
            </div>
            <div className="sidesub"> 
                <a href="subscription.html"><i className="fa-solid fa-clapperboard"></i>Subscription</a>
            </div>
            <div className="sidelib"> 
                <a href="library.html"><i className="fa-solid fa-folder"></i><br/> Library</a>
            </div>
          </div>


                    </div>

                </div>
                <div id="ved">
                    {Videos.map(function(video,index){
                        return(  <VideoPreviewComponent 
                            title={video.title}
                            cname={video.channelName}

                            link={video.thumbnail.url}
                            Dura={video.chanel.subscribers} 
                            cimg={video.chanel.thumbnail}
                            id={video.id}>
                            </VideoPreviewComponent>

                        )
                    })}

                </div>
            </div>
        </div>
    )


}
export default HomeComponent;