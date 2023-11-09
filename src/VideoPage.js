import "./VideoPage.css";
import YT_LG from "./downloadyout.png";
import YUT_PG from "./yout logo.png";
import chanel from "./Videopage.json";
import Videopvcom from "./Videopvcom";
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import videos from "./video.json";

const VideoPage = () => {
    const Params = useParams();
    const id = Params.id;
    function finderFunction(video){
        return video.id == id;
    }

    const [likes, setLikes] = useState(localStorage.getItem(id +"likes"));
    const [dislikes, setDislikes] = useState(30);
    const video = videos.find(finderFunction)
    function onlike(){
        if (likes == "true"){
            localStorage.setItem(id + "_liked",false)
            setLikes("false");
        }
        else{
            localStorage.setItem(id + "_Unliked",true)
            setLikes("true");
        }
    }
    const handleDislike = () => {
      setDislikes(dislikes + 1);
    };
    const isloggedId = localStorage.getItem("LoggedIn")
    function onLogout(){
        localStorage.setItem("LoggedIn",false);
        window.location.href = "/";
    }
    function onSubscribe(){
        if (subscribe == "true"){
            localStorage.setItem(id + "_Subscribed",false)
            setSubscribed("false");
        }
        else{
            localStorage.setItem(id + "_Unsubscribed",true)
            setSubscribed("true");
        }
    }
    
    const [subscribe, setSubscribed] = useState(localStorage.getItem(id + "subscribe"));
    return (
        <div>
            <div class="wrapper">
                <div id="item1">
                    <div id="si1"><img src={YUT_PG} width="75px" height="40px" /></div>
                    <div id="si2"><img src={YT_LG} width="135px" height="40px" /></div>
                </div>
                <div id="item2">
                    <div id="si3">
                        <input type="text" placeholder="Search" aria-label="Search" id="search" />
                    </div>
                    <div id="si4">
                        <button className="imgsrh">Search</button>
                    </div>
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
                <div id="strg">
                    <div id="video"><iframe width="100%" height="100%"
                        src={"https://www.youtube.com/embed/" + id + "?rel=1&mute=1&autoplay=1"} title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe></div>
                    <div id="rest">
                        <div id="title"><b> {video.title} </b> </div>
                        <div id="chanel">
                            <div id="cimg">
                                <img src={video.chanel.thumbnail}
                                    height="100%" width="100%" />
                            </div>
                            <div id="cnam">
                                <div id="cna"><b>{video.channelName}</b></div>
                                <div id="csu">{video.views}</div>
                            </div>
                            <div id="sub">
                                <button className={
                                    subscribe == "true" ? "subchannelButton" : "channelbutton"
                                }onClick={onSubscribe}>Subscribe </button>
                            </div>
                            <div id="ot1">
                            <button className={ 
                                    likes == "true" ? "likesButton" : "likedbutton"
                                }onClick={onlike}>Like</button>
                            </div>
                            <div id="ot2">
                            <button onClick={handleDislike} id="myButton3">Dislike</button>
                            <span>{dislikes}</span></div>
                            <div id="ot3"><button id="myButton4">Share</button></div>
                        </div>
                        <div id="des">{video.description}
                        </div>
                    </div>
                </div>
                <div id="vede">
                    {videos.map(function (videoItem) {
                        return (<Videopvcom
                            title={videoItem.title}
                            cname={videoItem.channelName}

                            link={videoItem.thumbnail.url}
                            Dura={chanel.subscribers}></Videopvcom>

                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default VideoPage;