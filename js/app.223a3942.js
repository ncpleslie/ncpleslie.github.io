(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"076e":function(t,e,r){"use strict";var a=r("da11"),o=r.n(a);o.a},"387e":function(t,e,r){t.exports=r.p+"img/github.319a56b6.svg"},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-view")],1)},n=[],i={name:"App"},s=i,c=r("2877"),l=Object(c["a"])(s,o,n,!1,null,null,null),u=l.exports,p=r("5f5b"),d=r("8c4f"),f=r("f13c"),h=r.n(f),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[t.header?r("div",[t.header?r("Jumbotron",{attrs:{header:t.header}}):t._e(),t.projects?r("Project",{attrs:{id:"projects",projects:t.projects}}):r("Loading",{attrs:{title:"Projects"}}),t.contact?r("ContactForm",{attrs:{id:"contact",contact:t.contact}}):r("Loading",{attrs:{title:"Contact"}}),r("Footer")],1):r("Loading")],1)},m=[],g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"projects"},[r("h2",[t._v("Projects")]),r("hr",{staticClass:"line"}),r("b-card-group",{staticClass:"project-card-group"},t._l(t.projects,(function(t,e){return r("ProjectCard",{key:e,attrs:{project:t}})})),1)],1)},j=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"mb-2 project-card",attrs:{"data-aos":"fade-up","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-once":"true","footer-tag":"footer"}},[t.isPicture()?a("div",[t.getUrl()?a("a",{attrs:{href:t.getUrl(),alt:"Go to project",title:t.project.title}},[a("b-card-img-lazy",t._b({directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:t.project.imageUrl,alt:t.project.title,title:t.project.title}},"b-card-img-lazy",t.mainProps,!1))],1):t.getUrl()?t._e():a("b-card-img-lazy",t._b({staticClass:"project-card-image no-link",attrs:{src:t.project.imageUrl,alt:t.project.title,title:t.project.title}},"b-card-img-lazy",t.mainProps,!1))],1):t._e(),t.isYoutube()?a("div",[a("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:t.project.imageUrl,allowfullscreen:""}})],1):t._e(),a("b-card-body",[a("a",{attrs:{href:t.getUrl(),alt:"Go to project"}},[a("b-card-title",{staticClass:"project-card-title",attrs:{title:t.project.title}})],1),a("hr"),a("b-card-text",{staticClass:"project-card-description"},[t._v(t._s(t.project.description))]),a("b-card-text",{staticClass:"project-card-tech"},[t._v(t._s(t.project.technology))])],1),a("div",{staticClass:"project-card-footer",attrs:{slot:"footer"},slot:"footer"},[t.project.projectUrl?a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"project-card-button",attrs:{href:t.project.projectUrl,title:"See Project",alt:"See this program running"}},[a("img",{attrs:{src:r("dce9"),alt:"See this program running"}})]):a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"project-card-button disabled",attrs:{disabled:"",href:t.project.projectUrl,title:"No Project Provide",alt:"No Project Provide"}},[a("img",{attrs:{src:r("dce9"),alt:"No Project Provide"}})]),t.project.githubUrl?a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"project-card-button",attrs:{href:t.project.githubUrl,title:"See Code",alt:"Go to the Github Repo"}},[a("img",{attrs:{src:r("387e"),alt:"Go to the Github Repo"}})]):a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"project-card-button disabled",attrs:{disabled:"",title:"No Code Provided",alt:"No Code Provided"}},[a("img",{attrs:{src:r("387e"),alt:"No Code Provided"}})])],1)],1)},_=[],y={name:"ProjectCard",props:{project:Object},data(){return{mainProps:{title:"See Project",class:"project-card-image","blank-width":300,"blank-height":169,"blank-color":"grey"}}},methods:{isYoutube(){return null!=this.project.imageUrl.match(/\.(youtube)/g)},isPicture(){return null!=this.project.imageUrl.match(/\.(jpeg|jpg|png|gif)/g)},getUrl(){return this.project.projectUrl?this.project.projectUrl:!this.project.projectUrl&&this.project.githubUrl?this.project.githubUrl:this.project.projectUrl&&!this.project.githubUrl?this.project.projectUrl:this.project.projectUrl||this.project.githubUrl?void 0:null}}},C=y,P=(r("69f5"),Object(c["a"])(C,v,_,!1,null,"6c72390a",null)),w=P.exports,k={props:{projects:Array},components:{ProjectCard:w}},O=k,x=(r("d42b"),Object(c["a"])(O,g,j,!1,null,"74585b76",null)),U=x.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-jumbotron",{attrs:{id:"jumboTitle",fluid:""}},[r("template",{slot:"header"},[t._v(t._s(t.header.name))]),r("template",{slot:"lead"},[t._v(t._s(t.header.description))]),r("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#projects",expression:"'#projects'"}],staticClass:"project-card-button",attrs:{href:"#"}},[t._v("See Projects")]),r("hr"),r("div",{staticClass:"jumbotron-button-container"},[r("Button",{attrs:{buttonType:"Github",links:t.header.links}}),r("Button",{attrs:{buttonType:"LinkedIn",links:t.header.links}}),r("Button",{attrs:{buttonType:"CV",links:t.header.links}}),r("Button",{attrs:{buttonType:"Contact",links:t.header.links}})],1)],2)],1)},N=[],E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"project-card-button animated",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-once":"true",href:t.getBtnData.url,title:t.getBtnData.title}},[r("img",{attrs:{src:t.getBtnData.img_url,alt:t.getBtnData.alt}})])},G=[],$={name:"Buttons",props:{buttonType:String,links:Object},data(){return{buttonData:{Github:{title:"Github",img_url:r("387e"),alt:"Go to my Github Repo",url:this.links.github},LinkedIn:{title:"LinkedIn",img_url:r("953d"),alt:"Go to my LinkedIn",url:this.links.linkedIn},CV:{title:"CV/Resume",img_url:r("eb88"),alt:"Go to my Resume Or CV",url:this.links.CV},Contact:{title:"Contact",img_url:r("9055"),alt:"Contact Me",url:"#contact"}}}},computed:{getBtnData(){return this.buttonData[this.buttonType]}}},B=$,L=(r("64d1"),Object(c["a"])(B,E,G,!1,null,"0f3bd5e6",null)),T=L.exports,D={props:{header:Object},components:{Button:T}},M=D,Y=(r("f275"),Object(c["a"])(M,S,N,!1,null,"2c78b66b",null)),A=Y.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact"},[r("h2",[t._v("Contact Me")]),r("h3",[t._v(" Contact me at "),r("a",{attrs:{href:"mailto:"+this.contact.email}},[t._v(t._s(this.contact.email))])]),r("hr",{staticClass:"line"}),r("b-form",{staticClass:"contact-form",attrs:{action:this.contact.formSpringUrl,method:"POST"}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1"}},[r("b-form-input",{staticClass:"contact-form-input",attrs:{name:"_replyto",id:"input-1",type:"email",required:"",placeholder:"Your email here",alt:"Your Email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[r("b-form-input",{staticClass:"contact-form-input",attrs:{name:"name",id:"input-2",required:"",placeholder:"Name",alt:"Your Name"}})],1),r("b-form-group",{attrs:{label:"Your Message:","label-for":"textarea-default"}},[r("b-form-textarea",{staticClass:"contact-form-input",attrs:{name:"message",id:"textarea-default",placeholder:"What would you like to say?",alt:"Your Message"}})],1),r("b-button",{staticClass:"contact-button",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)},J=[],R={props:{contact:Object},methods:{onSubmit(t){t.preventDefault(),alert(JSON.stringify(this.form))}}},V=R,z=(r("ef98"),Object(c["a"])(V,I,J,!1,null,"5844f5a6",null)),F=z.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("h2",[t._v("Site created by Nick Leslie © 2020")]),r("a",{attrs:{href:"https://github.com/ncpleslie/PersonalWebsite"}},[t._v("Source code avaliable here")])])}],q={},K=q,Q=(r("076e"),Object(c["a"])(K,H,W,!1,null,"7b060c26",null)),X=Q.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading"},[this.title?r("Stretch"):r("Circle8"),r("h1",[t._v("Loading "+t._s(this.title))])],1)},tt=[],et=r("d58b"),rt={name:"Loading",components:{Circle8:et["a"],Stretch:et["b"]},props:{title:String}},at=rt,ot=(r("7674"),Object(c["a"])(at,Z,tt,!1,null,"37cc8d86",null)),nt=ot.exports,it={name:"Home",components:{Project:U,Jumbotron:A,ContactForm:F,Footer:X,Loading:nt},data(){return{header:null,projects:null,contact:null}},created(){this.getHeader(),this.getProjects(),this.getContact()},methods:{async getHeader(){const t="header";this.header=await this.get(t)},async getProjects(){const t="projects";this.projects=await this.get(t)},async getContact(){const t="contact";this.contact=await this.get(t)},async get(t){let e;if(!(this.header&&this.projects&&this.contact))try{return e=await fetch("https://us-central1-ncpleslie-api.cloudfunctions.net/api/"+t),await e.json()}catch(r){this.getAll()}},async getAll(){let t=await fetch("https://raw.githubusercontent.com/ncpleslie/PersonalWebsite/master/Server/src/website_data.json");t=await t.json(),this.header=t.header,this.projects=t.projects,this.contact=t.contact}}},st=it,ct=(r("6228"),Object(c["a"])(st,b,m,!1,null,null,null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"admin"}},[r("h1",[t._v("Admin")])])}],dt={name:"Admin"},ft=dt,ht=(r("8f33"),Object(c["a"])(ft,ut,pt,!1,null,null,null)),bt=ht.exports;const mt=[{path:"",component:lt},{path:"/admin",component:bt}];var gt=r("f5af"),jt=r.n(gt);r("e829"),r("f9e3"),r("2dd8");jt.a.init(),a["default"].use(d["a"]);const vt=new d["a"]({routes:mt,mode:"history"});a["default"].use(p["a"]),a["default"].use(h.a),a["default"].config.productionTip=!1,new a["default"]({router:vt,render:t=>t(u)}).$mount("#app")},6228:function(t,e,r){"use strict";var a=r("f51f"),o=r.n(a);o.a},"63a6":function(t,e,r){},"64d1":function(t,e,r){"use strict";var a=r("c956"),o=r.n(a);o.a},"69f5":function(t,e,r){"use strict";var a=r("74a9"),o=r.n(a);o.a},"74a9":function(t,e,r){},7674:function(t,e,r){"use strict";var a=r("b17f"),o=r.n(a);o.a},"8f33":function(t,e,r){"use strict";var a=r("edcc"),o=r.n(a);o.a},9055:function(t,e,r){t.exports=r.p+"img/email.9b2b3a2e.svg"},"953d":function(t,e,r){t.exports=r.p+"img/linkedin.0e1dbd0a.svg"},"97ab":function(t,e,r){},b17f:function(t,e,r){},c956:function(t,e,r){},cf9a:function(t,e,r){},d42b:function(t,e,r){"use strict";var a=r("cf9a"),o=r.n(a);o.a},da11:function(t,e,r){},dce9:function(t,e,r){t.exports=r.p+"img/screen.25c3d6ae.svg"},eb88:function(t,e,r){t.exports=r.p+"img/resume.deb237f7.svg"},edcc:function(t,e,r){},ef98:function(t,e,r){"use strict";var a=r("97ab"),o=r.n(a);o.a},f275:function(t,e,r){"use strict";var a=r("63a6"),o=r.n(a);o.a},f51f:function(t,e,r){}});
//# sourceMappingURL=app.223a3942.js.map