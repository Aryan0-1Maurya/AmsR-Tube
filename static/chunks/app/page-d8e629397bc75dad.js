(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8252:function(e,n,t){Promise.resolve().then(t.bind(t,6126))},7799:function(e,n,t){"use strict";t.d(n,{v:function(){return Apifetch}});var i=t(9222);let o={params:{maxResults:"50"},headers:{"X-RapidAPI-Key":"8fd3ab2b05mshd4fc82a92515ccbp12f8c5jsn83b1b530479b","X-RapidAPI-Host":"youtube-v31.p.rapidapi.com"}},Apifetch=async e=>{let{data:n}=await i.Z.get("".concat("https://youtube-v31.p.rapidapi.com","/").concat(e),o);return n}},1021:function(e,n,t){"use strict";t.d(n,{Gl:function(){return Z},U:function(){return w},bd:function(){return g},oI:function(){return _},rN:function(){return y},tz:function(){return C}});var i=t(7437),o=t(9450),a=t(2303),s=t(9329),l=t(921),r=t(3091),d=t(3929),c=t(4510),u=t(6776),x=t(7370),h=t(130),m=t(7826),p=t(5644),f=t(1593),v=t(2730),j=t(8192),b=t(2274);let g=[{name:"Kids",icon:(0,i.jsx)(a.default,{})},{name:"New",icon:(0,i.jsx)(v.default,{})},{name:"Aryan Maurya Mr perfect",icon:(0,i.jsx)(s.default,{})},{name:"Trending",icon:(0,i.jsx)(j.default,{})},{name:"News",icon:(0,i.jsx)(b.default,{})},{name:"Web development",icon:(0,i.jsx)(s.default,{})},{name:"Shorts",icon:(0,i.jsx)(h.default,{})},{name:"App development",icon:(0,i.jsx)(s.default,{})},{name:"Music",icon:(0,i.jsx)(o.default,{})},{name:"Education",icon:(0,i.jsx)(c.default,{})},{name:"Podcast",icon:(0,i.jsx)(h.default,{})},{name:"Movie",icon:(0,i.jsx)(l.default,{})},{name:"Gaming",icon:(0,i.jsx)(r.default,{})},{name:"Live",icon:(0,i.jsx)(d.default,{})},{name:"Sport",icon:(0,i.jsx)(p.default,{})},{name:"Fashion",icon:(0,i.jsx)(x.default,{})},{name:"Beauty",icon:(0,i.jsx)(u.default,{})},{name:"Comedy",icon:(0,i.jsx)(m.default,{})},{name:"Gym",icon:(0,i.jsx)(p.default,{})},{name:"Crypto",icon:(0,i.jsx)(f.default,{})}],y="/channel/UCmXmlB4-HJytD7wek0Uo97A",Z="/video/GDa8kZLNhJ4",w="AmsRTube",C="Aryan Maurya a greate developer and programmer with musical journy",_="http://dergipark.org.tr/assets/app/images/buddy_sample.png"},6973:function(e,n,t){"use strict";var i=t(7437),o=t(6507),a=t(8323),s=t(6182),l=t(5269);t(2265);var r=t(1021),d=t(1396),c=t.n(d),u=t(2352);n.Z=e=>{var n,t,d,x,h,m,p,f;let{channelDetail:v,marginTop:j}=e;return(0,i.jsx)(o.Z,{sx:{boxShadow:"none",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",width:{xs:"356px",md:"320px",height:"326px",margin:"auto",marginTop:j}},children:(0,i.jsx)(c(),{href:"/channel/".concat(null==v?void 0:null===(n=v.id)||void 0===n?void 0:n.channelId),children:(0,i.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",color:"#fff"},children:[(0,i.jsx)(s.Z,{image:(null==v?void 0:null===(x=v.snippet)||void 0===x?void 0:null===(d=x.thumbnails)||void 0===d?void 0:null===(t=d.high)||void 0===t?void 0:t.url)||r.oI,alt:null==v?void 0:null===(h=v.snippet)||void 0===h?void 0:h.title,sx:{borderRadius:"50%",height:"180px",width:"180px",mb:2,border:"1px solid #e3e3e3"}}),(0,i.jsxs)(l.Z,{variant:"h6",children:[null==v?void 0:null===(m=v.snippet)||void 0===m?void 0:m.title,(0,i.jsx)(u.Z,{sx:{fontSize:14,color:"gray",ml:"5px"}})]}),(null==v?void 0:null===(p=v.statistics)||void 0===p?void 0:p.subscriberCount)&&(0,i.jsx)(l.Z,{sx:{fontSize:"15px",fontWeight:500,color:"gray"},children:parseInt(null==v?void 0:null===(f=v.statistics)||void 0===f?void 0:f.subscriberCount).toLocaleString("en-US")})]})})})}},6126:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Youtubecomponent_Homepage}});var i=t(7437),o=t(2265),a=t(3457),s=t(1021),Youtubecomponent_Sidebar=e=>{let{selectedCategory:n,setselectedCategroy:t}=e;return(0,i.jsx)(a.Z,{direction:"row",sx:{overflowY:"auto",height:{xs:"auto",md:"95%"},flexDirection:{md:"column"}},children:s.bd.map(e=>(0,i.jsxs)("button",{className:"category-btn",onClick:()=>t(e.name),style:{background:e.name===n&&"#FC1503",color:"white"},children:[(0,i.jsx)("span",{style:{color:e.name===n?"white":"red"},children:e.icon}),(0,i.jsx)("span",{style:{opacity:e.name===n?"1":"0.8"},children:e.name})]},e.name))})},l=t(6507),r=t(5269),d=t(7799),c=t(4324),Youtubecomponent_Homepage=()=>{let[e,n]=(0,o.useState)("Kids"),[t,s]=(0,o.useState)([]),getdata=async()=>{let n=await (0,d.v)("search?part=snippet&q=".concat(e));s(n.items)};return(0,o.useEffect)(()=>{getdata()},[e]),(0,i.jsxs)(a.Z,{sx:{flexDirection:{xs:"column",md:"row"},background:"#000"},children:[(0,i.jsxs)(l.Z,{sx:{height:{xs:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d",px:{xs:0,md:2}},children:[(0,i.jsx)(Youtubecomponent_Sidebar,{selectedCategory:e,setselectedCategroy:n}),(0,i.jsx)(r.Z,{style:{color:"white"},children:"\xa9 By Aryan Maurya 2023"})]}),(0,i.jsxs)(l.Z,{p:2,sx:{overflowY:"auto",height:"90vh",flex:2},children:[(0,i.jsxs)(r.Z,{children:[e," ",(0,i.jsx)("span",{style:{color:"$F31503"},children:"Videos"})]}),(0,i.jsx)(c.Z,{videos:t})]})]})}},4324:function(e,n,t){"use strict";t.d(n,{Z:function(){return Youtubecomponent_Videos}});var i=t(7437),o=t(3457),a=t(6507);t(2265);var s=t(2352),l=t(5984),r=t(6182),d=t(8323),c=t(5269),u=t(1396),x=t.n(u),h=t(1021),Youtubecomponent_VideoCard=e=>{var n,t;let{video:{id:{videoId:o},snippet:a}}=e;return(0,i.jsxs)(l.Z,{sx:{width:{xs:"100%",sm:"358px",md:"320px"},boxShadow:"none",borderRadius:0},children:[(0,i.jsx)(x(),{href:o?"/video/".concat(o):h.Gl,children:(0,i.jsx)(r.Z,{image:null==a?void 0:null===(t=a.thumbnails)||void 0===t?void 0:null===(n=t.high)||void 0===n?void 0:n.url,alt:null==a?void 0:a.title,sx:{width:{xs:"100%",sm:"358px",md:"320px"},height:180}})}),(0,i.jsxs)(d.Z,{sx:{background:"#1e1e1e",height:"106px"},children:[(0,i.jsx)(x(),{href:o?"/video/".concat(o):h.Gl,children:(0,i.jsx)(c.Z,{variant:"subtitle1",fontWeight:"bold",color:"#fff",children:(null==a?void 0:a.title.slice(0,60))||h.tz.slice(0,60)})}),(0,i.jsx)(x(),{href:(null==a?void 0:a.channelId)?"channel/".concat(null==a?void 0:a.channelId):h.rN,children:(0,i.jsxs)(c.Z,{variant:"subtitle2",fontWeight:"bold",color:"gray",children:[(null==a?void 0:a.channelTitle.slice(0,60))||h.U.slice(0,60),(0,i.jsx)(s.Z,{sx:{fontSize:12,color:"gray",ml:"5px"}})]})})]})]})},m=t(6973),Youtubecomponent_Videos=e=>{let{videos:n,direction:t}=e;return(0,i.jsx)(o.Z,{direction:t||"row",flexWrap:"wrap",justifyContent:"start",gap:2,children:n.map((e,n)=>(0,i.jsxs)(a.Z,{children:[e.id.videoId&&(0,i.jsx)(Youtubecomponent_VideoCard,{video:e}),e.id.channelId&&(0,i.jsx)(m.Z,{channelDetail:e})]},n))})}}},function(e){e.O(0,[407,383,971,472,744],function(){return e(e.s=8252)}),_N_E=e.O()}]);