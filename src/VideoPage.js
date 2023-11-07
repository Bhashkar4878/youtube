import "./VideoPage.css";
import YT_LG from "./downloadyout.png";
import YUT_PG from "./yout logo.png";
import chanel from "./Videopage.json";
import Videopvcom from "./Videopvcom";
import LikeDislikeButton from './LikeDislikeButton';
function VideoPage() {
    return (
        <div>
            <div class="wrapper">
                <div id="item1">
                    <div id="si1"><img src={YUT_PG} width="75px" height="40px" /></div>
                    <div id="si2"><img src={YT_LG} width="135px" height="40px" /></div>
                </div>
                <div id="item2">
                    <div id="si3">
                    <input type="text" placeholder="Search" aria-label="Search" id="search"/>
                    </div>
                    <div id="si4">
                        <button className="imgsrh">Search</button>
                    </div>
                </div>
                <div id="item3">
                    <button id="myButton">Sign in </button>
                </div>
            </div>
            <div class="body">
                <div id="strg">
                    <div id="video"><iframe width="100%" height="100%"
                        src="https://www.youtube.com/embed/VedXXaCLFhg?si=KwbAPvZorhnNvXp-autoplay=1" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe></div>
                    <div id="rest">
                        <div id="title"><b> Ram Siya Ram Siya Ram Jay Jay Ram | राम सिया राम सिया राम जय जय राम | 4K Sound </b> </div>
                        <div id="chanel">
                            <div id="cimg">
                                <img src="https://yt3.ggpht.com/UzE1bgqrjeLCsaOIuPIEzB55GWz7d2koeM9xjWL7Sv-b0jJWkpr_nnJPPD65EhRakW0TxbXmYA=s88-c-k-c0x00ffffff-no-rj"
                                    height="100%" width="100%" />
                            </div>
                            <div id="cnam">
                                <div id="cna">⚡Hindi Mashup ⚡</div>
                                <div id="csu">16k subscribers</div>
                            </div>
                            <div id="sub">
                                <button id="myButton2">Subscribe </button>
                            </div>
                            <div id="ot1">
                            <LikeDislikeButton />
                            </div>
                            <div id="ot2"><button id="myButton3">share </button></div>
                            <div id="ot3"><button id="myButton4">... </button></div>
                        </div>
                        <div id="des">Ram Siya Ram Siya Ram Jay Jay Ram | राम सिया राम सिया राम जय जय राम | 4K Sound

                            Lyrics:

                            राम सिया राम सिया राम
                            जय जय राम,

                            मंगल भवन अमंगल हारी
                            द्रबहु सुदसरथ अचर बिहारी,
                            राम सिया राम सिया राम....

                            दीन दयाल बिरिदु संभारी
                            हरो नाथ मम संकट भारी,
                            राम सिया राम सिया राम.....

                            होइहै वही जो राम रचि राखा,
                            को करे तरफ़ बढ़ाए साखा,
                            राम सिया राम सिया राम.....

                            जाकी रही भावना जैसी,
                            प्रभु मूरति देखी तिन तैसी
                            राम सिया राम सिया राम....

                            जा पर किरपा राम की होई,
                            ता पर किरपा सबकी होई,
                            राम सिया राम सिया राम

                            All Rights to Music Label Co. & No Copyright Infringement Intended.

                            Uploaded for Promotional and preview Purposes only If any artist or label has copyright issues
                            with my videos, please contact me
                            Sandeekumar291099@gmail.com

                            ---------------------------------------------------------------------
                            DISCLAIMER: This Following Audio/Video is Strictly meant for Promotional purpose. We Do not Wish
                            to make any Commercial Use of this & Intended to Showcase the Creativity Of the Artist Involved.

                            The Original Copyright (s) is (are) Solely owned by the Companies/Original-
                            Artist(s)/Record-label(s).All the contents are intended to Showcase the Creativity of the artist
                            involved and are strictly done for Promotional purpose.

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
                    {/* <div class="video11">
                    <div id="videe">
                        <img src="https://i.ytimg.com/vi/W1XYpEoUWdA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHb27_PzNsh1f0GPz6eoGkShuc7A"
                            height="100%" width="100%" />
                    </div>
                    <div id="otht">
                        <div id="tile"><b>Virat Kohli Heart Winning Gesture for Sachin Tendulkar after Winning</b></div>
                        <div id="cn">The Cricketers' World</div>
                        <div id="ct">115k views . 56sec</div>
                    </div>
                </div>
                <div class="video11">
                    <div id="videe">
                        <img src="https://i.ytimg.com/vi/uX7FfXRlkMI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt24f634CuY4taQjDUhmvEbCMqHw"
                            height="100%" width="100%" />
                    </div>
                    <div id="otht">
                        <div id="tile"><b>Ravindra Jadeja in Funny Mode | Post Match Press Conference | INDvSA 2023</b>
                        </div>
                        <div id="cn">Cricket Cloud</div>
                        <div id="ct">2M views . 10min 34s</div>
                    </div>
                </div>
                <div class="video11">
                    <div id="videe">
                        <img src="https://i.ytimg.com/vi/w2z0XvBTuNw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9pQaoJ7_pvV5IMrJZmiMNGXMlBg"
                            height="100%" width="100%" />
                    </div>
                    <div id="otht">
                        <div id="tile"><b>Watch: Rohit Sharma full interview after South Africa match.🎤🇮🇳</b></div>
                        <div id="cn">Facts Nonhar</div>
                        <div id="ct">56k views . 7min 34s</div>
                    </div>
                </div>
                <div class="video11">
                    <div id="videe">
                        <img src="https://i.ytimg.com/vi/ZVIOuwMhDXA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdzn8jRbzTk8bbFu5ViI257cfbIQ"
                            height="100%" width="100%" />
                    </div>
                    <div id="otht">
                        <div id="tile"><b>Bhide ने लगाई गरम राख अपने सिर पे | Taarak Mehta Ka Ooltah Chashmah </b></div>
                        <div id="cn">LIV Comedy</div>
                        <div id="ct">25M views . 30min 56s</div>
                    </div>
                </div>
                <div class="video11">
                    <div id="videe">
                        <img src="https://i.ytimg.com/vi/VedXXaCLFhg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrbtRYNoKVaL3wGeULMfUpERfRMA"
                            height="100%" width="100%" />
                    </div>
                    <div id="otht">
                        <div id="tile"><b>Ram Siya Ram Siya Ram Jay Jay Ram | राम सिया राम सिया राम जय जय राम </b></div>
                        <div id="cn">⚡Hindi Mashup ⚡</div>
                        <div id="ct">1B views . 3min 25s</div>
                    </div>
                </div>

            </div>
                // </div>b */}
                </div>
                </div>
                </div>
                );
}
                export default VideoPage;