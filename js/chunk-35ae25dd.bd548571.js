(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35ae25dd"],{"1c22":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table"},[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 问答管理")])],1)],1),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),i("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")]),i("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(t){return e.handleEdit(void 0,void 0,1)}}},[e._v("添加")])],1),i("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),i("el-table-column",{attrs:{prop:"id",label:"ID",width:"70",align:"center"}}),i("el-table-column",{attrs:{prop:"ask",align:"center",label:"问题","show-overflow-tooltip":!0}}),i("el-table-column",{attrs:{prop:"answer",align:"center",label:"回答","show-overflow-tooltip":!0}}),i("el-table-column",{attrs:{prop:"casemenu",align:"center",width:"150",label:"分类"}}),i("el-table-column",{attrs:{prop:"looknum",align:"center",width:"100",label:"浏览量"}}),i("el-table-column",{attrs:{prop:"sort",label:"排序",width:"130",align:"center"}}),i("el-table-column",{attrs:{prop:"datetime",label:"更新时间",width:"180",align:"center",sortable:""}}),i("el-table-column",{attrs:{label:"操作",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(i){return e.handleEdit(t.$index,t.row,2)}}},[e._v("编辑")]),i("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(i){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.sumPage},on:{"current-change":e.handleCurrentChange}})],1)],1),i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:"编辑",visible:e.editVisible,width:"70%"},on:{"update:visible":function(t){e.editVisible=t}}},[i("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"问题",prop:"ask"}},[i("el-input",{staticStyle:{width:"600px"},attrs:{type:"textarea",rows:6},model:{value:e.form.ask,callback:function(t){e.$set(e.form,"ask",t)},expression:"form.ask"}})],1),i("el-form-item",{attrs:{label:"回答",prop:"answer"}},[i("el-input",{staticStyle:{width:"600px"},attrs:{type:"textarea",rows:6},model:{value:e.form.answer,callback:function(t){e.$set(e.form,"answer",t)},expression:"form.answer"}})],1),i("el-form-item",{attrs:{label:"日记类别",prop:"casemenuid"}},[i("el-select",{model:{value:e.form.casemenuid,callback:function(t){e.$set(e.form,"casemenuid",t)},expression:"form.casemenuid"}},e._l(e.caseList,function(t){return i("el-option",{key:t.id,attrs:{label:t.title,value:t.id}},[e._v(e._s(t.title)+"\n                    ")])}),1)],1),i("el-form-item",{attrs:{label:"浏览量",prop:"looknum"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入浏览量"},model:{value:e.form.looknum,callback:function(t){e.$set(e.form,"looknum",t)},expression:"form.looknum"}})],1),i("el-form-item",{attrs:{label:"排序"}},[i("el-input",{staticStyle:{width:"150px"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}}),i("span",{staticStyle:{color:"red"}},[e._v("  注：数值越大展示越靠前，不输入则默认排序")])],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.saveEdit("form")}}},[e._v("确 定")])],1)],1),i("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[i("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},o=[],s=(i("fa26"),i("fb59"),i("1b79"),i("3040"),i("cac2"),i("1e58"),i("b881")),n=i("b049");s["Quill"].register("modules/ImageExtend",n["a"]);var l={name:"basetable",components:{quillEditor:s["quillEditor"]},data:function(){return{url:"./vuetable.json",tableData:[],cur_page:1,number:10,sumPage:10,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{id:"",casemenuid:"",casemenu:"",ask:"",answer:"",looknum:"",sort:"",datetime:""},idx:-1,dialogVisible:!1,AddOrSave:"",rules:{ask:[{required:!0,message:"请输入问题",trigger:"blur"}],answer:[{required:!0,message:"请输入回答",trigger:"blur"}],casemenuid:[{required:!0,message:"请选择日记类别",trigger:"change"}],looknum:[{required:!0,message:"请输入浏览量",trigger:"blur"}]},dialogImageUrl:"",isShowBigImg:!1,editorOption:{modules:{ImageExtend:{loading:!0,name:"image",action:this.$api.uploadUrl+"/Images/uploadEditorImage",response:function(e){return e.data}},toolbar:{container:n["c"],handlers:{image:function(){n["b"].emit(this.quill.id)}}}}},inputVisible:!1,inputValue:"",loading:!1,goodsList:[],type:[],caseList:[]}},created:function(){this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var i=0;i<e.del_list.length;i++)if(t.title===e.del_list[i].title){!0;break}return t})}},methods:{onEditorChange:function(e){e.editor;var t=e.html;e.text;this.form.details=t},handleRemove:function(e,t){var i=this,a=null;a=void 0!=e.id?e.id:e.response.data;var o=this.$qs.stringify({imgId:a,id:this.form.id});console.log(o),this.$api.post("ShopIntegralGoods/delImage",o,function(e){var t=i.form.swiperimgTemp;t.forEach(function(e,t,i){e==a&&i.splice(t,1)}),i.$message.success(e.msg)},function(e){var t=i.form.swiperimgTemp;t.forEach(function(e,t,i){e==a&&i.splice(t,1)}),i.$message.error(e.msg)})},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.isShowBigImg=!0},uploadUrl:function(){var e=this.$api.uploadUrl+"/Images/upload";return e},beforeAvatarUpload:function(e){console.log(this.form.pic),console.log(e),this.loading=!0},uploading:function(e,t,i){},uploadError:function(e){this.$message.error(e.msg)},handleAvatarSuccess:function(e,t){this.loading=!1,console.log(e),this.form.doctor_face=e.data,this.form.face=URL.createObjectURL(t.raw),this.$message.success(e.msg)},handleAvatarSuccess2:function(e,t){this.loading=!1,console.log(e),this.form.doctor_card=e.data,this.form.card=URL.createObjectURL(t.raw),this.$message.success(e.msg)},handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){var e=this,t=this.$qs.stringify({select_word:this.select_word,pageIndex:this.cur_page,number:this.number});this.$api.post("ShopAsk/getDoctorList",t,function(t){e.tableData=t.data.list,e.sumPage=10*t.data.sumPage,e.cur_page=t.data.currentPage,console.log(t)},function(t){e.tableData=[],e.$message.error(t.msg)})},search:function(){this.is_search=!0,this.getData()},formatter:function(e,t){return e.url},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t,i){if(this.getCaseMenuList(),this.AddOrSave=i,1==i&&(this.form={id:null,casemenuid:null,casemenu:null,ask:null,answer:null,looknum:null,sort:null,datetime:null}),void 0!=e&&void 0!=t){this.idx=e;var a=this.tableData[e];this.form={id:a.id,casemenuid:a.casemenuid,casemenu:a.casemenu,ask:a.ask,answer:a.answer,looknum:a.looknum,sort:a.sort,datetime:a.datetime}}this.editVisible=!0},handleDelete:function(e,t){this.idx=e,this.form=t,this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length;this.del_list=this.del_list.concat(this.multipleSelection);for(var t=0;t<e;t++)this.multipleSelection[t].b_title+" ";console.log(this.del_list)},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("请填写所需数据"),!1;t.editVisible=!1;var i=null;i=1==t.AddOrSave?t.$qs.stringify({ask:t.form.ask,casemenuid:t.form.casemenuid,answer:t.form.answer,looknum:t.form.looknum,sort:t.form.sort}):t.$qs.stringify({id:t.form.id,casemenuid:t.form.casemenuid,ask:t.form.ask,answer:t.form.answer,looknum:t.form.looknum,sort:t.form.sort}),t.$api.post("ShopAsk/saveAsk",i,function(e){t.getData(),t.$message.success(e.msg)},function(e){t.$message.error(e.msg)})})},deleteRow:function(){var e=this,t=this.$qs.stringify({id:this.form.id});this.$api.post("ShopAsk/deleteAsk",t,function(t){e.getData(),e.$message.success(t.msg+t.data+"条数据")},function(t){e.$message.error(t.msg)}),this.delVisible=!1},escapeStringHTML:function(e){return e&&(e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">"),e=e.replace(/&quot;/g,'"')),e},submit:function(){var e=this.escapeStringHTML(this.form.details);console.log(e)},getCaseMenuList:function(){var e=this;this.$api.post("ShopCase/getCaseMenuList",null,function(t){e.caseList=t.data,console.log(e.caseList)},function(t){e.$message.error(t.msg)})}}},r=l,c=(i("77f1"),i("17cc")),u=Object(c["a"])(r,a,o,!1,null,"5d0f02bc",null);t["default"]=u.exports},"77f1":function(e,t,i){"use strict";var a=i("c358"),o=i.n(a);o.a},b049:function(e,t,i){"use strict";i.d(t,"b",function(){return a}),i.d(t,"a",function(){return o}),i.d(t,"c",function(){return n});const a={watcher:{},active:null,on:function(e,t){this.watcher[e]||(this.watcher[e]=t)},emit:function(e,t=1){this.active=this.watcher[e],1===t&&s()}};class o{constructor(e,t={}){this.id=Math.random(),this.quill=e,this.quill.id=this.id,this.config=t,this.file="",this.imgURL="",e.root.addEventListener("paste",this.pasteHandle.bind(this),!1),e.root.addEventListener("drop",this.dropHandle.bind(this),!1),e.root.addEventListener("dropover",function(e){e.preventDefault()},!1),this.cursorIndex=0,a.on(this.id,this)}pasteHandle(e){a.emit(this.quill.id,0);let t,i,o,s=e.clipboardData,n=0;if(s){if(t=s.items,!t)return;for(i=t[0],o=s.types||[];n<o.length;n++)if("Files"===o[n]){i=t[n];break}if(i&&"file"===i.kind&&i.type.match(/^image\//i)){this.file=i.getAsFile();let e=this;if(e.config.size&&e.file.size>=1024*e.config.size*1024)return void(e.config.sizeError&&e.config.sizeError());this.config.action}}}dropHandle(e){a.emit(this.quill.id,0);const t=this;e.preventDefault(),t.config.size&&t.file.size>=1024*t.config.size*1024?t.config.sizeError&&t.config.sizeError():(t.file=e.dataTransfer.files[0],this.config.action?t.uploadImg():t.toBase64())}toBase64(){const e=this,t=new FileReader;t.onload=(t=>{e.imgURL=t.target.result,e.insertImg()}),t.readAsDataURL(e.file)}uploadImg(){const e=this;e.quillLoading;let t=e.config,i=new FormData;i.append(t.name,e.file),t.editForm&&t.editForm(i);let o=new XMLHttpRequest;o.open("post",t.action,!0),t.headers&&t.headers(o),t.change&&t.change(o,i),o.onreadystatechange=function(){if(4===o.readyState)if(200===o.status){let i=JSON.parse(o.responseText);e.imgURL=t.response(i),a.active.uploadSuccess(),e.insertImg(),e.config.success&&e.config.success()}else e.config.error&&e.config.error(),a.active.uploadError()},o.upload.onloadstart=function(e){a.active.uploading(),t.start&&t.start()},o.upload.onprogress=function(e){let t=(e.loaded/e.total*100|0)+"%";a.active.progress(t)},o.upload.onerror=function(e){a.active.uploadError(),t.error&&t.error()},o.upload.onloadend=function(e){t.end&&t.end()},o.send(i)}insertImg(){const e=a.active;e.quill.insertEmbed(a.active.cursorIndex,"image",e.imgURL),e.quill.update(),e.quill.setSelection(e.cursorIndex+1)}progress(e){e="[uploading"+e+"]",a.active.quill.root.innerHTML=a.active.quill.root.innerHTML.replace(/\[uploading.*?\]/,e)}uploading(){let e=(a.active.quill.getSelection()||{}).index||a.active.quill.getLength();a.active.cursorIndex=e,a.active.quill.insertText(a.active.cursorIndex,"[uploading...]",{color:"red"},!0)}uploadError(){a.active.quill.root.innerHTML=a.active.quill.root.innerHTML.replace(/\[uploading.*?\]/,"[upload error]")}uploadSuccess(){a.active.quill.root.innerHTML=a.active.quill.root.innerHTML.replace(/\[uploading.*?\]/,"")}}function s(){let e=document.querySelector(".quill-image-input");null===e&&(e=document.createElement("input"),e.setAttribute("type","file"),e.classList.add("quill-image-input"),e.style.display="none",e.addEventListener("change",function(){let t=a.active;t.file=e.files[0],e.value="",t.config.size&&t.file.size>=1024*t.config.size*1024?t.config.sizeError&&t.config.sizeError():t.config.action?t.uploadImg():t.toBase64()}),document.body.appendChild(e)),e.click()}const n=[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},c358:function(e,t,i){}}]);