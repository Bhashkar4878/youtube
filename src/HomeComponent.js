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
                    <div id="str12">
                        <div id="str121">
                            <button id="myButton12">Home</button>
                        </div>
                        <div id="str122">
                            <button id="myButton12">Shorts</button>
                        </div>
                        <div id="str123">
                            <button id="myButton12">Subscriptions</button>
                        </div>
                    </div>
                    <div id="str13">
                    <div id="str131">
                            <button id="myButton12">You</button>
                        </div>
                        <div id="str132">
                            <button id="myButton12">History</button>
                        </div>
                    </div>
                    <div id="str14">
                        {/* <div id="str141"> */}
                        <b>Sign in to procede</b>
                        {/* </div> */}
                        <div id="str142">
                        <a href="/login"><button id="myButton12"><b>Sign in</b></button></a>
                        </div>
                    </div>
                    <div id="str15">
                        <b>Explore</b>
                        <div id="str121">
                            <button id="myButton12">Home</button>
                        </div>
                        <div id="str122">
                            <button id="myButton12">Shorts</button>
                        </div>
                        <div id="str123">
                            <button id="myButton12">Subscriptions</button>
                        </div>
                        <div id="str121">
                            <button id="myButton12">Home</button>
                        </div>
                        <div id="str122">
                            <button id="myButton12">Shorts</button>
                        </div>
                        <div id="str123">
                            <button id="myButton12">Subscriptions</button>
                        </div>

                    </div>
                    {/* <img src={side} id="side"></img> */}
                </div>
                <div id="ved">
                    {Videos.map(function(video,index){
                        return(  <VideoPreviewComponent 
                            title={video.title}
                            cname={video.channelName}
                            // clink={channel.id}
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