(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),i=n.n(l),o=n(150),c=n(153),s=n(159),d=n(160),m=n(162),u=n(171),h=n(151),p=n(157),g=Object(o.c)(h.b).withConfig({displayName:"endpoint__MainContainer",componentId:"efkpmr-0"})(["text-align:center;"]),f=o.c.div.withConfig({displayName:"endpoint__Explanation",componentId:"efkpmr-1"})(["display:block;max-width:800px;margin:0 auto;text-align:left;"]),b=o.c.code.withConfig({displayName:"endpoint__JsonExampleBlock",componentId:"efkpmr-2"})(["display:inline-block;text-align:left;line-height:1.2em;padding:16px 18px;border-radius:4px;background:#eef;font-family:Lekton;font-size:",";white-space:pre;"],function(e){return e.fontSize}),v=function(e){var t=e.data;return r.a.createElement(b,null,JSON.stringify(t,void 0,2))};v.propTypes={data:i.a.object.isRequired};var y=o.c.dl.withConfig({displayName:"endpoint__Schema",componentId:"efkpmr-3"})(["display:inline-block;max-width:800px;margin:0;padding:10px;text-align:left;background:#efefef;clear:both;overflow:hidden;dt,dd{padding:0 1%;margin-top:8px;margin-bottom:8px;float:left;}dt{width:100px;clear:both;}dd{margin-left:20px;width:75%;}@media (max-width:600px){.data_table{text-align:center;}}"]);t.default=function(){return r.a.createElement(g,null,r.a.createElement(h.d,null),r.a.createElement(d.a,null),r.a.createElement(m.a,null),r.a.createElement(h.f,{id:"static-badge"},"Endpoint (Beta)"),r.a.createElement(p.a,{snippet:s.a+"/badge/endpoint.svg?url=...&style=..."}),r.a.createElement("p",null,"Endpoint response:"),r.a.createElement(v,{data:{schemaVersion:1,label:"hello",message:"sweet world",color:"orange"}}),r.a.createElement("p",null,"Shields response:"),r.a.createElement(h.a,{src:Object(c.b)(s.a,"hello","sweet world","orange"),alt:"hello | sweet world"}),r.a.createElement(f,null,r.a.createElement("p",null,"Developers rely on Shields for visual consistency and powerful customization options. As a service provider or data provider, you can use the endpoint badge to provide content while giving users the full power of Shields' badge customization."),r.a.createElement("p",null,"Using the endpoint badge, you can provide content for a badge through a JSON endpoint. The content can be prerendered, or generated on the fly. To strike a balance between responsiveness and bandwith utilization on one hand, and freshness on the other, cache behavior is configurable, subject to the Shields minimum. The endpoint URL is provided to Shields through the query string. Shields fetches it and formats the badge."),r.a.createElement("p",null,"The endpoint badge is a better alternative than redirecting to the static badge enpoint or generating SVG on your server:"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Separation_of_content_and_presentation"},"Content and presentation are separate.")," ","The service provider authors the badge, and Shields takes input from the user to format it. As a service provider you author the badge but don't have to concern yourself with styling. You don't even have to pass the formatting options through to Shields."),r.a.createElement("li",null,"Badge formatting is always 100% up to date. There's no need to track updates to the npm package, badge templates, or options."),r.a.createElement("li",null,"A JSON response is easy to implement; easier than an HTTP redirect. It is trivial in almost any framework, and is more compatible with hosting environments such as"," ",r.a.createElement("a",{href:"https://runkit.com/docs/endpoint"},"RunKit endpoints"),"."),r.a.createElement("li",null,"As a service provider you can rely on the Shields CDN. There's no need to study the HTTP headers. Adjusting cache behavior is as simple as setting a property in the JSON response."))),r.a.createElement("h4",null,"Schema"),r.a.createElement(f,null,r.a.createElement("p",null,"The schema may change during the beta period. Any changes will be posted here. After launch, breaking changes will trigger an increment to the `schemaVersion`.")),r.a.createElement(y,null,r.a.createElement("dt",null,"schemaVersion"),r.a.createElement("dd",null,"Required. Always the number ",r.a.createElement("code",null,"1"),"."),r.a.createElement("dt",null,"label"),r.a.createElement("dd",null,"Required. The left text, or the empty string to omit the left side of the badge. This can be overridden by the query string."),r.a.createElement("dt",null,"message"),r.a.createElement("dd",null,"Required. Can't be empty. The right text."),r.a.createElement("dt",null,"color"),r.a.createElement("dd",null,"Default: ",r.a.createElement("code",null,"lightgrey"),". The right color. Supports the eight named colors above, as well as hex, rgb, rgba, hsl, hsla and css named colors."),r.a.createElement("dt",null,"labelColor"),r.a.createElement("dd",null,"Default: ",r.a.createElement("code",null,"grey"),". The left color."),r.a.createElement("dt",null,"isError"),r.a.createElement("dd",null,"Default: ",r.a.createElement("code",null,"false"),". ",r.a.createElement("code",null,"true")," to treat this as an error badge. This prevents the user from overriding the color. In the future it may affect cache behavior."),r.a.createElement("dt",null,"namedLogo"),r.a.createElement("dd",null,"Default: none. One of the named logos supported by Shields or ",r.a.createElement("a",{href:"https://simpleicons.org/"},"simple-icons"),". Can be overridden by the query string."),r.a.createElement("dt",null,"logoSvg"),r.a.createElement("dd",null,"Default: none. An SVG string containing a custom logo."),r.a.createElement("dt",null,"logoColor"),r.a.createElement("dd",null,"Default: none. Same meaning as the query string. Can be overridden by the query string."),r.a.createElement("dt",null,"logoWidth"),r.a.createElement("dd",null,"Default: none. Same meaning as the query string. Can be overridden by the query string."),r.a.createElement("dt",null,"logoPosition"),r.a.createElement("dd",null,"Default: none. Same meaning as the query string. Can be overridden by the query string."),r.a.createElement("dt",null,"style"),r.a.createElement("dd",null,"Default: ",r.a.createElement("code",null,"flat"),". The default template to use. Can be overridden by the query string."),r.a.createElement("dt",null,"cacheSeconds"),r.a.createElement("dd",null,"Default: ",r.a.createElement("code",null,"300"),", min ",r.a.createElement("code",null,"300"),". Set the HTTP cache lifetime in seconds, which should respected by the Shields' CDN and downstream users. Values below 300 will be ignored. This lets you tune performance and traffic vs. responsiveness. The value you specify can be overridden by the user via the query string, but only to a longer value.")),r.a.createElement(u.a,{baseUrl:s.a}))}},151:function(e,t,n){"use strict";n.d(t,"j",function(){return h}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return g}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return b}),n.d(t,"a",function(){return y}),n.d(t,"h",function(){return E}),n.d(t,"g",function(){return w}),n.d(t,"c",function(){return k}),n.d(t,"i",function(){return x});n(26);var a=n(77),r=n.n(a),l=n(177),i=n.n(l),o=(n(178),n(0)),c=n.n(o),s=n(1),d=n.n(s),m=n(150);function u(){var e=i()(["\n  * {\n    box-sizing: border-box;\n  }\n"]);return u=function(){return e},e}var h=Object.freeze({autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"}),p=Object(m.a)(u()),g=m.c.div.withConfig({displayName:"common__BaseFont",componentId:"sc-16zh6vt-0"})(["font-family:Lekton,sans-serif;color:#534;"]),f=m.c.h2.withConfig({displayName:"common__H2",componentId:"sc-16zh6vt-1"})(["font-style:italic;margin-top:12mm;font-variant:small-caps;::before{content:'☙ ';}::after{content:' ❧';}"]),b=m.c.h3.withConfig({displayName:"common__H3",componentId:"sc-16zh6vt-2"})(["font-style:italic;"]),v=m.c.span.withConfig({displayName:"common__BadgeWrapper",componentId:"sc-16zh6vt-3"})(["padding:2px;height:",";vertical-align:middle;display:",";",";"],function(e){return e.height},function(e){return e.display},function(e){return e.clickable&&Object(m.b)(["cursor:pointer;"])}),y=function(e){var t=e.src,n=e.alt,a=void 0===n?"":n,l=e.display,i=void 0===l?"inline":l,o=e.height,s=void 0===o?"20px":o,d=e.clickable,m=void 0!==d&&d,u=r()(e,["src","alt","display","height","clickable"]);return c.a.createElement(v,{height:s,clickable:m,display:i},t?c.a.createElement("img",Object.assign({src:t,alt:a},u)):" ")};y.propTypes={src:d.a.string.isRequired,alt:d.a.string,display:d.a.oneOf(["inline","block","inline-block"]),height:d.a.string,clickable:d.a.bool};var E=m.c.input.withConfig({displayName:"common__StyledInput",componentId:"sc-16zh6vt-4"})(["height:15px;border:solid #b9a;border-width:0 0 1px 0;padding:0;text-align:center;color:#534;:focus{outline:0;}"]),w=Object(m.c)(E).withConfig({displayName:"common__InlineInput",componentId:"sc-16zh6vt-5"})(["width:70px;margin-left:5px;margin-right:5px;"]),k=Object(m.c)(E).withConfig({displayName:"common__BlockInput",componentId:"sc-16zh6vt-6"})(["width:40%;background-color:transparent;"]),x=m.c.hr.withConfig({displayName:"common__VerticalSpace",componentId:"sc-16zh6vt-7"})(["border:0;display:block;height:3mm;"])},152:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(79),n(26);var a=n(183);function r(e,t,n){var r=t?Object(a.resolve)(t,e):e,l=Object(a.parse)(r,!0);return l.query=Object.assign({},l.query,n),delete l.search,Object(a.format)(l)}},153:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return c});var a=n(77),r=n.n(a),l=(n(26),n(152)),i=n(156);function o(e,t,n,a,r){var o=Object(i.staticBadgeUrl)({label:t,message:n,color:a});return Object(l.a)(o,e,r)}function c(e,t,n,a,i,o){var c=void 0===o?{}:o,s=c.prefix,d=c.suffix,m=c.color,u=c.queryParams,h=void 0===u?{}:u,p=r()(c,["prefix","suffix","color","queryParams"]);return Object.assign(h,{label:n,url:a,query:i}),m&&(h.colorB=m),s&&(h.prefix=s),d&&(h.suffix=d),function(e,t,n){var a=void 0===n?{}:n,r=a.longCache,i=a.style,o=a.queryParams,c=a.format,s=void 0===c?"svg":c,d=Object.assign({},o);return r&&(d.maxAge="2592000"),i&&(d.style=i),Object(l.a)(e+"."+s,t,d)}("/badge/dynamic/"+t,e,Object.assign({queryParams:h},p))}},156:function(e,t,n){"use strict";n(37),n(26);var a=n(166),r=n(167);function l(e){var t=e.baseUrl,n=void 0===t?"":t,r=e.path,l=e.queryParams,i=e.style,o=e.format,c=void 0===o?"svg":o,s=e.longCache,d=void 0!==s&&s,m=c.length?"."+c:"",u=a.stringify(Object.assign({maxAge:d?"2592000":void 0,style:i},l));return""+n+r+m+(u?"?"+u:"")}function i(e){return encodeURIComponent(e.replace(/-/g,"--").replace(/_/g,"__"))}e.exports={badgeUrlFromPath:l,badgeUrlFromPattern:function(e){var t=e.baseUrl,n=void 0===t?"":t,a=e.pattern,i=e.namedParams,o=e.queryParams,c=e.style,s=e.format,d=void 0===s?"svg":s,m=e.longCache,u=void 0!==m&&m;return l({baseUrl:n,path:r.compile(a,{strict:!0,sensitive:!0})(i),queryParams:o,style:c,format:d,longCache:u})},encodeField:i,staticBadgeUrl:function(e){var t=e.baseUrl,n=void 0===t?"":t,r=e.label,l=e.message,o=e.color,c=void 0===o?"lightgray":o,s=e.style,d=e.namedLogo,m=e.format,u=void 0===m?"svg":m,h=[r,l,c].map(i).join("-"),p=a.stringify({style:s,logo:d});return n+"/badge/"+h+"."+u+(p?"?"+p:"")}}},157:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),l=n(1),i=n.n(l),o=n(184),c=n.n(o),s=n(150),d=s.c.span.withConfig({displayName:"snippet__CodeContainer",componentId:"sc-1wzkqq5-0"})(["position:relative;vertical-align:middle;display:inline-block;",";"],function(e){return e.truncate&&Object(s.b)(["max-width:40%;overflow:hidden;text-overflow:ellipsis;"])}),m=s.c.code.withConfig({displayName:"snippet__StyledCode",componentId:"sc-1wzkqq5-1"})(["line-height:1.2em;padding:0.1em 0.3em;border-radius:4px;"," font-family:Lekton;font-size:",";white-space:nowrap;"],function(e){return!1!==e.withBackground&&Object(s.b)(["background:#eef;"])},function(e){return e.fontSize}),u=function(e){var t=e.snippet,n=e.truncate,a=void 0!==n&&n,l=e.fontSize;return r.a.createElement(d,{truncate:a},r.a.createElement(c.a,null,r.a.createElement(m,{fontSize:l},t)))};u.propTypes={snippet:i.a.string.isRequired,truncate:i.a.bool,fontSize:i.a.string}},159:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={}.GATSBY_BASE_URL||""},160:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(174),i=n(161),o=n.n(i);t.a=function(){return r.a.createElement(l.Helmet,null,r.a.createElement("title",null,"Shields.io: Quality metadata badges for open source projects"),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),r.a.createElement("meta",{name:"description",content:"We serve fast and scalable informational images as badges\nfor GitHub, Travis CI, Jenkins, WordPress and many more services. Use them to\ntrack the state of your projects, or for promotional purposes."}),r.a.createElement("link",{rel:"icon",type:"image/png",href:o.a}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|Lekton",rel:"stylesheet"}))}},161:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABE0lEQVR4AWJkAIKkpCQ7TU3NySIiIlosQMCABejbMWAFf//8YXj77vWn27duZWVGz1nKGBYWZiQkJHSIkZGRmwEPCMxiwAt+/fz3/86VL8EAbuiiAKEoiMLwGcHdCQMBiUAlurDErmJ75tmKP8A3oiJyuF6vAxglws+0C5pv81GJaJdzhlWMMJssaaXM3C0CpmSDLAQtgH3BiCIVB2NRMKWEIoXQMBiLgjHGP9nQ+6ZPLgqGgs9xriDovX8A6Jjgw8ZyIigzn5xz+yZ+6O/tsz7Hy8tb/PLlywPAHMOFT/G3LwRc95fxPyerQCojuKwLDLQAGjoJWIzpAw1mw6bB0guHSYyMDBysnO/5hUTTGvM3rQEAI8qCnLiY3O4AAAAASUVORK5CYII="},162:function(e,t,n){"use strict";var a=n(36),r=n(0),l=n.n(r),i=n(150),o=n(151),c=function(e){return l.a.createElement("svg",e,l.a.createElement("rect",{rx:"8",x:"140",width:"55",height:"58"}),l.a.createElement("g",{stroke:"#000",strokeWidth:"8"},l.a.createElement("path",{d:"M135.5 54a8 8 0 0 0 8.5 -8.5"}),l.a.createElement("rect",{x:"4",y:"4",rx:"8",width:"190",height:"50",fill:"none"})),l.a.createElement("path",{d:"m23.906 33.641c.953-.083 1.906-.167 2.859-.25.108 2.099 1.511 4.139 3.578 4.722 2.438.895 5.357.799 7.559-.658 1.49-1.129 1.861-3.674.324-4.925-1.557-1.322-3.685-1.504-5.576-2.057-2.343-.565-4.912-1.133-6.611-2.979-1.805-2.088-1.627-5.485.292-7.443 2.041-2.113 5.222-2.55 8.02-2.274 2.46.244 5.058 1.343 6.252 3.635.426.908 1.095 2.241.656 3.108-.888.173-1.81.148-2.715.245-.077-2.084-1.727-4.073-3.863-4.234-1.902-.317-4.02-.252-5.691.802-1.398.989-1.849 3.363-.381 4.494 1.281 1.01 2.962 1.199 4.482 1.642 2.66.627 5.602 1.118 7.596 3.158 2 2.188 1.893 5.84-.088 8.01-2.01 2.32-5.304 2.972-8.237 2.713-2.585-.147-5.319-1.024-6.916-3.184-.987-1.288-1.517-2.905-1.542-4.523"}),l.a.createElement("path",{d:"m45.953 41c0-7.635 0-15.271 0-22.906.938 0 1.875 0 2.813 0 0 2.74 0 5.479 0 8.219 1.391-1.721 3.69-2.523 5.86-2.236 1.975.154 4.03 1.371 4.513 3.402.504 1.973.278 4.02.33 6.04 0 2.495 0 4.989 0 7.484-.938 0-1.875 0-2.813 0-.009-3.675.018-7.351-.014-11.03-.026-1.342-.627-2.835-2-3.282-2.187-.802-5.077.393-5.609 2.773-.417 1.764-.216 3.586-.264 5.381 0 2.051 0 4.102 0 6.153-.938 0-1.875 0-2.813 0"}),l.a.createElement("path",{d:"m63.781 21.328v-3.234h2.813v3.234zm0 19.672v-16.594h2.813v16.594z"}),l.a.createElement("path",{d:"m82.25 35.656c.969.12 1.938.24 2.906.359-.702 3.464-4.348 5.767-7.781 5.386-3.235-.066-6.43-2.328-7.06-5.598-.843-3.307-.404-7.285 2.101-9.784 3.082-3 8.699-2.618 11.235.892 1.374 1.85 1.676 4.267 1.578 6.51-4.125 0-8.25 0-12.375 0-.142 2.889 2.267 6 5.346 5.658 1.881-.162 3.613-1.566 4.045-3.423m-9.234-4.547c3.089 0 6.177 0 9.266 0 .129-2.774-2.616-5.422-5.419-4.713-2.174.427-3.912 2.474-3.846 4.713"}),l.a.createElement("path",{d:"m88.64 41v-22.906h2.813v22.906z"}),l.a.createElement("path",{d:"m106.59 41c0-.698 0-1.396 0-2.094-1.412 2.442-4.776 3.067-7.233 1.949-2.378-1.02-3.971-3.403-4.345-5.924-.507-2.761-.123-5.768 1.389-8.167 1.863-2.705 5.968-3.642 8.711-1.741.422.228 1.028 1.144 1.294 1.018-.006-2.649-.0001-5.298-.003-7.948.932 0 1.865 0 2.797 0 0 7.635 0 15.271 0 22.906-.87 0-1.74 0-2.61 0m-8.89-8.281c-.075 2.246.637 4.861 2.79 5.952 2 1.023 4.682-.047 5.488-2.134.897-1.996.746-4.278.388-6.382-.425-1.95-2.046-3.804-4.158-3.805-1.903-.065-3.633 1.363-4.099 3.181-.327 1.028-.394 2.116-.408 3.188"}),l.a.createElement("path",{d:"m112.52 36.05c.927-.146 1.854-.292 2.781-.438.126 1.69 1.513 3.244 3.239 3.365 1.398.212 3.01.12 4.12-.851.807-.749 1.1-2.243.159-3.01-.908-.723-2.115-.812-3.182-1.172-1.797-.485-3.713-.848-5.243-1.97-1.83-1.551-1.868-4.679-.099-6.293 1.577-1.507 3.918-1.784 6-1.594 1.685.176 3.54.749 4.535 2.217.464.715.708 1.549.844 2.384-.917.125-1.833.25-2.75.375-.121-1.569-1.653-2.762-3.19-2.695-1.246-.082-2.702.012-3.608.982-.624.724-.543 1.971.314 2.481.998.706 2.269.757 3.389 1.173 1.754.512 3.647.848 5.141 1.965 1.686 1.476 1.728 4.244.396 5.966-1.298 1.788-3.597 2.417-5.709 2.448-1.466-.007-2.984-.214-4.299-.893-1.599-.909-2.585-2.655-2.84-4.444"}),l.a.createElement("g",{fill:"#fff"},l.a.createElement("path",{d:"m151.11 41v-22.906h3.03v22.906z"}),l.a.createElement("path",{d:"m158.55 29.844c-.277-4.765 2.335-9.977 7.05-11.551 4.902-1.757 11.226.197 13.477 5.098 2.266 4.706 1.89 10.92-1.767 14.833-4.554 4.948-13.81 3.976-17.08-1.954-1.111-1.946-1.679-4.188-1.68-6.426m3.125.047c-.377 4.273 2.892 8.844 7.375 8.951 3.791.221 7.557-2.653 7.997-6.497.794-3.731.139-8.292-3.107-10.696-3.788-2.814-10.05-1.104-11.591 3.444-.54 1.539-.642 3.181-.675 4.798"})))};c.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"198",height:"58"};var s=i.c.p.withConfig({displayName:"header__Highlights",componentId:"sc-1l0ubx-0"})(["font-style:italic;"]);t.a=function(){return l.a.createElement("section",null,l.a.createElement(a.Link,{to:"/"},l.a.createElement(c,null)),l.a.createElement(o.i,null),l.a.createElement(s,null,"Pixel-perfect   Retina-ready   Fast   Consistent   Hackable   No tracking"))}},171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1),i=n.n(l),o=n(150),c=n(152),s=n(151),d=o.c.a.withConfig({displayName:"footer__SpacedA",componentId:"sc-10wqpng-0"})(["margin-left:10px;margin-right:10px;"]),m=function(e){var t=e.baseUrl;return r.a.createElement("section",null,r.a.createElement(s.e,{id:"like-this"},"Like This?"),r.a.createElement("p",null,r.a.createElement("object",{data:Object(c.a)("/twitter/follow/shields_io.svg?style=social&label=Follow",t),alt:"Follow @shields_io"})," ",r.a.createElement("object",{data:Object(c.a)("/opencollective/backers/shields.svg?style=social&link=https://opencollective.com/shields",t),alt:"Donate to us!"})," ",r.a.createElement("object",{data:Object(c.a)("/opencollective/sponsors/shields.svg?style=social&link=https://opencollective.com/shields",t),alt:"Donate to us!"})," ",r.a.createElement("object",{data:Object(c.a)("/github/forks/badges/shields.svg?style=social&label=Fork",t),alt:"Fork on GitHub"})," ",r.a.createElement("object",{data:Object(c.a)("/discord/308323056592486420.svg?style=social&label=Chat&link=https://discord.gg/HjJCwm5",t),alt:"chat on Discord"})),r.a.createElement("p",null,"What is your favorite badge service to use?",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/badges/shields/blob/master/CONTRIBUTING.md"},"Tell us")," ","and we might bring it to you!"),r.a.createElement("p",null,r.a.createElement(d,{href:"https://status.shields.io/"},"Status"),r.a.createElement(d,{href:"https://github.com/badges/shields/"},"GitHub")))};t.a=m,m.propTypes={baseUrl:i.a.string.isRequired}}}]);
//# sourceMappingURL=component---frontend-pages-endpoint-js-2c3c059b7c435b372fad.js.map