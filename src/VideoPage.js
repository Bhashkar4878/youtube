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
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const video = videos.find(finderFunction)
    const handleLike = () => {
      setLikes(likes + 1);
    };
  
    const handleDislike = () => {
      setDislikes(dislikes + 1);
    };
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
                    <a href="/login"> 
                     <button id="myButton">Sign in </button>
                </a>
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
                                <img src="https://yt3.ggpht.com/UzE1bgqrjeLCsaOIuPIEzB55GWz7d2koeM9xjWL7Sv-b0jJWkpr_nnJPPD65EhRakW0TxbXmYA=s88-c-k-c0x00ffffff-no-rj"
                                    height="100%" width="100%" />
                            </div>
                            <div id="cnam">
                                <div id="cna"><b>{video.channelName}</b></div>
                                <div id="csu">{video.views}</div>
                            </div>
                            <div id="sub">
                                <button id="myButton2">Subscribe </button>
                            </div>
                            <div id="ot1">
                            <button onClick={handleLike} id="myButton3">Like</button>
                                    <span>{likes}</span>
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
                    {chanel.map(function (chanel) {
                        return (<Videopvcom
                            title={chanel.name}
                            cname={chanel.id}
                            // clink="https://www.youtube.com/channel/UCmkWj7Sft1lt1VHX43BbAfA"
                            link={chanel.thumbnail}
                            Dura={chanel.subscribers}></Videopvcom>

                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default VideoPage;