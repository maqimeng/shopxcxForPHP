(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f15207e0"],{3770:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table"},[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-lx-cascades"}),t._v(" 内部码管理")])],1)],1),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),i("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")]),i("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(e){return t.handleEdit(void 0,void 0,1)}}},[t._v("添加")])],1),i("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.data,border:""},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),i("el-table-column",{attrs:{prop:"id",label:"ID",width:"70",align:"center"}}),i("el-table-column",{attrs:{prop:"title",align:"center",label:"标题",formatter:t.formatter}}),i("el-table-column",{attrs:{prop:"content",align:"center",label:"内部码"}}),i("el-table-column",{attrs:{prop:"number",align:"center",label:"砸蛋次数"}}),i("el-table-column",{attrs:{prop:"startdatetime",align:"center",label:"生成时间",sortable:"",width:"155"}}),i("el-table-column",{attrs:{prop:"status",align:"center",label:"状态"}}),i("el-table-column",{attrs:{prop:"enddatetime",align:"center",label:"使用时间",sortable:"",width:"155"}}),i("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(i){return t.handleEdit(e.$index,e.row,2)}}},[t._v("编辑")]),i("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(i){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.sumPage},on:{"current-change":t.handleCurrentChange}})],1)],1),i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{title:"编辑",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e}}},[i("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"标题",prop:"title"}},[i("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),i("el-form-item",{attrs:{label:"砸蛋次数",prop:"number"}},[i("el-input",{attrs:{placeholder:"请输入砸蛋次数"},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.hideEditVisible}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveEdit("form")}}},[t._v("确 定")])],1)],1),i("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[i("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)])],1)},a=[],n=(i("5c07"),i("53da"),i("2556"),i("d0f8"),{name:"basetable",data:function(){return{url:"./vuetable.json",tableData:[],cur_page:1,number:10,sumPage:10,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{id:"",title:"",content:"",number:"",startdatetime:"",status:"",enddatetime:""},idx:-1,dialogVisible:!1,AddOrSave:"",loading:!1,rules:{title:[{required:!0,message:"请输入角色名称",trigger:"blur"}],number:[{required:!0,message:"请输入砸蛋次数",trigger:"blur"}]}}},created:function(){this.getData()},computed:{data:function(){var t=this;return this.tableData.filter(function(e){for(var i=0;i<t.del_list.length;i++)if(e.title===t.del_list[i].title){!0;break}return e})}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this,e=this.$qs.stringify({select_word:this.select_word,pageIndex:this.cur_page,number:this.number});this.$api.post("InCode/getInCodeList",e,function(e){t.tableData=e.data.list,t.sumPage=10*e.data.sumPage,t.cur_page=e.data.currentPage,console.log(t.tableData)},function(e){t.tableData=[],t.$message.error(e.msg)})},search:function(){this.is_search=!0,this.getData()},formatter:function(t,e){return t.title},filterTag:function(t,e){return e.tag===t},handleEdit:function(t,e,i){if(console.log(e),this.AddOrSave=i,1==i&&(this.form={id:null,title:null,number:null,startdatetime:null,enddatetime:null}),void 0!=t&&void 0!=e){this.idx=t;var l=this.tableData[t];this.form={id:l.id,title:l.title,number:l.number,startdatetime:null,enddatetime:null}}this.editVisible=!0},handleDelete:function(t,e){this.idx=t,this.form=e,this.delVisible=!0},delAll:function(){var t=this.multipleSelection.length;this.del_list=this.del_list.concat(this.multipleSelection);for(var e=0;e<t;e++)this.multipleSelection[e].b_title+" ";console.log(this.del_list)},handleSelectionChange:function(t){this.multipleSelection=t},saveEdit:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("请输入数据"),!1;e.editVisible=!1;var i=null;i=1==e.AddOrSave?e.$qs.stringify({title:e.form.title,number:e.form.number}):e.$qs.stringify({id:e.form.id,title:e.form.title,number:e.form.number}),e.$api.post("InCode/saveInCode",i,function(t){e.getData(),e.$message.success(t.msg)},function(t){e.$message.error(t.msg)})})},deleteRow:function(){var t=this,e=this.$qs.stringify({id:this.form.id});this.$api.post("InCode/deleteInCode",e,function(e){t.getData(),t.$message.success(e.msg+e.data+"条数据")},function(e){t.$message.error(e.msg)}),this.delVisible=!1},hideEditVisible:function(){this.editVisible=!1}}}),r=n,s=(i("a07d0"),i("17cc")),o=Object(s["a"])(r,l,a,!1,null,"91a3ffde",null);e["default"]=o.exports},a07d0:function(t,e,i){"use strict";var l=i("bd6b"),a=i.n(l);a.a},bd6b:function(t,e,i){}}]);