(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){e.exports=n(271)},149:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),l=n(33),o=n.n(l),i=(n(149),n(112)),c=n(113),s=n(132),d=n(114),f=n(134),u=n(277),m=n(133),h=window.daikon,v={borderWidth:2,borderColor:"#666",borderStyle:"dashed",borderRadius:5,width:600,height:150,textAlign:"center"},g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).renderImage=function(e){if(e){h.Parser.verbose=!0;var t=h.Series.parseImage(new DataView(e)),a=t.getNumberOfFrames();if(a>1){var r="It is multi-frame file (n=".concat(a,")");n.setState({fileInfo:r})}else n.setState({fileInfo:""});n.setState({frameIndexes:Array.from({length:a},function(e,t){return{text:t,value:t}}),currentIndex:0}),n.currentImage=t,n.switchFrame(n.currentImage,0)}},n.switchFrame=function(e,t){for(var a=e.getInterpretedData(!1,!0,t),r=a.numCols,l=a.numRows,o=a.data[0],i=a.data[0],c=0;c<a.data.length;c+=1)a.data[c]>o&&(o=a.data[c]);for(var s=0;s<a.data.length;s+=1)a.data[s]<i&&(i=a.data[s]);for(var d=o-i,f=new Uint8ClampedArray(a.data.length),u=0;u<a.data.length;u+=1)f[u]=255*(a.data[u]-i)/d;if(n.myCanvasRef.current){var m=n.myCanvasRef.current;m.width=r,m.height=l;var h=m.getContext("2d"),v=h.createImageData(r,l),g=v.data;console.log(g.byteLength);for(var w=0,p=0;w<g.byteLength;w+=4,p+=1)g[w]=f[p],g[w+1]=f[p],g[w+2]=f[p],g[w+3]=255;h.putImageData(v,0,0)}else console.log("this.myCanvasRef is not ready, return")},n.fetchLocalFile=function(e){var t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="arraybuffer",t.onload=function(){var e=t.response;n.renderImage(e)},t.send()},n.onDropFile=function(e){if(e.length>0){var t=e[0];n.setState({filePath:t.name});var a=new FileReader;a.onload=function(){try{var e=a.result;n.renderImage(e)}catch(t){console.log("parse dicom error:",t)}},a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.readAsArrayBuffer(t)}},n.handleSwitchFrame=function(e,t){var a=t.value;console.log("switch frame:",a),n.setState({currentIndex:a}),n.switchFrame(n.currentImage,a)},n.state={filePath:"",fileInfo:"",currentIndex:0,frameIndexes:[]},n.myCanvasRef=r.a.createRef(),n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.href;if(console.log("current url:",e),-1!==e.indexOf("file://")&&-1!==e.indexOf(".dcm")){var t=e.split("#");if(t.length>1){var n=t[1];this.setState({filePath:n}),this.fetchLocalFile(n)}}}},{key:"render",value:function(){var e=this.state,t=e.filePath,n=e.fileInfo,a=e.frameIndexes,l=e.currentIndex;return r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",null,r.a.createElement("div",null,"DICOM Image Viewer"),r.a.createElement("div",null,r.a.createElement(m.a,{preventDropOnDocument:!1,style:v,onDrop:this.onDropFile},r.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",null,r.a.createElement("p",null," ","Try dropping DICOM image files here,",r.a.createElement("br",null),"or click here to select files to view."))))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},t||null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",null,n||null),r.a.createElement("div",null,a.length>1?r.a.createElement(u.a,{placeholder:"Switch Frame",selection:!0,onChange:this.handleSwitchFrame,options:a,value:l}):null)),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("canvas",{ref:this.myCanvasRef,width:"128",height:"128"}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[144,2,1]]]);
//# sourceMappingURL=main.c74e0a20.chunk.js.map