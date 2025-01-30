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
            __SYD.audioSwitch(),
            __SYD.twitter(),
            __SYD.tg(),
            __SYD.c_a(),
            __SYD.maxMin_btn()
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

__SYD.twitter = () =>{
    return __c(
        "a",
        {
            style:`position:fixed;top:70px;right:15px;background-image:url(./assets/image/x.png);background-size:cover;height:50px;width:50px;cursor:pointer;`,
            href:"#",
            title:"Twitter Link"
        }
    )
}

__SYD.tg = () =>{
    return __c(
        "a",
        {
            style:`position:fixed;top:125px;right:15px;background-image:url(./assets/image/tg.png);background-size:cover;height:50px;width:50px;cursor:pointer;`,
            href:"https://t.me/batmoon_sol",
            title:"telegram channel"
        }
    )
}

__SYD.c_a = () =>{
    return __c(
        'div',
        {
            style:'height:50px;width:50px;background-color:#d83f2a;cursor:pointer;background-size:50%;background-image:url("./assets/image/copy.png");position:fixed;top:180px;right:15px;border-radius:50%;',
            class:'btn_copy',
            title:"copy contract adx."
        },[
            __c("span" , {style:"min-width:max-content;position:absolute;top:calc(100% + 5px); left:50%;transform:translateX(-50%);text-transform:capitalize;color:#fff;font-weight:900;font-family:tahoma, sans serif;"},["copy C.A"])
        ],{
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    navigator.clipboard.writeText('c.a adx')
                    alert('contract address copied')
                }
            }
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

__SYD.maxMin_btn = () =>{
    return __c(
        "div",
        {
            style:`position:fixed;top:260px;right:15px;background-image:url(./assets/image/${__p(['maxMin_btn','url'] , 'max')}.png);background-size:cover;height:50px;width:50px;cursor:pointer;`,
        },
        [

        ],
        {
            genericStyle:["bg_fit"],
            createState:{
                stateName:"maxMin_btn",
                state:{
                    url:"play"
                }
            },
            events:{
                onclick:e =>{
                    const state = __g("maxMin_btn");
                    state.url = state.url === "min" ? "max" : "min";
                    // const video = getVideo1();
                    if(document.fullscreenElement)
                    {
                        document.exitFullscreen()
                    }
                    else
                    {
                        document.body.requestFullscreen()
                    }
                    __u("maxMin_btn" , {type:"a" , value:state})
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
