(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b06dea3"],{"02b4":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"edit"}},[r("b-card",{staticClass:"edit-card",attrs:{"no-body":""}},[r("b-tabs",{staticClass:"edit-tab",attrs:{small:"",card:""}},[r("b-tab",{attrs:{title:"New Project",active:""}},[r("b-form",{staticClass:"edit-form",on:{submit:function(e){e.stopPropagation(),e.preventDefault()}}},[r("h2",[e._v("Add a New Project")]),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"Title"},model:{value:e.newProject.title,callback:function(t){e.$set(e.newProject,"title",t)},expression:"newProject.title"}}),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"Description"},model:{value:e.newProject.description,callback:function(t){e.$set(e.newProject,"description",t)},expression:"newProject.description"}}),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"Technology"},model:{value:e.newProject.technology,callback:function(t){e.$set(e.newProject,"technology",t)},expression:"newProject.technology"}}),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"GitHub URL"},model:{value:e.newProject.githubUrl,callback:function(t){e.$set(e.newProject,"githubUrl",t)},expression:"newProject.githubUrl"}}),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"Project URL"},model:{value:e.newProject.projectUrl,callback:function(t){e.$set(e.newProject,"projectUrl",t)},expression:"newProject.projectUrl"}}),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"Image or YouTube URL"},model:{value:e.newProject.imageUrl,callback:function(t){e.$set(e.newProject,"imageUrl",t)},expression:"newProject.imageUrl"}}),r("b-form-file",{staticClass:"edit-form-input",attrs:{state:Boolean(e.newImageFile.newProject),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop image file here...",accept:".jpg, .png, .gif, .webp, .jpeg"},model:{value:e.newImageFile.newProject,callback:function(t){e.$set(e.newImageFile,"newProject",t)},expression:"newImageFile.newProject"}}),r("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.addNewProject}},[e._v("Add")])],1)],1),r("b-tab",{attrs:{title:"Current Projects"}},[e.projects?r("div",{staticClass:"edit-form-projects"},e._l(e.projects,(function(t,n){return r("b-form",{key:n,staticClass:"edit-form",on:{submit:function(e){e.stopPropagation(),e.preventDefault()}}},[r("h3",[e._v("Project "+e._s(n+1))]),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"Title"},model:{value:t.title,callback:function(r){e.$set(t,"title",r)},expression:"project.title"}}),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"Description"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"project.description"}}),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"Technology"},model:{value:t.technology,callback:function(r){e.$set(t,"technology",r)},expression:"project.technology"}}),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"GitHub URL"},model:{value:t.githubUrl,callback:function(r){e.$set(t,"githubUrl",r)},expression:"project.githubUrl"}}),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"Project URL"},model:{value:t.projectUrl,callback:function(r){e.$set(t,"projectUrl",r)},expression:"project.projectUrl"}}),r("b-input",{staticClass:"edit-form-input",attrs:{placeholder:"Image URL"},model:{value:t.imageUrl,callback:function(r){e.$set(t,"imageUrl",r)},expression:"project.imageUrl"}}),r("b-form-file",{staticClass:"edit-form-input",attrs:{state:Boolean(e.newImageFile.index),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop image file here...",accept:".jpg, .png, .gif, .webp, .jpeg"},model:{value:e.newImageFile.index,callback:function(t){e.$set(e.newImageFile,"index",t)},expression:"newImageFile.index"}}),r("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:function(t){return e.onSubmit("projects",n)}}},[e._v("Update")])],1)})),1):e._e()]),r("b-tab",{attrs:{title:"Name and Contact"}},[e.header?r("b-form",{staticClass:"edit-form",on:{submit:function(e){e.stopPropagation(),e.preventDefault()}}},[r("h2",[e._v("Header Information")]),r("label",{staticClass:"input-form-label",attrs:{for:"name"}},[e._v("Name")]),r("b-input",{staticClass:"edit-form-input",attrs:{id:"name"},model:{value:e.header.name,callback:function(t){e.$set(e.header,"name",t)},expression:"header.name"}}),r("label",{staticClass:"input-form-label",attrs:{for:"description"}},[e._v("Description")]),r("b-input",{staticClass:"edit-form-input",attrs:{id:"description"},model:{value:e.header.description,callback:function(t){e.$set(e.header,"description",t)},expression:"header.description"}}),r("b-input",{staticClass:"edit-form-input",model:{value:e.header.links.CV,callback:function(t){e.$set(e.header.links,"CV",t)},expression:"header.links.CV"}}),r("b-input",{staticClass:"edit-form-input",model:{value:e.header.links.github,callback:function(t){e.$set(e.header.links,"github",t)},expression:"header.links.github"}}),r("b-input",{staticClass:"edit-form-input",model:{value:e.header.links.linkedIn,callback:function(t){e.$set(e.header.links,"linkedIn",t)},expression:"header.links.linkedIn"}}),r("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:function(t){return e.onSubmit("header")}}},[e._v("Update")])],1):e._e(),e.contact?r("b-form",{staticClass:"edit-form",on:{submit:function(e){e.stopPropagation(),e.preventDefault()}}},[r("h2",[e._v("Contact Information")]),r("b-input",{staticClass:"edit-form-input",model:{value:e.contact.email,callback:function(t){e.$set(e.contact,"email",t)},expression:"contact.email"}}),r("b-input",{staticClass:"edit-form-input",model:{value:e.contact.formSpringUrl,callback:function(t){e.$set(e.contact,"formSpringUrl",t)},expression:"contact.formSpringUrl"}}),r("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:function(t){return e.onSubmit("contact")}}},[e._v("Update")])],1):e._e()],1)],1)],1),r("b-button",{attrs:{variant:"primary"},on:{click:e.onSave}},[e._v("Backup Database To File")])],1)},o=[],i=r("59ca"),a=(r("66ce"),r("c23d")),s=r.n(a);function u(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function a(e){try{u(n.next(e))}catch(t){i(t)}}function s(e){try{u(n["throw"](e))}catch(t){i(t)}}function u(e){e.done?r(e.value):o(e.value).then(a,s)}u((n=n.apply(e,t||[])).next())}))}function c(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return u([e,t])}}function u(i){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(o=2&i[0]?n["return"]:i[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function l(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}var p=r("4be4"),h="firebasestorage.googleapis.com",f="storageBucket",d=12e4,_=6e5,v=function(){function e(e,t){this.code_=m(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return m(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.serverResponse_?this.message_+"\n"+this.serverResponse_:this.message_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!1,configurable:!0}),e}(),b={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e){return"storage/"+e}function g(){var e="An unknown error occurred, please check the error payload for server response.";return new v(b.UNKNOWN,e)}function y(e){return new v(b.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function w(e){return new v(b.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function R(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new v(b.UNAUTHENTICATED,e)}function E(e){return new v(b.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function U(){return new v(b.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function k(){return new v(b.CANCELED,"User canceled the upload/download.")}function C(e){return new v(b.INVALID_URL,"Invalid URL '"+e+"'.")}function T(e){return new v(b.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function A(){return new v(b.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function P(){return new v(b.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function N(){return new v(b.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function O(e,t,r){return new v(b.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function x(e,t,r,n){var o,i;return e===t?(o=e,i=1===e?"argument":"arguments"):(o="between "+e+" and "+t,i="arguments"),new v(b.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+r+"`: Expected "+o+" "+i+", received "+n+".")}function S(){return new v(b.APP_DELETED,"The Firebase app was deleted.")}function I(e){return new v(b.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function j(e,t){return new v(b.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function L(e){throw new v(b.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function B(e){switch(e){case D.RAW:case D.BASE64:case D.BASE64URL:case D.DATA_URL:return;default:throw"Expected one of the event types: ["+D.RAW+", "+D.BASE64+", "+D.BASE64URL+", "+D.DATA_URL+"]."}}var F=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function G(e,t){switch(e){case D.RAW:return new F(M(t));case D.BASE64:case D.BASE64URL:return new F(H(e,t));case D.DATA_URL:return new F(X(t),$(t))}throw g()}function M(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296===(64512&n)){var o=r<e.length-1&&56320===(64512&e.charCodeAt(r+1));if(o){var i=n,a=e.charCodeAt(++r);n=65536|(1023&i)<<10|1023&a,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else 56320===(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function q(e){var t;try{t=decodeURIComponent(e)}catch(r){throw j(D.DATA_URL,"Malformed data URL.")}return M(t)}function H(e,t){switch(e){case D.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n){var o=r?"-":"_";throw j(e,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case D.BASE64URL:var i=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(i||a){o=i?"+":"/";throw j(e,"Invalid character '"+o+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(t)}catch(l){throw j(e,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}var z=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw j(D.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=V(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}return e}();function X(e){var t=new z(e);return t.base64?H(D.BASE64,t.rest):q(t.rest)}function $(e){var t=new z(e);return t.contentType}function V(e,t){var r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W,K={STATE_CHANGED:"state_changed"},J={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},Z={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Q(e){switch(e){case J.RUNNING:case J.PAUSING:case J.CANCELING:return Z.RUNNING;case J.PAUSED:return Z.PAUSED;case J.SUCCESS:return Z.SUCCESS;case J.CANCELED:return Z.CANCELED;case J.ERROR:return Z.ERROR;default:return Z.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){return null!=e}function ee(e){return void 0!==e}function te(e){return"function"===typeof e}function re(e){return"object"===typeof e}function ne(e){return re(e)&&null!==e}function oe(e){return re(e)&&!Array.isArray(e)}function ie(e){return"string"===typeof e||e instanceof String}function ae(e){return se(e)&&Number.isInteger(e)}function se(e){return"number"===typeof e||e instanceof Number}function ue(e){return ce()&&e instanceof Blob}function ce(){return"undefined"!==typeof Blob}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(W||(W={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var le=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=W.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=W.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=W.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw L("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),Y(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return Y(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw L("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw L("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw L("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){Y(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){Y(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),pe=function(){function e(){}return e.prototype.createXhrIo=function(){return new le},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function fe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=he();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(ce())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}function de(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e=function(){function e(e,t){var r=0,n="";ue(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(ue(this.data_)){var n=this.data_,o=de(n,t,r);return null===o?null:new e(o)}var i=new Uint8Array(this.data_.buffer,t,r-t);return new e(i,!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(ce()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(fe.apply(null,n))}var o=t.map((function(e){return ie(e)?G(D.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),ve=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===r.path)return r;throw T(t)},e.makeFromUrl=function(t){var r=null,n="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var i="(/(.*))?$",a=new RegExp("^gs://"+n+i,"i"),s={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}for(var c="v[A-Za-z0-9_]+",l=h.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",f=new RegExp("^https?://"+l+"/"+c+"/b/"+n+"/o"+p,"i"),d={bucket:1,path:3},_="(?:storage.googleapis.com|storage.cloud.google.com)",v="([^?#]*)",b=new RegExp("^https?://"+_+"/"+n+"/"+v,"i"),m={bucket:1,path:2},g=[{regex:a,indices:s,postModify:o},{regex:f,indices:d,postModify:u},{regex:b,indices:m,postModify:u}],y=0;y<g.length;y++){var w=g[y],R=w.regex.exec(t);if(R){var E=R[w.indices.bucket],U=R[w.indices.path];U||(U=""),r=new e(E,U),w.postModify(r);break}}if(null==r)throw C(t);return r},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e){var t;try{t=JSON.parse(e)}catch(r){return null}return oe(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){if(0===e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var r=e.slice(0,t);return r}function ge(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function ye(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e){return"https://"+h+"/v0"+e}function Re(e){var t=encodeURIComponent,r="?";for(var n in e)if(e.hasOwnProperty(n)){var o=t(n)+"="+t(e[n]);r=r+o+"&"}return r=r.slice(0,-1),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t){return t}var Ue=function(){function e(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||Ee}return e}(),ke=null;function Ce(e){return!ie(e)||e.length<2?e:ye(e)}function Te(){if(ke)return ke;var e=[];function t(e,t){return Ce(t)}e.push(new Ue("bucket")),e.push(new Ue("generation")),e.push(new Ue("metageneration")),e.push(new Ue("name","fullPath",!0));var r=new Ue("name");function n(e,t){return Y(t)?Number(t):t}r.xform=t,e.push(r);var o=new Ue("size");return o.xform=n,e.push(o),e.push(new Ue("timeCreated")),e.push(new Ue("updated")),e.push(new Ue("md5Hash",null,!0)),e.push(new Ue("cacheControl",null,!0)),e.push(new Ue("contentDisposition",null,!0)),e.push(new Ue("contentEncoding",null,!0)),e.push(new Ue("contentLanguage",null,!0)),e.push(new Ue("contentType",null,!0)),e.push(new Ue("metadata","customMetadata",!0)),ke=e,ke}function Ae(e,t){function r(){var r=e["bucket"],n=e["fullPath"],o=new ve(r,n);return t.makeStorageReference(o)}Object.defineProperty(e,"ref",{get:r})}function Pe(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return Ae(n,e),n}function Ne(e,t,r){var n=be(t);if(null===n)return null;var o=n;return Pe(e,o,r)}function Oe(e,t){var r=be(t);if(null===r)return null;if(!ie(r["downloadTokens"]))return null;var n=r["downloadTokens"];if(0===n.length)return null;var o=encodeURIComponent,i=n.split(","),a=i.map((function(t){var r=e["bucket"],n=e["fullPath"],i="/b/"+o(r)+"/o/"+o(n),a=we(i),s=Re({alt:"media",token:t});return a+s}));return a[0]}function xe(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function Se(e){if(!re(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!re(r))throw"Expected object for 'customMetadata' mapping."}else if(ne(r))throw"Mapping for '"+t+"' cannot be an object."}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie="maxResults",je=1e3,Le="pageToken",De="prefixes",Be="items";function Fe(e,t,r){var n={prefixes:[],items:[],nextPageToken:r["nextPageToken"]};if(r[De])for(var o=0,i=r[De];o<i.length;o++){var a=i[o],s=a.replace(/\/$/,""),u=e.makeStorageReference(new ve(t,s));n.prefixes.push(u)}if(r[Be])for(var c=0,l=r[Be];c<l.length;c++){var p=l[c];u=e.makeStorageReference(new ve(t,p["name"]));n.items.push(u)}return n}function Ge(e,t,r){var n=be(r);if(null===n)return null;var o=n;return Fe(e,t,o)}function Me(e){if(!re(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===Ie){if(!ae(e[Ie])||e[Ie]<=0)throw"Expected maxResults to be a positive number.";if(e[Ie]>1e3)throw"Expected maxResults to be less than or equal to "+je+"."}else{if(t!==Le)throw"Unknown option: "+t;if(e[Le]&&!ie(e[Le]))throw"Expected pageToken to be string."}}var qe=function(){function e(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){if(!e)throw g()}function ze(e,t){function r(r,n){var o=Ne(e,n,t);return He(null!==o),o}return r}function Xe(e,t){function r(r,n){var o=Ge(e,t,n);return He(null!==o),o}return r}function $e(e,t){function r(r,n){var o=Ne(e,n,t);return He(null!==o),Oe(o,n)}return r}function Ve(e){function t(t,r){var n;return n=401===t.getStatus()?R():402===t.getStatus()?w(e.bucket):403===t.getStatus()?E(e.path):r,n.setServerResponseProp(r.serverResponseProp()),n}return t}function We(e){var t=Ve(e);function r(r,n){var o=t(r,n);return 404===r.getStatus()&&(o=y(e.path)),o.setServerResponseProp(n.serverResponseProp()),o}return r}function Ke(e,t,r){var n=t.fullServerUrl(),o=we(n),i="GET",a=e.maxOperationRetryTime,s=new qe(o,i,ze(e,r),a);return s.errorHandler=We(t),s}function Je(e,t,r,n,o){var i={};t.isRoot?i["prefix"]="":i["prefix"]=t.path+"/",r&&r.length>0&&(i["delimiter"]=r),n&&(i["pageToken"]=n),o&&(i["maxResults"]=o);var a=t.bucketOnlyServerUrl(),s=we(a),u="GET",c=e.maxOperationRetryTime,l=new qe(s,u,Xe(e,t.bucket),c);return l.urlParams=i,l.errorHandler=Ve(t),l}function Ze(e,t,r){var n=t.fullServerUrl(),o=we(n),i="GET",a=e.maxOperationRetryTime,s=new qe(o,i,$e(e,r),a);return s.errorHandler=We(t),s}function Qe(e,t,r,n){var o=t.fullServerUrl(),i=we(o),a="PATCH",s=xe(r,n),u={"Content-Type":"application/json; charset=utf-8"},c=e.maxOperationRetryTime,l=new qe(i,a,ze(e,n),c);return l.headers=u,l.body=s,l.errorHandler=We(t),l}function Ye(e,t){var r=t.fullServerUrl(),n=we(r),o="DELETE",i=e.maxOperationRetryTime;function a(e,t){}var s=new qe(n,o,a,i);return s.successCodes=[200,204],s.errorHandler=We(t),s}function et(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function tt(e,t,r){var n=Object.assign({},r);return n["fullPath"]=e.path,n["size"]=t.size(),n["contentType"]||(n["contentType"]=et(null,t)),n}function rt(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var c=tt(t,n,o),l=xe(c,r),p="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",h="\r\n--"+u+"--",f=_e.getBlob(p,n,h);if(null===f)throw A();var d={name:c["fullPath"]},_=we(i),v="POST",b=e.maxUploadRetryTime,m=new qe(_,v,ze(e,r),b);return m.urlParams=d,m.headers=a,m.body=f.uploadData(),m.errorHandler=Ve(t),m}var nt=function(){function e(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}return e}();function ot(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(o){He(!1)}var n=t||["active"];return He(!!r&&-1!==n.indexOf(r)),r}function it(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=tt(t,n,o),s={name:a["fullPath"]},u=we(i),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},p=xe(a,r),h=e.maxUploadRetryTime;function f(e){var t;ot(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){He(!1)}return He(ie(t)),t}var d=new qe(u,c,f,h);return d.urlParams=s,d.headers=l,d.body=p,d.errorHandler=Ve(t),d}function at(e,t,r,n){var o={"X-Goog-Upload-Command":"query"};function i(e){var t=ot(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){He(!1)}r||He(!1);var o=Number(r);return He(!isNaN(o)),new nt(o,n.size(),"final"===t)}var a="POST",s=e.maxUploadRetryTime,u=new qe(r,a,i,s);return u.headers=o,u.errorHandler=Ve(t),u}var st=262144;function ut(e,t,r,n,o,i,a,s){var u=new nt(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw P();var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var p=u.current,h=p+l,f=l===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":u.current},_=n.slice(p,h);if(null===_)throw A();function v(e,r){var o,a=ot(e,["active","final"]),s=u.current+l,c=n.size();return o="final"===a?ze(t,i)(e,r):null,new nt(s,c,"final"===a,o)}var b="POST",m=t.maxUploadRetryTime,g=new qe(r,b,v,m);return g.headers=d,g.body=_.uploadData(),g.progressCallback=s||null,g.errorHandler=Ve(e),g}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct=function(){function e(e,t,r){var n=te(e)||Y(t)||Y(r);if(n)this.next=e,this.error=t||null,this.complete=r||null;else{var o=e;this.next=o.next||null,this.error=o.error||null,this.complete=o.complete||null}}return e}(),lt=function(){function e(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pt(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i;break}var a=n<=r.length&&r.length<=o;if(!a)throw x(n,o,e,r.length);for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(s){throw s instanceof Error?O(i,e,s.message):O(i,e,s)}}var ht=function(){function e(e,t){var r=this;this.validator=function(t){r.optional&&!ee(t)||e(t)},this.optional=!!t}return e}();function ft(e,t){return function(r){e(r),t(r)}}function dt(e,t){function r(e){if(!ie(e))throw"Expected string."}var n;return n=e?ft(r,e):r,new ht(n,t)}function _t(){function e(e){var t=e instanceof Uint8Array||e instanceof ArrayBuffer||ce()&&e instanceof Blob;if(!t)throw"Expected Blob or File."}return new ht(e)}function vt(e){return new ht(Se,e)}function bt(e){return new ht(Me,e)}function mt(){function e(e){var t=se(e)&&e>=0;if(!t)throw"Expected a number 0 or greater."}return new ht(e)}function gt(e,t){function r(t){var r=null===t||Y(t)&&t instanceof Object;if(!r)throw"Expected an Object.";void 0!==e&&null!==e&&e(t)}return new ht(r,t)}function yt(e){function t(e){var t=null===e||te(e);if(!t)throw"Expected a Function."}return new ht(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt=function(){function e(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.service_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=J.RUNNING,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(b.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(J.ERROR))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(b.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(J.ERROR))},this.promise_=new Promise((function(e,t){a.resolve_=e,a.reject_=t,a.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===J.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.service_.getAuthToken().then((function(r){switch(t.state_){case J.RUNNING:e(r);break;case J.CANCELING:t.transition_(J.CANCELED);break;case J.PAUSING:t.transition_(J.PAUSED);break}}))},e.prototype.createResumable_=function(){var e=this;this.resolveToken_((function(t){var r=it(e.service_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_((function(r){var n=at(e.service_,e.location_,t,e.blob_),o=e.service_.makeRequest(n,r);e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=st*this.chunkMultiplier_,r=new nt(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_((function(o){var i;try{i=ut(e.location_,e.service_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(s){return e.error_=s,void e.transition_(J.ERROR)}var a=e.service_.makeRequest(i,o);e.request_=a,a.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(J.SUCCESS)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){var e=st*this.chunkMultiplier_;e<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_((function(t){var r=Ke(e.service_,e.location_,e.mappings_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(J.SUCCESS)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_((function(t){var r=rt(e.service_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(J.SUCCESS)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case J.CANCELING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case J.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case J.RUNNING:var t=this.state_===J.PAUSED;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case J.PAUSED:this.state_=e,this.notifyObservers_();break;case J.CANCELED:this.error_=k(),this.state_=e,this.notifyObservers_();break;case J.ERROR:this.state_=e,this.notifyObservers_();break;case J.SUCCESS:this.state_=e,this.notifyObservers_();break}},e.prototype.completeTransitions_=function(){switch(this.state_){case J.PAUSING:this.transition_(J.PAUSED);break;case J.CANCELING:this.transition_(J.CANCELED);break;case J.RUNNING:this.start_();break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=Q(this.state_);return new lt(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==K.STATE_CHANGED)throw"Expected one of the event types: ["+K.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=yt(!0).validator,s=gt(null,!0).validator;function u(e){try{return void a(e)}catch(r){}try{s(e);var t=ee(e["next"])||ee(e["error"])||ee(e["complete"]);if(!t)throw"";return}catch(r){throw i}}var c=[dt(o),gt(u,!0),yt(!0),yt(!0)];pt("on",c,arguments);var l=this;function p(e){function t(t,r,o){null!==e&&pt("on",e,arguments);var i=new ct(t,r,n);return l.addObserver_(i),function(){l.removeObserver_(i)}}return t}function h(e){if(null===e)throw i;u(e)}var f=[gt(h),yt(!0),yt(!0)],d=!(ee(t)||ee(r)||ee(n));return d?p(f):p(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_();var t=this.observers_.slice();t.forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(Q(this.state_)){case Z.SUCCESS:wt(this.resolve_.bind(null,this.snapshot))();break;case Z.CANCELED:case Z.ERROR:var t=this.reject_;wt(t.bind(null,this.error_))();break;default:e=!1;break}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){var t=Q(this.state_);switch(t){case Z.RUNNING:case Z.PAUSED:e.next&&wt(e.next.bind(e,this.snapshot))();break;case Z.SUCCESS:e.complete&&wt(e.complete.bind(e))();break;case Z.CANCELED:case Z.ERROR:e.error&&wt(e.error.bind(e,this.error_))();break;default:e.error&&wt(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){pt("resume",[],arguments);var e=this.state_===J.PAUSED||this.state_===J.PAUSING;return e&&this.transition_(J.RUNNING),e},e.prototype.pause=function(){pt("pause",[],arguments);var e=this.state_===J.RUNNING;return e&&this.transition_(J.PAUSING),e},e.prototype.cancel=function(){pt("cancel",[],arguments);var e=this.state_===J.RUNNING||this.state_===J.PAUSING;return e&&this.transition_(J.CANCELING),e},e}(),Et=function(){function e(e,t){this.service=e,this.location=t instanceof ve?t:ve.makeFromUrl(t)}return e.prototype.toString=function(){return pt("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return Te()},e.prototype.child=function(e){pt("child",[dt()],arguments);var t=ge(this.location.path,e),r=new ve(this.location.bucket,t);return this.newRef(this.service,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=me(this.location.path);if(null===e)return null;var t=new ve(this.location.bucket,e);return this.newRef(this.service,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new ve(this.location.bucket,"");return this.newRef(this.service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return ye(this.location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.service},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),pt("put",[_t(),vt(!0)],arguments),this.throwIfRoot_("put"),new Rt(this,this.service,this.location,this.mappings(),new _e(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=D.RAW),pt("putString",[dt(),dt(B,!0),vt(!0)],arguments),this.throwIfRoot_("putString");var n=G(t,e),o=Object.assign({},r);return!Y(o["contentType"])&&Y(n.contentType)&&(o["contentType"]=n.contentType),new Rt(this,this.service,this.location,this.mappings(),new _e(n.data,!0),o)},e.prototype.delete=function(){var e=this;return pt("delete",[],arguments),this.throwIfRoot_("delete"),this.service.getAuthToken().then((function(t){var r=Ye(e.service,e.location);return e.service.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){pt("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return u(this,void 0,void 0,(function(){var r,n,o,i;return c(this,(function(a){switch(a.label){case 0:return r={pageToken:t},[4,this.list(r)];case 1:return n=a.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(i=e.items).push.apply(i,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)];case 2:a.sent(),a.label=3;case 3:return[2]}}))}))},e.prototype.list=function(e){pt("list",[bt(!0)],arguments);var t=this;return this.service.getAuthToken().then((function(r){var n=e||{},o=Je(t.service,t.location,"/",n.pageToken,n.maxResults);return t.service.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this;return pt("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.service.getAuthToken().then((function(t){var r=Ke(e.service,e.location,e.mappings());return e.service.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this;return pt("updateMetadata",[vt()],arguments),this.throwIfRoot_("updateMetadata"),this.service.getAuthToken().then((function(r){var n=Qe(t.service,t.location,e,t.mappings());return t.service.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this;return pt("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.service.getAuthToken().then((function(t){var r=Ze(e.service,e.location,e.mappings());return e.service.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw N();return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw I(e)},e}(),Ut=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kt(e,t,r){var n=1,o=null,i=!1,a=0;function s(){return 2===a}var u=!1;function c(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];u||(u=!0,t.apply(null,e))}function p(t){o=setTimeout((function(){o=null,e(h,s())}),t)}function h(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!u)if(e)c.call.apply(c,l([null,e],t));else{var o,h=s()||i;if(h)c.call.apply(c,l([null,e],t));else n<64&&(n*=2),1===a?(a=2,o=0):o=1e3*(n+Math.random()),p(o)}}var f=!1;function d(e){f||(f=!0,u||(null!==o?(e||(a=2),clearTimeout(o),p(0)):e||(a=1)))}return p(0),setTimeout((function(){i=!0,d(!0)}),r),d}function Ct(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var p=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){p.resolve_=e,p.reject_=t,p.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){if(r)t(!1,new At(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null,r=r;var n=r.getErrorCode()===W.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new At(a,r))}else{var s=r.getErrorCode()===W.ABORT;t(!1,new At(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}function r(t,r){var n=e.resolve_,o=e.reject_,i=r.xhr;if(r.wasSuccessCode)try{var a=e.callback_(i,i.getResponseText());ee(a)?n(a):n()}catch(u){o(u)}else if(null!==i){var s=g();s.setServerResponseProp(i.getResponseText()),e.errorCallback_?o(e.errorCallback_(i,s)):o(s)}else if(r.canceled){s=e.appDelete_?S():k();o(s)}else{s=U();o(s)}}this.canceled_?r(!1,new At(!1,null,!0)):this.backoffId_=kt(t,r,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&Ct(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=[408,429],n=-1!==r.indexOf(e),o=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||o},e}(),At=function(){function e(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}return e}();function Pt(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Nt(e){var t="undefined"!==typeof s.a?s.a.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}function Ot(e,t){t&&(e["X-Firebase-GMPID"]=t)}function xt(e,t,r,n){var o=Re(e.urlParams),i=e.url+o,a=Object.assign({},e.headers);return Ot(a,t),Pt(a,r),Nt(a),new Tt(i,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St=function(){function e(t,r,n,o){var i;this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=t,this.authProvider_=r,this.maxOperationRetryTime_=d,this.maxUploadRetryTime_=_,this.requests_=new Set,this.pool_=n,this.bucket_=null!=o?ve.makeFromBucketSpec(o):e.extractBucket_(null===(i=this.app_)||void 0===i?void 0:i.options),this.internals_=new It(this)}return e.extractBucket_=function(e){var t=null===e||void 0===e?void 0:e[f];return null==t?null:ve.makeFromBucketSpec(t)},e.prototype.getAuthToken=function(){return u(this,void 0,void 0,(function(){var e,t;return c(this,(function(r){switch(r.label){case 0:return e=this.authProvider_.getImmediate({optional:!0}),e?[4,e.getToken()]:[3,2];case 1:if(t=r.sent(),null!==t)return[2,t.accessToken];r.label=2;case 2:return[2,null]}}))}))},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requests_.forEach((function(e){return e.cancel()})),this.requests_.clear()},e.prototype.makeStorageReference=function(e){return new Et(this,e)},e.prototype.makeRequest=function(e,t){var r=this;if(this.deleted_)return new Ut(S());var n=xt(e,this.appId_,t,this.pool_);return this.requests_.add(n),n.getPromise().then((function(){return r.requests_.delete(n)}),(function(){return r.requests_.delete(n)})),n},e.prototype.ref=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(pt("ref",[dt(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new Et(this,this.bucket_);return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{ve.makeFromUrl(e)}catch(t){throw"Expected valid full URL but got an invalid one."}}return pt("refFromURL",[dt(t,!1)],arguments),new Et(this,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.maxUploadRetryTime_},enumerable:!1,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){pt("setMaxUploadRetryTime",[mt()],arguments),this.maxUploadRetryTime_=e},Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this.maxOperationRetryTime_},enumerable:!1,configurable:!0}),e.prototype.setMaxOperationRetryTime=function(e){pt("setMaxOperationRetryTime",[mt()],arguments),this.maxOperationRetryTime_=e},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!1,configurable:!0}),e}(),It=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.deleteApp(),Promise.resolve()},e}(),jt="@firebase/storage",Lt="0.3.41",Dt="storage";function Bt(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new St(r,n,new pe,t)}function Ft(e){var t={TaskState:Z,TaskEvent:K,StringFormat:D,Storage:St,Reference:Et};e.INTERNAL.registerComponent(new p["Component"](Dt,Bt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(jt,Lt)}Ft(s.a);r("ea7b");var Gt={data(){return{header:null,projects:null,contact:null,db:i["database"](),newProject:{},newImageFile:{newProject:null}}},created(){this.getHeader(),this.getProjects(),this.getContact()},methods:{onSave(){const e={header:this.header,projects:this.projects,contact:this.contact};var t=new Blob([JSON.stringify(e)],{type:"text/plain"});const r=document.createEvent("MouseEvents"),n=document.createElement("a");n.download="website_data.json",n.href=window.URL.createObjectURL(t),n.dataset.downloadurl=["text/json",n.download,n.href].join(":"),r.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(r)},async addNewProject(){if(this.projects&&this.newProject){this.newImageFile&&(this.newProject.imageUrl=this.uploadImage(this.newImageFile.newProject));try{this.projects.push(this.newProject),i["database"]().ref("projects").set(this.projects),this.newProject={}}catch(e){alert("An error occured. Reason: "+e)}}},async uploadImage(e){let t;if(e)try{const r=i["storage"](),n=r.ref(),o=n.child("projects/"+e.name),a=await o.put(e);t=await a.ref.getDownloadURL()}catch(r){alert("An error occured. Reason: "+r)}return t},async onSubmit(e,t){"header"===e&&i["database"]().ref("header").update(this.header),"contact"===e&&i["database"]().ref("contact").update(this.contact),"projects"===e&&(this.newImageFile.index&&(console.log(this.projects[t].imageUrl),this.projects[t].imageUrl=await this.uploadImage(this.newImageFile.index)),i["database"]().ref("projects/"+t).update(this.projects[t]))},getHeader(){if(this.header)return;const e=this.db.ref("header");e.once("value",e=>{this.header=e.val()})},getProjects(){if(this.projects)return;const e=this.db.ref("projects");e.once("value",e=>{this.projects=e.val()})},getContact(){if(this.contact)return;const e=this.db.ref("contact");e.once("value",e=>{this.contact=e.val()})}},beforeRouteEnter(e,t,r){const n=e.matched.some(e=>e.meta.requiresAuth),o=i["auth"]().currentUser;n&&!o?r("/admin"):r()}},Mt=Gt,qt=(r("ccf6"),r("2877")),Ht=Object(qt["a"])(Mt,n,o,!1,null,"8934208a",null);t["default"]=Ht.exports},"4bfb":function(e,t,r){},ccf6:function(e,t,r){"use strict";var n=r("4bfb"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-7b06dea3.3d96ebad.js.map