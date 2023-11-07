import "./HomeComponent.css";
// import searchic from "./searchicon.png";
import VideoPreviewComponent from "./VideoPreviewComponent";
import YT_LG from "./downloadyout.png";
import YUT_PG from "./yout logo.png";
// import other from "./other.png";
import side from "./Side.png";
import Videos from "./video.json";
import chanel from "./Videopage.json";

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
                <div id="item3"><button id="myButton"><b>Sign in</b></button>
                </div>
            </div>
            <div class="body">
                <div id="str">
                    <img src={side} id="side"></img>
                </div>
                <div id="ved">
                    {Videos.map(function(video){
                        return(  <VideoPreviewComponent 
                            title={video.title}
                            cname={video.channelName}
                            clink={chanel.id}
                            link={video.thumbnail.url}
                            Dura="195M views . 3min" 
                            cimg={chanel.thumbnail}></VideoPreviewComponent>

                        )
                    })}
                    {/* <VideoPreviewComponent  title="Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir by Jasleen Royal" cname="Jasleen Royal" clink="https://www.youtube.com/channel/UCmkWj7Sft1lt1VHX43BbAfA" link="https://i.ytimg.com/vi/RLzC55ai0eo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq2nyJ3dp1VKL4P2KmQp3CEw7l_w"
                        Dura="195M views . 3min" cimg="https://yt3.ggpht.com/eDLpYMh0tmeKXQ-Nb0bWqy2xc9ohGRF9yiqOdN5XuqpVvoJraIUGFFwlzh_tsFIEaSox5MvxAg=s88-c-k-c0x00ffffff-no-rj"></VideoPreviewComponent>
                    <VideoPreviewComponent title="SUFFER | REAPER RAPS |" cname="reaper raps" link="https://i.ytimg.com/vi/1VhTDSxRj4o/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2Ztr-1NKHLVNXc-sTEf8g8JEuEQ"
                        Dura="245 views . 2min 23s" cimg="https://yt3.ggpht.com/srRLSohGvbsD1tluv38uGUkvUIR0pV-leUEFfggAnORb6bsNVeWO4WhoWn_vLkXCgiyfo8v-=s68-c-k-c0x00ffffff-no-rj"></VideoPreviewComponent>
                   <VideoPreviewComponent title="kali kali zulfon ke - madhur sharma | Ustad Nusrat Fateh Ali khan | slow and reverb version" cname="World Photography" link="https://i.ytimg.com/vi/kJOGN-w12Qo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhKIGUoWTAP&rs=AOn4CLBrsmuAqQnfVi8vpl20XLKpWMGQHw"
                        Dura="24M views . 3min 45s" cimg="https://yt3.ggpht.com/VG5LUHGdyfmB6kxD7OpAUfJK3SQrT7ZyaQqfgrqfhYzmycqVSw4mnmswOi1L6S5hlAa4ygBtKwg=s68-c-k-c0x00ffffff-no-rj"></VideoPreviewComponent>
                   <VideoPreviewComponent title="Alan Walker & Ava Max - Alone, Pt. II by Alan Walker" cname="Alan Walker" link="https://i.ytimg.com/vi/HhjHYkPQ8F0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMchet0_oSvRkm-HXGSWM_uWZY3Q"
                        Dura="324M views . 3min 12s" cimg="https://yt3.ggpht.com/5NPuTDxN3DB7JiyOgwuPv5OV9lGG4_-AUYsFVpr-WLr11Lqi90krGfWmju26UhWmilRDA1qaEg=s88-c-k-c0x00ffffff-no-rj"></VideoPreviewComponent>
                   <VideoPreviewComponent title="Puri Tu | AI Music Video | Ruhfikra | New Song by Ruhfikra" cname="Ruhfikra" link="https://i.ytimg.com/vi/a5a0xVk9mMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIByBSRAFd6ModYfSxWeaTEoIV6A"
                        Dura="1.1M views . 4min 16s" cimg="https://yt3.ggpht.com/ZsRHNdbRYINvYovL4AwW3wMcejuiZcbqVd0otSBNghodE5ftQ4H0FFAYXOVKOcgHHv7xEivMTXA=s88-c-k-c0x00ffffff-no-rj"></VideoPreviewComponent>
                    <VideoPreviewComponent title="Alan Walker, Sabrina Carpenter & Farruko  - On My Way by Alan Walker" cname="Alan Walker" link="https://i.ytimg.com/vi/dhYOPzcsbGM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAudZaE2MOvxewPBMC-iUpj2wIDhA" */}
                        {/* Dura="542M views . 3min 32s" cimg="https://yt3.ggpht.com/5NPuTDxN3DB7JiyOgwuPv5OV9lGG4_-AUYsFVpr-WLr11Lqi90krGfWmju26UhWmilRDA1qaEg=s88-c-k-c0x00ffffff-no-rj"></VideoPreviewComponent> */}




                </div>
            </div>
        </div>
    )


}
export default HomeComponent;