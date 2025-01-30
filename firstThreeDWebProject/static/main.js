import { __c, __g, __m, __p, __SYD, __u, __v } from "./sydneyDom_v2.js"
import {MainRenderInit} from "./threeDRenderScript.js"
import { getVideo1 } from "./billBoard.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:"height:100vh;width:100vw;position:relative;"
        },
        [
            __SYD.MainCanvas(),
            __SYD.audioSwitch()
        ]
    )
}

__SYD.MainCanvas = () =>{
    return __c(
        "canvas",
        {
            style:"height:100%;width:100%;position:fixed;top:0;left:0;"
        },
        [],
        {
            type:'MainCanvas'
        }
    )
}

__SYD.audioSwitch = () =>{
    return __c(
        "div",
        {
            style:`position:fixed;top:15px;right:15px;background-image:url(./assets/image/${__p(['audioSwitch','url'] , 'play')}.png);background-size:cover;height:50px;width:50px;cursor:pointer;`,
        },
        [

        ],
        {
            genericStyle:["bg_fit"],
            createState:{
                stateName:"audioSwitch",
                state:{
                    url:"play"
                }
            },
            events:{
                onclick:e =>{
                    const state = __g("audioSwitch");
                    state.url = state.url === "play" ? "pause" : "play";
                    const video = getVideo1();
                    if(video[0].muted)
                    {
                        video[0].muted = false;
                        video[1].muted = false;
                    }
                    else
                    {
                        video[0].muted = true;
                        video[1].muted = true;
                    }
                    __u("audioSwitch" , {type:"a" , value:state})
                }
            }
        }
    )
}

window.onresize = () =>{
    __v['MainCanvas'].height = window.innerHeight;

    __v['MainCanvas'].width = window.innerWidth < 700 ? 700 : window.innerWidth;

    MainRenderInit()
}
__m(__SYD.container() , MainRenderInit);
