(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{x8Eu:function(t,e,s){"use strict";s.r(e);var l=s("QbLZ"),r=s.n(l),i=s("L2JU"),o={computed:r()({},Object(i.mapGetters)({clusterList:"clusterModule/filterClusterList",pagination:"clusterModule/pagination"})),methods:r()({},Object(i.mapActions)({getClusterDetailReq:"clusterModule/getClusterDetail"}),{handleEdit:function(t){this.$showModal("updateCluster"),this.getClusterDetailReq(t)}})},a=s("KHd+"),u=Object(a.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.$isShowLoading("clusterList"),expression:"$isShowLoading('clusterList')"}]},[s("el-table",{attrs:{data:t.clusterList,border:""}},[s("el-table-column",{attrs:{prop:"clusterId",label:"集群ID"}}),t._v(" "),s("el-table-column",{attrs:{prop:"business",label:"业务名称"}}),t._v(" "),s("el-table-column",{attrs:{prop:"description",label:"说明"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(s){t.handleEdit(e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),s("table-pagination",{attrs:{pagination:t.pagination}})],1)},[],!1,null,null,null).exports,n={data:function(){return{clusterForm:{clusterId:"",business:"",description:""},rules:{business:[{required:!0,message:"请填写业务名称",trigger:"blur"}]}}},computed:r()({},Object(i.mapGetters)({clusterDetail:"clusterModule/filterClusterDetail"}),{title:function(){return this.$isShowModal("updateCluster")?"更新集群信息":"添加集群"},modalIsShow:function(){return this.$isShowModal("updateCluster")||this.$isShowModal("addCluster")},isUpdate:function(){return this.$isShowModal("updateCluster")}}),methods:r()({},Object(i.mapActions)({addOrUpdateCluster:"clusterModule/addOrUpdateCluster"}),{handleClose:function(){this.$refs.clusterForm.resetFields(),this.isUpdate?this.$hideModal("updateCluster"):this.$hideModal("addCluster")},setValue:function(){var t=this.clusterDetail,e=t.clusterId,s=t.business,l=t.description;this.clusterForm={clusterId:e,business:s,description:l}},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(t){var s=e.$trim(r()({},e.clusterForm));e.isUpdate||delete s.clusterId,e.addOrUpdateCluster(s)}})}}),watch:{clusterDetail:function(){this.setValue()}}},c=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-dialog",{attrs:{visible:t.modalIsShow,"before-close":t.handleClose,center:"",title:t.title,width:"30%","close-on-click-modal":!1},on:{close:t.handleClose}},[s("el-form",{ref:"clusterForm",attrs:{model:t.clusterForm,rules:t.rules,"label-width":"100px","status-icon":!0}},[s("el-row",[s("el-col",{attrs:{span:22}},[s("el-form-item",{attrs:{prop:"business",label:"业务名称"}},[s("el-input",{attrs:{placeholder:"请输入业务名称",maxlength:50},model:{value:t.clusterForm.business,callback:function(e){t.$set(t.clusterForm,"business","string"==typeof e?e.trim():e)},expression:"clusterForm.business"}})],1)],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:22}},[s("el-form-item",{attrs:{prop:"description",label:"说明"}},[s("el-input",{attrs:{type:"textarea",rows:"2",placeholder:"请输入该业务的相关描述信息",maxlength:50},model:{value:t.clusterForm.description,callback:function(e){t.$set(t.clusterForm,"description","string"==typeof e?e.trim():e)},expression:"clusterForm.description"}})],1)],1)],1)],1),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"primary",loading:t.$isShowLoading("clusterAddOrUpdate")},on:{click:function(e){t.submitForm("clusterForm")}}},[t._v("确 定")])],1)],1)],1)},[],!1,null,null,null).exports,d={data:function(){this.$route.query.clusterId;return{form:{}}},methods:r()({},Object(i.mapActions)({getClusterListReq:"clusterModule/getClusterList"}),{getList:function(){var t=this.$formatSearchData(this.form);this.getClusterListReq(t),this.$router.replace({query:t})}})},m={components:{List:u,Modal:c,Search:Object(a.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",{staticClass:"query-form",attrs:{shadow:"never"}},[s("el-form",{attrs:{inline:!0,"label-width":"80px",model:t.form,onsubmit:"return false"}},[s("el-form-item",{attrs:{label:"集群ID"}},[s("el-input",{attrs:{placeholder:"请输入集群ID",clearable:""},model:{value:t.form.clusterId,callback:function(e){t.$set(t.form,"clusterId","string"==typeof e?e.trim():e)},expression:"form.clusterId"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(e){t.getList(t.form)}}},[t._v("查询")])],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"info",icon:"el-icon-circle-plus-outline",size:"small"},on:{click:function(e){t.$showModal("addCluster")}}},[t._v("添加")])],1)],1)],1)},[],!1,null,null,null).exports},created:function(){this.getClusterList()},computed:{query:function(){return this.$route.query}},methods:r()({},Object(i.mapActions)({getListReq:"clusterModule/getClusterList"}),{getClusterList:function(){this.getListReq(this.query)}}),watch:{query:function(){this.getClusterList()}}},p=Object(a.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("search"),this._v(" "),e("list"),this._v(" "),e("modal")],1)},[],!1,null,null,null);e.default=p.exports}}]);