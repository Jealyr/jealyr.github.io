webpackJsonp([2],{"2sLL":function(t,e,i){"use strict";var n=i("0FxO"),s=(Boolean,Boolean,Boolean,String,String,Boolean,String,Object,Array,{name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&Object(n.a)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(t){i("S7m8")},null,null);e.a=o.exports},A0LM:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACFklEQVRYR8WX4VHDMAyFpQmACYANYAJgAuQJgAkoE1AmgE5AmSBiAsoEwAQwAkzwuFecXlqS2HV64Ltef7SWPj8p8otK4TKzA1Xd4nYAX+7+WhJK19lkZnsici0ipqrbzb0APkRkKiITd//MjZsNYGbnInK7mng1EQAmD+4+y4HIAmByVb3PCVj/B8CFu1OR3pUEMLNjVX1KBepQ4tDdWZrOlQQIITDA7roAsTln7n5SDFB6+pXm3O9ToVcBMxurKru+eAG4cve7rgC9ACEEdvJRcfafGXHj7uP/BOBcGJUCuIic/psCZjZS1duBABxKPEjrSjXhnqq+DwD4qqpqaWSvxkrOATObqupZCUSqARkzB2BbVXnTrTuM3gAcpy6mJAAp49XLOuZCZCXPUqCW3sxYy7tUOQBMRGScOnkdN0uBZv2phojwduR33WCfAKgQG7738lmrCeOp+RgyaLbRiPvqEc5J2GlQOhUwMxOR+9qARMfDmf7QFTAmvhQRzo+5OtGg0Bu0zoJWgNQlBIBPBT+13LRq9IgsS+sCMHJ39sfS+gUw5LlPzQoAU3e/aP5vCWATozcDYsmqLQDis/6SCjD099gTJ7WNXwBs4u7PhQOwsGpzgBLXm5uspympwmwO8JenbwA9VlVl+le1b1MCwA4BBpuO0nLw5UVDCINt1wCACQGKXzxKEzf2PbMEnZZ5AwlSIT6+Af2RBQOHU/QiAAAAAElFTkSuQmCC"},JIVd:function(t,e){},QSFu:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWElEQVQ4T6WT0VHCQBCG/wXzoi92IFZgbjxmMDyYErADrMB0YKgAqIDYAR2YFyIziVw60A7EF1/ELLNiMklAHYZ7u7v9v71/d49w4KID9dgJ6Bi71YB1D8AloCVJGDzNgPFcJWE56Rbgylz2GqAJM95BCBicEsjewOiagSBS8W0OqQAc07YJMAAeZiru1+05pt0nYMLgQaQSX+5rAP39vEglbi52jA7L+67RHkDDL3yez1X6WgDEdxPWS4bs5kk9T3NA17R5puJqooVeEsGfqWRUAmi3CXqsB+8EGHkppZGKPbKNfXrCVgjCRclzUQNnoZcgDD+wGqcqXUqM2CoAclCDVAood8ewfDD3Mlq54lugWxY2gUdeXt16B6RGIv61iLngB3QXqWSwdxtF0DHabTCmIHoDOACQiksCXICkvRWLf42yJ76J6IyZZSrDDBj9O8r7fq6Df+ManL+mEf2GxLAAAAAASUVORK5CYII="},S7m8:function(t,e){},ZpuC:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("1DHf"),s=i("rHil"),a=i("/kga"),o=(a.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:a.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-confirm"},[i("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){return t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?i("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?i("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var i=t.msg,n=e.target,s=!!n.checked;if(Array.isArray(i)){var a=t._i(i,null);n.checked?a<0&&(t.msg=i.concat([null])):a>-1&&(t.msg=i.slice(0,a).concat(i.slice(a+1)))}else t.msg=s}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?i("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var r=i("VU/8")(o,l,!1,function(t){i("JIVd")},null,null).exports,u=i("+zLN"),c=i("HD9R"),d=i("2sLL"),p=i("pDNl"),g=i("63CM"),A=i("rLAy"),h=i("TVmP"),m=(i("NYxO"),g.a,h.a,n.a,s.a,u.a,c.a,d.a,p.a,A.a,{name:"Account",directives:{TransferDom:g.a},components:{Footer:h.a,Cell:n.a,Group:s.a,Confirm:r,AlertModule:u.a,Popup:c.a,XButton:d.a,XInput:p.a,Toast:A.a},data:function(){return{loginDialog:!1,userid:"",userpassword:"",showpassword:!1,showid:!1,userName:"点击登录"}},created:function(){this.userName=sessionStorage.getItem("userid")||"点击登录"},methods:{showModule:function(){var t=this;u.a.show({title:"提示",content:"请先登录！",maskZIndex:5e3,dialogTransition:"none",onHide:function(){t.loginDialog=!t.loginDialog}})},openLoginDialog:function(){"点击登录"===this.userName&&(this.loginDialog=!this.loginDialog)},login:function(){"admin"!=this.userid?this.showid=!this.showid:123456!=this.userpassword?this.showpassword=!this.showpassword:(this.loginDialog=!this.loginDialog,sessionStorage.setItem("userid","admin"),this.userName=sessionStorage.getItem("userid")||"点击登录")}}}),v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"account"},[i("header",{staticClass:"account-header"},[i("div",{staticClass:"account-header-login row"},[t._m(0),t._v(" "),i("p",{on:{click:t.openLoginDialog},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[t._v(" "+t._s(t.userName))])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),i("div",{staticClass:"account-body"},[i("group",["点击登录"!=t.userName?i("cell",{attrs:{title:t.$t("消息通知"),link:"/Notification"}}):i("cell",{attrs:{title:t.$t("消息通知"),"is-link":""},nativeOn:{click:function(e){return t.showModule(e)}}})],1),t._v(" "),i("group",["点击登录"!=t.userName?i("cell",{attrs:{title:"头条商城",value:t.$t("邀请好友得200元现金"),link:"/HeadlineMall"}}):i("cell",{attrs:{title:t.$t("头条商城"),value:t.$t("邀请好友得200元现金"),"is-link":""},nativeOn:{click:function(e){return t.showModule(e)}}}),t._v(" "),"点击登录"!=t.userName?i("cell",{attrs:{title:t.$t("京东特供"),value:t.$t("新人领188红包"),link:"/SpecialOffer"}}):i("cell",{attrs:{title:t.$t("京东特供"),value:t.$t("新人领188红包"),"is-link":""},nativeOn:{click:function(e){return t.showModule(e)}}})],1),t._v(" "),i("group",["点击登录"!=t.userName?i("cell",{attrs:{title:t.$t("用户反馈"),link:"/Feedback"}}):i("cell",{attrs:{title:t.$t("用户反馈"),"is-link":""},nativeOn:{click:function(e){return t.showModule(e)}}}),t._v(" "),"点击登录"!=t.userName?i("cell",{attrs:{title:t.$t("系统设置"),link:"/Setting"}}):i("cell",{attrs:{title:t.$t("系统设置"),"is-link":""},nativeOn:{click:function(e){return t.showModule(e)}}})],1)],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{staticClass:"account-bulletbox",attrs:{height:"100%"},model:{value:t.loginDialog,callback:function(e){t.loginDialog=e},expression:"loginDialog"}},[i("div",{staticClass:"popup"},[i("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close-empty account-bulletbox-icon",attrs:{type:"ios-close-empty",size:"30",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 512 512"},on:{click:t.openLoginDialog}},[i("path",{staticClass:"st0",attrs:{d:"M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"}})]),t._v(" "),i("p",[t._v("登录你的头条，精彩永不消失！")]),t._v(" "),i("x-input",{staticClass:"account-bulletbox-username",attrs:{placeholder:"用户名: admin",required:""},model:{value:t.userid,callback:function(e){t.userid="string"==typeof e?e.trim():e},expression:"userid"}}),t._v(" "),i("toast",{attrs:{type:"text",width:"10em"},model:{value:t.showid,callback:function(e){t.showid=e},expression:"showid"}},[t._v("请输入用户名：admin")]),t._v(" "),i("x-input",{staticClass:"account-bulletbox-password",attrs:{placeholder:"密码：123456",type:"password",required:""},model:{value:t.userpassword,callback:function(e){t.userpassword="string"==typeof e?e.trim():e},expression:"userpassword"}}),t._v(" "),i("toast",{attrs:{type:"text",width:"10em"},model:{value:t.showpassword,callback:function(e){t.showpassword=e},expression:"showpassword"}},[t._v("请输入密码：123456")]),t._v(" "),i("x-button",{staticStyle:{"border-radius":"99px"},attrs:{type:"warn"},nativeOn:{click:function(e){return t.login(e)}}},[t._v("进入头条")])],1)])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"account-header-pic"},[e("img",{attrs:{src:i("A0LM"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"account-header-center row"},[i("div",{staticClass:"account-header-center-box"},[i("p",[t._v(" 0 ")]),t._v(" "),i("p",[t._v("动态")])]),t._v(" "),i("div",{staticClass:"account-header-center-box"},[i("p",[t._v(" 0 ")]),t._v(" "),i("p",[t._v("关注")])]),t._v(" "),i("div",{staticClass:"account-header-center-box"},[i("p",[t._v(" 0 ")]),t._v(" "),i("p",[t._v("粉丝")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-header-bottom row"},[n("div",{staticClass:"account-header-center-box"},[n("img",{attrs:{src:i("oYGk"),alt:""}}),t._v(" "),n("p",[t._v("收藏")])]),t._v(" "),n("div",{staticClass:"account-header-center-box"},[n("img",{attrs:{src:i("QSFu"),alt:""}}),t._v(" "),n("p",[t._v("历史")])]),t._v(" "),n("div",{staticClass:"account-header-center-box"},[n("img",{attrs:{src:i("tH4y"),alt:""}}),t._v(" "),n("p",[t._v("推送")])])])}]};var f=i("VU/8")(m,v,!1,function(t){i("aw7h")},null,null);e.default=f.exports},aw7h:function(t,e){},oYGk:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABiElEQVQ4T42TQVLCQBREu0eQJQMniFWGdW4gR/AIsCQs1BOYG5BNwlK8AUeAG+CWWEVOALNVcL41sUIFNBbZJFPz5013/x+i5tGTjVbX+4nbtp/NJ/N0Y/4qZR2gm65nEGUAMaB427A3uBigpxuPcljJR8Nzh9g65MJGYEY3+TnkTwXdJItc4XbsF+9iXaPiCNDTrI8vtNUVArEYymcjKH27PHh9WFHhxQpzQHIT+stCnaMLMACRU7hyni1kbsa9VVWuTtaBAu8BaqEEEHgEZuymmWxDvzbMupALa2km7CbvMWDb23Fv+F/x+V7ZpeLmnwXkUkhR70IOe4Oj9Esh1cNFiFVpnTQzrvd1U1f6rmb2C7ALff1fFp0ky6stPpkDCqJd6PdLgOu/+64q6qTZQojIjPzFiQWdrAcK9Mrpc2uCExAU8MGEt6/lVFrCmNCPTwFp9kjgTsA5YSMCS8tmMcpK9pEI+0I+K7F9S779Brjft7WPRahFIS4lHu0k64BgRIqxH83H0tY3ZlTMqJ02aIAAAAAASUVORK5CYII="},tH4y:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVQ4T72TQU7CQBiF32u7MZKoNyhrIXbJYhp7BI7ADewRegSOUG/AEZpQWNeAcSnegAVxVXnmR0pMBTckzGoyk/fN9/8zQ5w5eGYelwO8DQbhl+8/wvMSAImk535ZZicNWoE7AGtIDyAjSB/XQRB1i2J9ALQDlFYkiyvfLzZ1nYJ8gvRCciUp75dlYf3bARbOZSQjD8gtYGRbX8bxCJKFb0wZQOEBw/uyTJvmHwxenRtru81783m1cC4hmZqFyFDSuBME1aauJ50gGDYHHAwa2g7yE6h2m2R47fupBWxvC0wa9T8GtvCeJLefdZ3ZXNKqN5uN9yUmbfWjgH3dE0ghyKo3nY4Mekz9JGDhXEFAALogM0rRMfX/AHYjoZ2+jOOc0vp319tP/3JP+dSnO9vgG1IClxHqA7p5AAAAAElFTkSuQmCC"}});
//# sourceMappingURL=2.e9d75e1dfdfb0c1f4f10.js.map