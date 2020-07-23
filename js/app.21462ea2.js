(function(t){function e(e){for(var a,n,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)n=s[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},o={app:0},i=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),o=r.n(a);o.a},"067a":function(t){t.exports=JSON.parse('{"header":{"name":"Nick Leslie","description":"Software Developer | Fullstack Web Developer | Mobile Developer","links":{"github":"https://github.com/ncpleslie","linkedIn":"https://www.linkedin.com/in/nicholas-leslie/","CV":"NickLeslieCV.pdf"}},"projects":[{"title":"Edge Computer Vision","description":"A security camera system with on-device processing to detect, track and log multiple objects. This includes license plates, people and vehicles","technology":"Python, OpenCV, OpenVINO","imageUrl":"thumbnails/small/computervisionthumbnail.jpg","projectUrl":""},{"title":"Bella - The Coffee Machine Assistant","description":"Enchancing the accessibility of a Coffee Machine to include voice controls, for Jade Software. Showcased at the Noel Leeming Flagship store","technology":"JavaScript, NodeJS, Snowboy, Google Cloud API","imageUrl":"thumbnails/small/coffeemachinethumbnail.jpg","projectUrl":"https://www.jadeworld.com/resources/blog/we-built-the-worlds-first-digital-barista-but-why"},{"title":"C3 Church Mobile App","description":"A mobile application for the congregation to receive updates and relevant news about the church","technology":"Dart, Flutter, Scoped Model, Facebook\'s GraphQL","imageUrl":"thumbnails/small/c3churchthumbnail.jpg","githubUrl":"https://github.com/ncpleslie/C3Church"},{"title":"PHP Social Network","description":"Created a secure PHP website that allows for authentication and authorization, as well as creating, updating and deleting forum posts and updating and deleting user profile information","technology":"PHP, MySQL","imageUrl":"thumbnails/small/socialmediathumbnail.jpg","githubUrl":"https://github.com/ncpleslie/SocialNetworkPHP/tree/MVC"},{"title":"Sudoku Desktop Game","description":"A basic Sudoku desktop game following the MVVM-C architecture. Users are tracked and rated based on time. Levels are can be easily added and games saved","technology":"C#, WPF, MVVM-C","imageUrl":"thumbnails/sudoku_showcase.png","githubUrl":"https://github.com/ncpleslie/SudokuWPF"},{"title":"One Thing, Four Ways","description":"A file upload system was developed that could receive a text files containing numbers and calculate correlation and regression. Four services were developed using four different technologies","technology":"JavaScript, React, Vue, NodeJS, Express, Bootstrap-Vue","imageUrl":"thumbnails/small/correlationthumbnail.jpg","projectUrl":"https://6t14c.codesandbox.io/","githubUrl":"https://github.com/ncpleslie/PR280-Assignment2"},{"title":"Vector LTD Database","description":"The award winning relational database built for Vector Energy, using MySQL. Used to stored information received from Smart Power Meters","technology":"MySQL, SQL, ERD","imageUrl":"thumbnails/small/vectorthumbnail.jpg","githubUrl":"https://github.com/ncpleslie/VectorLTD_SmartMeter_Database"},{"title":"Date Night","description":"Date Night is a cross-platform mobile app designed to make your relationship easier. Users enter their date ideas and an unbiased decision is returned. Other users date ideas are displayed on the home-screen","technology":"Dart, Flutter, Firebase Realtime Database","imageUrl":"thumbnails/date_night_showcase.png","githubUrl":"https://github.com/ncpleslie/date_night"},{"title":"Wizard Saves the City","description":"A platform game about a wizard, some cones, and an earthquake. Featuring three unique levels, an annoying soundtrack and mobile controls","technology":"JavaScript, Phaser 3","imageUrl":"thumbnails/small/platformgamethumbnail.jpg","projectUrl":"https://ncpleslie.github.io/PlatformGame/","githubUrl":"https://github.com/ncpleslie/PlatformGame"}],"contact":{"email":"ncpleslie@gmail.com","formSpringUrl":"https://formspree.io/xrgkbgrb"}}')},1118:function(t,e,r){},"1a44":function(t,e,r){"use strict";var a=r("c511"),o=r.n(a);o.a},2430:function(t,e,r){},2626:function(t,e,r){"use strict";var a=r("2430"),o=r.n(a);o.a},"387e":function(t,e,r){t.exports=r.p+"img/github.63af90eb.svg"},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Jumbotron",{attrs:{header:this.header}}),r("Project",{attrs:{id:"projects",projects:this.projects}}),r("ContactForm",{attrs:{id:"contact",contact:this.contact}}),r("Footer")],1)},i=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"projects"},[r("h2",[t._v("Projects")]),r("hr",{staticClass:"line"}),r("b-card-group",{staticClass:"project-card-group"},t._l(t.projects,(function(t,e){return r("ProjectCard",{key:e,attrs:{project:t}})})),1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"mb-2 project-card",attrs:{"data-aos":"fade-up","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-once":"true","footer-tag":"footer"}},[t.getUrl(t.project)?a("a",{attrs:{href:t.getUrl(t.project),alt:"Go to project",title:t.project.title}},[a("b-card-img-lazy",t._b({directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:t.project.imageUrl,alt:t.project.title,title:t.project.title}},"b-card-img-lazy",t.mainProps,!1))],1):t.getUrl(t.project)?t._e():a("b-card-img-lazy",t._b({staticClass:"project-card-image no-link",attrs:{src:t.project.imageUrl,alt:t.project.title,title:t.project.title}},"b-card-img-lazy",t.mainProps,!1)),a("b-card-body",[a("a",{attrs:{href:t.getUrl(t.project),alt:"Go to project"}},[a("b-card-title",{staticClass:"project-card-title",attrs:{title:t.project.title}})],1),a("hr"),a("b-card-text",{staticClass:"project-card-description"},[t._v(t._s(t.project.description))]),a("b-card-text",{staticClass:"project-card-tech"},[t._v(t._s(t.project.technology))])],1),a("div",{staticClass:"project-card-footer",attrs:{slot:"footer"},slot:"footer"},[t.project.projectUrl?a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"project-card-button",attrs:{href:t.project.projectUrl,title:"See Project",alt:"See this program running"}},[a("img",{attrs:{src:r("dce9"),alt:"See this program running"}})]):a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"project-card-button disabled",attrs:{disabled:"",href:t.project.projectUrl,title:"No Project Provide",alt:"No Project Provide"}},[a("img",{attrs:{src:r("dce9"),alt:"No Project Provide"}})]),t.project.githubUrl?a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"project-card-button",attrs:{href:t.project.githubUrl,title:"See Code",alt:"Go to the Github Repo"}},[a("img",{attrs:{src:r("387e"),alt:"Go to the Github Repo"}})]):a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"project-card-button disabled",attrs:{disabled:"",title:"No Code Provided",alt:"No Code Provided"}},[a("img",{attrs:{src:r("387e"),alt:"No Code Provided"}})])],1)],1)},c=[],u={name:"ProjectCard",props:{project:Object},data(){return{mainProps:{title:"See Project",class:"project-card-image","blank-width":300,"blank-height":169,"blank-color":"grey"}}},methods:{getUrl(t){return t.projectUrl?t.projectUrl:!t.projectUrl&&t.githubUrl?t.githubUrl:t.projectUrl&&!t.githubUrl?t.projectUrl:t.projectUrl||t.githubUrl?void 0:null}}},p=u,d=(r("2626"),r("2877")),h=Object(d["a"])(p,l,c,!1,null,"dbacb606",null),b=h.exports,m={props:{projects:Array},components:{ProjectCard:b}},g=m,f=(r("835e"),Object(d["a"])(g,n,s,!1,null,"a7866862",null)),v=f.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-jumbotron",{attrs:{id:"jumboTitle",fluid:""}},[r("template",{slot:"header"},[t._v(t._s(t.header.name))]),r("template",{slot:"lead"},[t._v(t._s(t.header.description))]),r("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#projects",expression:"'#projects'"}],staticClass:"project-card-button",attrs:{href:"#"}},[t._v("See Projects")]),r("hr"),r("div",{staticClass:"jumbotron-button-container"},[r("Button",{attrs:{buttonType:"Github",links:t.header.links}}),r("Button",{attrs:{buttonType:"LinkedIn",links:t.header.links}}),r("Button",{attrs:{buttonType:"CV",links:t.header.links}}),r("Button",{attrs:{buttonType:"Contact",links:t.header.links}})],1)],2)],1)},y=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"project-card-button animated",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-once":"true",href:t.getBtnData.url,title:t.getBtnData.title}},[r("img",{attrs:{src:t.getBtnData.img_url,alt:t.getBtnData.alt}})])},_=[],w={name:"Buttons",props:{buttonType:String,links:Object},data(){return{buttonData:{Github:{title:"Github",img_url:r("387e"),alt:"Go to my Github Repo",url:this.links.github},LinkedIn:{title:"LinkedIn",img_url:r("953d"),alt:"Go to my LinkedIn",url:this.links.linkedIn},CV:{title:"CV/Resume",img_url:r("eb88"),alt:"Go to my Resume Or CV",url:this.links.CV},Contact:{title:"Contact",img_url:r("9055"),alt:"Contact Me",url:"#contact"}}}},computed:{getBtnData(){return this.buttonData[this.buttonType]}}},k=w,P=(r("ade1"),Object(d["a"])(k,C,_,!1,null,"99d35864",null)),U=P.exports,S={props:{header:Object},components:{Button:U}},O=S,x=(r("b51e"),Object(d["a"])(O,j,y,!1,null,"a6b33e90",null)),N=x.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact"},[r("h2",[t._v("Contact Me")]),r("h3",[t._v(" Contact me at "),r("a",{attrs:{href:"mailto:"+this.contact.email}},[t._v(t._s(this.contact.email))])]),r("hr",{staticClass:"line"}),r("b-form",{staticClass:"contact-form",attrs:{action:this.contact.formSpringUrl,method:"POST"}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1"}},[r("b-form-input",{staticClass:"contact-form-input",attrs:{name:"_replyto",id:"input-1",type:"email",required:"",placeholder:"Your email here",alt:"Your Email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[r("b-form-input",{staticClass:"contact-form-input",attrs:{name:"name",id:"input-2",required:"",placeholder:"Name",alt:"Your Name"}})],1),r("b-form-group",{attrs:{label:"Your Message:","label-for":"textarea-default"}},[r("b-form-textarea",{staticClass:"contact-form-input",attrs:{name:"message",id:"textarea-default",placeholder:"What would you like to say?",alt:"Your Message"}})],1),r("b-button",{staticClass:"contact-button",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)},D=[],V={props:{contact:Object},methods:{onSubmit(t){t.preventDefault(),alert(JSON.stringify(this.form))}}},G=V,T=(r("1a44"),Object(d["a"])(G,M,D,!1,null,"4e8eaa4a",null)),L=T.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("h2",[t._v("Site created by Nick Leslie © 2020")]),r("a",{attrs:{href:"https://github.com/ncpleslie/PersonalWebsite"}},[t._v("Source code avaliable here")])])}],B={},J=B,A=(r("7aa5"),Object(d["a"])(J,E,F,!1,null,"5e6d5c32",null)),R=A.exports,$=r("067a"),I={name:"App",components:{Project:v,Jumbotron:N,ContactForm:L,Footer:R},data(){return{header:$.header,projects:$.projects,contact:$.contact}}},z=I,W=(r("034f"),Object(d["a"])(z,o,i,!1,null,null,null)),Y=W.exports,Q=r("5f5b"),q=r("f13c"),H=r.n(q),K=r("f5af"),X=r.n(K);r("e829"),r("f9e3"),r("2dd8");X.a.init(),a["default"].use(Q["a"]),a["default"].use(H.a),a["default"].config.productionTip=!1,new a["default"]({render:t=>t(Y)}).$mount("#app")},"7aa5":function(t,e,r){"use strict";var a=r("f611"),o=r.n(a);o.a},"835e":function(t,e,r){"use strict";var a=r("1118"),o=r.n(a);o.a},"85ec":function(t,e,r){},"8d18":function(t,e,r){},9055:function(t,e,r){t.exports=r.p+"img/email.9b2b3a2e.svg"},"953d":function(t,e,r){t.exports=r.p+"img/linkedin.0e1dbd0a.svg"},ade1:function(t,e,r){"use strict";var a=r("b033"),o=r.n(a);o.a},b033:function(t,e,r){},b51e:function(t,e,r){"use strict";var a=r("8d18"),o=r.n(a);o.a},c511:function(t,e,r){},dce9:function(t,e,r){t.exports=r.p+"img/screen.25c3d6ae.svg"},eb88:function(t,e,r){t.exports=r.p+"img/resume.deb237f7.svg"},f611:function(t,e,r){}});
//# sourceMappingURL=app.21462ea2.js.map