webpackJsonp([3],{"4XEq":function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVQ4T62SgU1DMQxE7zYoGzBCR+gIzgT9TFA2gA1gA8oE/zaADYAJYIQywaFE/0tpSPmgYimKlPierbOJM4NZn1I6AHitWbavJZW3iNgA2Eq6auvNgOdxHHNSNzKA5JPtfQv5LWAg+ZDpLeQkICIGADuS67atGtIFRMSe5PYnf2fIN0BE3JPcLQ3H9qOk4QgQESsA7yTzfTJmcU5oAcXtSflpWwDyuSR5N5lYKs/0FnBL8gbAm+2NpLwfZQ+mMR6Jex1kQNTiapGGunJKqexOz4OVpI8lE7uAJVH9/++Ag+2Xv3QAYC3ponhwTnwB41a0EeCq5sUAAAAASUVORK5CYII="},"8/YI":function(a,t){},Ab4i:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBElEQVQ4T7WT0U3DQBBEZyrAdJIOIB3sVQAdYCoAKsDpgA5uUoEpIS3QgVPBogl2hIiCLQXu56S729nZt3vEhYtTfESsSF4t0cvMvaSd3x4EIqIj+bAkeHqTmRtJ7UGglJKZWSRpiUhEBMlaa+V3gbWk94UCtyT7vxcAsCN5U2vdjmxW3idgtg7ALg381AEAW3vKzEdJXSllMBxJ1xHRknzNzBeLnBMY3BQAnaRhzGgHiogGQGtDAJr/YXBJF1xr79okbUaAtnxuuAxxXWttpkn0QWe6mfk8ku5JfgAwl5OVma27c/wLY1YH3xkSgK2k+7nB+ingEX376tx88PEzzWX57f4Tf5C3EaICEwUAAAAASUVORK5CYII="},"O/M3":function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACn0lEQVRYR+2XTU7bQBTH/y8fEipSi7rqrum+ajM0kahZEE7QcALICRJOQOgFSE/Q5AR1T0A2uEgOHbNiWbLspiQLwiIfr5o4TmzjhNixCot6NbLH7/3mfQ/hkR96ZP14mgCazGcBlAmcictCI5B+h37DElbHLfOeBTSZPyDga1yK3XIYsEbo750L69p57wHYkrlCEnSqPjJzl4h0Bk83R4UipiII78dyAcsQpggE0GROJ9AnpbxHg4zfXFEB1H/bMlcB6EStRxjt/RAXulp7LLAt82xT8rEhWtVVFAb9GyT/QYAtmc0kkdxhJC4NYVqrQEUC0H7mronotVI8RP+NO4DCwoQGyMrsxjrSN44iBkqGMOthFTv7QwPYwZNXCvfBuLylfmGVwIwEEPW0sQXhf4BlLKDJXJVAR5MaUjVE6/ifueCj/FBMIPHNV/PrhjBLfojYg1Cl6TOkJQEZZm4TqOOq+V8MYVbcEJEB7A7JJwBtMFjvYVBS6ajJfI2AslPf7zBsrnO66YLw1I1IAEEmBrjJoEMC5MTv3w3RKqr1uHjNgQgNoAYTAp+OT87cBaE2Czb8IeBlUOccu4ZTqoS/ALjDoF3VR0IB9DCoufzbBVFhIqTO4H2aNlI+PBOtmj/gxlMVc9OBGGIgkkj/8nfbud3Q7tVOas16wOR0bSJ6zuDfhmi9mpeq7gFnCN6dDjuudr8AgHSAawCplPI0oM2Lt+/WEmufb/i2fLV51V5UK2wIZJWVQrngUQYSV+9vnAnzYJkquOwee7CxYwCYxY3HBe68ZnB1hEFjlQHEgVOpTEgcEaDGfc9g4wHw5/Cypwu3z5s19+4FdnlNqel4J5zgxbvtOkIVf0DPvZopnwGp2G5G56LVDEJ8mnfDOE3/kKy/XzoNP1E8aOEAAAAASUVORK5CYII="},gnOB:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("63CM"),A=(s("/kga"),s("HD9R")),n=s("+zLN"),l=s("sqAx"),o=s("teIl"),d=s("TVmP"),r=s("mtWM"),c=s.n(r),g=(i.a,l.a,o.a,d.a,A.a,n.a,{name:"Headlines",directives:{TransferDom:i.a},components:{NoData:l.a,Header:o.a,Footer:d.a,Popup:A.a,AlertModule:n.a},data:function(){return{headlinesList:[],showHeadlinesDetails:!1,headlinesDetails:{}}},created:function(){var a=this;c.a.get("https://www.easy-mock.com/mock/5d0b684896278014af027705/TodayHeadlines/headlinesList").then(function(t){a.headlinesList=t.data.data.list||[e]}).catch(function(a){console.log(a)})},methods:{changePraise:function(a){this.headlinesList[a].praise=!this.headlinesList[a].praise},toHeadlinesDetails:function(a){this.headlinesDetails=a,this.showHeadlinesDetails=!0},undoneShare:function(){sessionStorage.getItem("userid")?this.showUndonePrompt():this.showPrompt()},showPrompt:function(){n.a.show({title:"提示",content:"请先登录！",maskZIndex:5e3,dialogTransition:"none"})},showUndonePrompt:function(){n.a.show({title:"提示",content:"该模块暂未完成！",maskZIndex:5e3,dialogTransition:"none"})}}}),h={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"headlines"},[e("header",{staticClass:"headlines-header row"},[e("div",{staticClass:"row headlines-header-box",on:{click:a.undoneShare}},[e("img",{attrs:{src:s("xBBE"),alt:""}}),a._v(" "),e("p",[a._v("文字")])]),a._v(" "),e("div",{staticClass:"row headlines-header-box",on:{click:a.undoneShare}},[e("img",{attrs:{src:s("O/M3"),alt:""}}),a._v(" "),e("p",[a._v("图片")])]),a._v(" "),e("div",{staticClass:"row headlines-header-box",on:{click:a.undoneShare}},[e("img",{attrs:{src:s("uQeQ"),alt:""}}),a._v(" "),e("p",[a._v("上传视频")])])]),a._v(" "),e("div",{staticClass:"headlines-body"},[a._l(a.headlinesList,function(t,i){return e("section",{key:t.id},[e("div",[e("div",{staticClass:"author"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.userimg,alt:""}})]),a._v(" "),e("div",{staticClass:"zuozhe"},[e("p",{staticClass:"author-name"},[a._v(a._s(t.author))]),a._v(" "),e("p",{staticClass:"author-career"},[a._v(" "+a._s(t.time)+"小时以前."+a._s(t.career)+" ")])]),a._v(" "),e("div",{staticClass:"follow",on:{click:function(a){t.attention=!t.attention}}},[t.attention?e("div",{staticClass:"followed"},[e("p",[a._v("已关注")])]):e("div",[e("p",[a._v("关注")])])])]),a._v(" "),e("div",{staticClass:"content",on:{click:function(e){return a.toHeadlinesDetails(t)}}},[e("div",{staticClass:"article"},[a._v("\n              "+a._s(t.intro)+"\n          ")]),a._v(" "),e("div",{staticClass:"pictures"},a._l(t.picture,function(a,s){return e("div",{class:t.picture.length<=2?"halfWidth":"quarter"},[e("img",{attrs:{src:a,alt:""}})])}),0)]),a._v(" "),e("div",{staticClass:"about"},[e("p",[a._v("浏览"+a._s(t.read_num)+"次")]),a._v(" "),e("div",{staticClass:"about-right"},[e("img",{attrs:{src:t.praise?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbklEQVQ4T5WTQVLCQBBF/0/iyoXcQFiqoYQdBTPlHEFPoEfAG8QbcASOgCcgVEaKnVjEcqnewI0rE9oailCIgGaW3dOvu393E3teqnUfwDVEYsznt+F4PN38zl3xabvdgO8/esDVHLiByHFobfP/gE6nC/ImtLYxU8qQHIZJ8ivh1gpejal8ZtmQwOjM2m5pQKr1ACLVwyAwtTj+eFaqJ4Bx1fzZwkypCGSXeW4K0WZafxA4WgWLxIdBcOXgXNLPV07SOOFOk2RQ2FwL65kJ9AjErj2mWssa+d3PMnMymbztG++iSsDUrTU/ACIycsZ9wUuBpwL069ZGpQEOnir1BjIKk6RfGvDSalXzg4NX5HnTiVwasLkTC4CI3DlRXHl/abC5EwVgQKAKsiIivSDL7ndNIlVqCpF++PDQcwmZdjpdIS8L5ZegY4hMCQw8Mi58cxEjZOR/fdWKBFtvwV2ieJ6DuiO6WNuTJ4+M1pfsG6BM0RHwxNdeAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLElEQVQ4T52TYVUDQQyEMwqogxYFtAo4CYkCkFAcHA4q4RxsUFCqgKKA4qAOhjf37njX0nIc+bm7+ZJMZmG/hLs3AB5IvprZU2buz5/jWr67LwG8kQwAjyTnmbmaAlgrsZSydPcKwLaU8qPgxQ7cfWZmWzPbZeZ6MiAi0swWJKvMPLr7BkClbkZHcPcawLpLbkWLiKOZ3fTJnaghOEQ3s7v+UpUkXGaqizY0wrAygI0gGg8RwcHlZ1f5MLJedamRqnPATocjyTMAe5JNZtaTAZ0mB5J1ZjaTAe6+APBBciVn/gdwYqoWQPJZoqi9P2hw4oke0BrHzORArfUlMy9uIiJ6AfXO5AN53gfKCzQnKRMlAP3ENrRiADXJ277Atb8gy3o31v0A/t6p/22yLxt0xxGFj58LAAAAAElFTkSuQmCC",alt:""},on:{click:function(t){return a.changePraise(i)}}}),a._v(" "),e("img",{attrs:{src:s("Ab4i"),alt:""}}),a._v(" "),e("img",{attrs:{src:s("4XEq"),alt:""}})])])])])}),a._v(" "),a.headlinesList&&a.headlinesList.length>0?e("NoData"):a._e()],2),a._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("popup",{staticClass:"headlinesDetailsbox",attrs:{position:"right",height:"100%",width:"100%"},model:{value:a.showHeadlinesDetails,callback:function(t){a.showHeadlinesDetails=t},expression:"showHeadlinesDetails"}},[e("div",{staticClass:"popup"},[e("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close-empty showHeadlinesDetails-icon",attrs:{type:"ios-close-empty",size:"30",position:"absolute",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 512 512"},on:{click:function(t){a.showHeadlinesDetails=!1}}},[e("path",{staticClass:"st0",attrs:{d:"M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"}})]),a._v(" "),e("p",{staticClass:"headlinesDetailsbox-title"},[a._v(a._s(a.headlinesDetails.author))]),a._v(" "),e("div",{staticClass:"headlinesDetailsbox-header"},[e("img",{attrs:{src:a.headlinesDetails.userimg,alt:""}}),a._v(" "),e("span",{staticClass:"headlinesDetailsbox-header-span"},[e("h4",[a._v(a._s(a.headlinesDetails.source))]),a._v(" "),e("p",[a._v(a._s(a.headlinesDetails.duration)+"小时以前")])]),a._v(" "),e("div",{staticClass:"headlinesDetailsbox-follow",on:{click:function(t){a.headlinesDetails.attention=!a.headlinesDetails.attention}}},[a.headlinesDetails.attention?e("div",{staticClass:"headlinesDetailsbox-follow-followed"},[e("p",[a._v("已关注")])]):e("div",[e("p",[a._v("关注")])])])]),a._v(" "),e("article",{staticClass:"headlinesDetailsbox-article"},[a._v("\n          "+a._s(a.headlinesDetails.intro)+"\n        ")]),a._v(" "),e("div",{staticClass:"headlinesDetailsbox-keyword row"},a._l(a.headlinesDetails.keyword,function(t,s){return e("span",{key:t},[a._v(a._s(t))])}),0),a._v(" "),e("div",{staticClass:"headlinesDetailsbox-like row",on:{click:function(t){a.headlinesDetails.liked=!a.headlinesDetails.liked}}},[a.headlinesDetails.liked?e("div",{staticClass:"headlinesDetailsbox-like-liked row"},[e("img",{attrs:{src:s("JFxr"),alt:""}}),a._v(" "),e("p",[a._v(" "+a._s(a.headlinesDetails.like+1)+" ")])]):e("div",{staticClass:"row"},[e("img",{attrs:{src:s("knK7"),alt:""}}),a._v(" "),e("p",[a._v(" "+a._s(a.headlinesDetails.like)+" ")])])])])])],1)])},staticRenderFns:[]};var v=s("VU/8")(g,h,!1,function(a){s("8/YI")},"data-v-27eebb71",null);t.default=v.exports},uQeQ:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABb0lEQVRYR+1WQW6CQBT9H2fVNCk3KF02ldSl0ZmUI/QG9QjcoHqC6knsDaRxYlw2gaTL0hu4cWPA3wxRQymKCRlwAds/89+b9+Y/BqHmD2vGh4ZAo8DlKOBz7hgAT2Wn4oqxyZ3nrY71+XYcc73ZWO3F4lOtOSjgC7FCgJuyBJBo8iClm9fnq9u1YsamgNhpz+cJ9oFAIASVBVf7iejDltLJ9lIKA+IUAUxVq5RA0O+7YBhvaVKVEEj8jmMFPMgqop1AAh5FM+V3nrVaCeB261KrNdv7XSkBAAgJwDwFrvUSnjtJ2iyonwDRDyEqC06GmjYFVBBdM/a8jiIPEB+PKaKVgErCXQaMAeCl0inIRrHP+RARXysPojRgIMSAAMbpe6HdguyJg16vA4bxDoi3+TnAebgvnjtKeeuIaGRLOcyr7eI5uZz/FFD/6ogxqwy42mtL6RX1UFj3y2X45z1QtElX/XLehLpOWNS3UaBR4BcoasghwRdMHQAAAABJRU5ErkJggg=="},xBBE:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACO0lEQVRYR8WXQXbaMBCG/+ElZVnDCdIF3oaeIMkJ2t6ALIs3zgnaG9AsTJZJb5CeINwgydZeNL0A1TYJT9MnxfaTjYQMGMoa9H36ZzQShB19+tNsAiBWy0vmWEThpQ1Fu+D3k/QaRCNm/AEhIOA9mG/mUXhe57UuUMLBj/x8eKqA1H2dEejYJtGqQB0uLj4IJRBMfgcuidYEXPAicpdEKwJmzfnlYFjsvF5vm8TWAgW8gEnmcxGFN67mNiUkcLGVQCV2opgYt6rjm0ksntR3Nxaw1TxI0iERzXwSeQr3BDraSGBVw/kkNPzd6x0RDcF0ubaAr9v1sXMkUYGDf87H4WgtgSbw8tjVJPByeFvuPIfrIdV0FPvgatciCh/M9cwkGPykag4D3lhgZc2Nmkrmj0sSV9lph3H3JvYWuynpTaApnBm//kaDz5UEzIazwL0JNIXbdmZruLWu433AnQnsC24V2Cd8SWDf8IrA/4CXAt4hM83iDjDZpttdA48CY1BIwpn4OpjZHhLoLkZiPPix7jn3TdqKADMEg8/q08y2SNNz7hfI41WTjAifmki0Bdc90E+y7yB8U/FD8lGH6HqVRJvwJQFV/yBJRy6JtuFaoDfN1BPqRD4f9Mp3vEViF/CKwHw8qNyMlSQ6+EKSJ/oZ5bjVfM3mPIa9JL1XCxcCaqfoLo7zIRETYFyxy/f5puDid9SfZqyajgjB6sXah+clSB/UH0cGPwKk/8sRQw8jSRAg6GeWbUBtu3v1+38L/3FHN2+elgAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=3.b05b0cf1d07730dff405.js.map