(self.webpackChunkskyline=self.webpackChunkskyline||[]).push([[979],{1848:(e,t,r)=>{var s,o=r(2897).default,i=Object.create,l=Object.defineProperty,a=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,u=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,r,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of n(t))p.call(e,o)||o===r||l(e,o,{get:()=>t[o],enumerable:!(s=a(t,o))||s.enumerable});return e},d=(e,t,r)=>(((e,t,r)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>b}),e.exports=(s=c,h(l({},"__esModule",{value:!0}),s));var y=((e,t,r)=>(r=null!=e?i(u(e)):{},h(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)))(r(5043)),m=r(2206),f=r(1520);class b extends y.Component{constructor(){super(...arguments),d(this,"callPlayer",m.callPlayer),d(this,"duration",null),d(this,"currentTime",null),d(this,"fractionLoaded",null),d(this,"mute",(()=>{this.setVolume(0)})),d(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),d(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){(0,m.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((r=>{if(!this.iframe)return;const{PLAY:s,PLAY_PROGRESS:i,PAUSE:l,FINISH:a,ERROR:n}=r.Widget.Events;t||(this.player=r.Widget(this.iframe),this.player.bind(s,this.props.onPlay),this.player.bind(l,(()=>{this.duration-this.currentTime<.05||this.props.onPause()})),this.player.bind(i,(e=>{this.currentTime=e.currentPosition/1e3,this.fractionLoaded=e.loadedProgress})),this.player.bind(a,(()=>this.props.onEnded())),this.player.bind(n,(e=>this.props.onError(e)))),this.player.load(e,o(o({},this.props.config.options),{},{callback:()=>{this.player.getDuration((e=>{this.duration=e/1e3,this.props.onReady()}))}}))}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seekTo",1e3*e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.fractionLoaded*this.duration}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return y.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:t,frameBorder:0,allow:"autoplay"})}}d(b,"displayName","SoundCloud"),d(b,"canPlay",f.canPlay.soundcloud),d(b,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerSoundCloud.4cb671e3.chunk.js.map