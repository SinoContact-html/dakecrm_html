function AlexEdmEdit(obj){this.init(obj);}
AlexEdmEdit.prototype = {
    template:[
        "<div class='editMenuBox'>",
        "<a class='edit first' href='javascript:void(0)'><em class='icon'></em><span>编辑</span></a>",
        "<a class='del' href='javascript:void(0)'><em class='icon'></em><span>删除</span></a>",
        "</div>"
    ].join(""),
    templateMask:[
        "<div class='popbox_bg'></div>"
    ].join(""),
    templatePop:[
        "<div id='{id}' class='popbox_core'>",
        "<div class='popbox_head'>",
        "<span class='title'>编辑</span>",
        "<div class='popbox_head_right'><a class='popbox_close'></a></div>",
        "</div>",
        "<div class='popbox_workspace'>",
        "<div class='popbox_frombox clearfix'>",
        "</div>",
        "</div>",
        "</div>"
    ].join(""),
    templatePop_html:[
        "<div class='popbox_frombox'>",
        "<textarea name='html_Content' style='width:680px;height:200px;padding:0;margin:0;'></textarea>",
        "</div>",
        "<div class='submitbox'>",
        "<input id='htmlSubmit' class='submit' type='submit' value='确定'>",
        "</div>"
    ].join(""),
    templatePop_img:[
        "<div class='popbox_frombox'>",
        "<dl>",
        "<dt>图片地址选择：</dt><dd><label><input class='uploadImglink' name='yesno' type='radio' checked='checked' value=''>&nbsp;网络地址</label>&nbsp;&nbsp;&nbsp;<label><input class='uploadImgfile' name='yesno' type='radio' value=''>&nbsp;本地上传</label></dd>",
        "</dl>",
        "<dl class='uploadImglink_dl'>",
        "<dt>图片地址：</dt><dd><input class='text' name='image_url' type='text' /></dd>",
        "</dl>",
        "<dl class='uploadImgfile_dl' style='display:none'>",
        "<dt>上传文件：</dt><dd>",
        "<span class='input_file'><em></em><span id='fileName_span'>点击选择文件</span><input id='fileName' name='doc' class='file' type='file'></span>",
        "<div class='imgLoading' id='imgLoading'></div>",
        "</dd>",
        "</dl>",
        "<dl>",
        "<dt>链接地址：</dt><dd><input class='text' name='imagelink' type='text' /></dd>",
        "</dl>",
        "</div>",
        "<div class='submitbox'>",
        "<input id='imgSubmit' class='submit' type='submit' value='确定'>",
        "</div>"
    ].join(""),
    templatePop_product:[
        "<div class='tab_box'>",
        "<span class='detail_tab active'>宝贝列表</span>",
        "<span class='detail_tab'>样式设置</span>",
        "</div>",
        "<div class='table_workspace_infoBox listBox'>",
        "<ul id='{id}' class='producr_list'>",
        "</ul>",
        "<div class='pagefen'>",
        "</div>",
        "</div>",
        "<div class='table_workspace_infoBox setupBox' style='display:none;'>",
        "<dl class='default_dl'>",
        "<dt>产品列数：</dt><dd>",
        "<label><input type='radio' name='pdRows' value='2' />&nbsp;每行2列</label>&nbsp;&nbsp;&nbsp;",
        "<label><input type='radio' name='pdRows' value='3' />&nbsp;每行3列</label>&nbsp;&nbsp;&nbsp;",
        "<label><input type='radio' name='pdRows' value='4' />&nbsp;每行4列</label>",
        "</dd>",
        "</dl>",
        "<dl class='default_dl'>",
        "<dt>表格左右间距：</dt><dd><input name='table_padding' size='2' maxlength='2' type='text' />&nbsp;&nbsp;px</dd>",
        "</dl>",
        "<dl class='default_dl'>",
        "<dt>产品左右间距：</dt><dd><input name='pd_margin' size='2' maxlength='2' type='text' />&nbsp;&nbsp;px</dd>",
        "</dl>",
        "<dl class='default_dl'>",
        "<dt>产品下间距：</dt><dd><input name='pd_marginBottom' size='2' maxlength='2' type='text' />&nbsp;&nbsp;px</dd>",
        "</dl>",
        "<dl class='default_dl'>",
        "<dt>表格背景色：</dt><dd><input id='tbBackground' style='width:100px;' name='background' size='7' maxlength='7' type='text' /></dd>",
        "</dl>",
        "</div>",
        "<div class='submitbox'>",
        "<input id='productSubmit' class='submit' type='submit' value='确定'>",
        "</div>"
    ].join(""),
    templatePop_pageFen:[
        "<a href='javascript:void(0)'>{page}</a>"
    ].join(""),
    templatePop_addProduct:[
        "<div class='addProductBox'>",
        "<div class='producr_list_self'><input name='addProduct' style='width:450px;' class='text' type='text' value='请输入宝贝ID/链接'>&nbsp;<input type='submit' class='submit' value='添加宝贝'></div>",
        "</div>"
    ].join(""),
    template_productList:[
        "<li>",
        "<label>",
        "<input type='checkbox' name='prodcutListArray' {checked} value='{arrayNum}' />",
        "<img src='{pic_url}' width='60' height='60' border='0' />",
        "<p>{title}，价格：￥{price}元，<a class='edit' href='{detail_url}' target='_blank'>查看宝贝</a></p>",
        "</label>",
        "</li>"
    ].join(""),
    template_productList_demo:[
        "<div class='percentage_box'>",
        "<div class='percentage_text'>",
        "<strong class='fontsize14'>提示：</strong>",
        "<p style='padding-top:5px;'>此模版的产品需要在创建邮件任务时才能编辑。</p>",
        "</div>",
        "</div>"
    ].join(""),
    template_productTable:[
        "<table id='{id}' class='productTable' align='center' border='0' cellpadding='0' cellspacing='0'>",
        "</table>"
    ].join(""),
    template_productTd:[
        "<p style='text-align:center; padding:0; margin:0 {marginLR}px; background:#fff; width:{width}px'>",
        "<a class='edit' href='{detail_url}' target='_blank'><img src='{pic_url}' width='{width}' height='{height}' border='0' /></a>",
        "</p>",
        "<p style='width:{width}px; line-height:20px; height:60px; overflow: hidden; text-align:center; padding:10px 0; margin:0 {marginLR}px {marginBottom}px {marginLR}px; background:#fff;'>",
        "{title}<br />价格：￥{price}元",
        "</p>"
    ].join(""),
    template_pdEmpty:[
        "<div style='margin:0 20px 20px 20px; background:#fff; line-height:100px; text-align:center;'>",
        "自定义宝贝区",
        "</div>"
    ].join(""),
    init  :function(obj){
        this._id = obj.id;
        this._popId = this._id+"_popbox_core";//popID
        this._pdListId = this._id+"_productUl";//产品列表ul ID(弹窗)
        this._pdTableId = this._id+"_productTable";//产品表格ID前缀
        this._templateType = obj.templateType;//模板类型
        this._taskid = obj.taskid;//活动任务ID，用于查询本次活动的产品列表
        this._templateid = obj.templateid;//模板ID
        this._imgUploadUrl = obj.imgUploadUrl;//图片上传接口
        this._pdListUrl = obj.pdListUrl;//产品列表接口
        this._edmSaveUrl = obj.edmSaveUrl;//edm普通区块保存接口
        this._pdListSaveUrl = obj.pdListSaveUrl;//产品区块保存接口
        this._pdAddUrl = obj.pdAddUrl;//产品添加接口
        this._block = obj.block;//区块数组
        this._pagination = obj.pagination;//Pop框每页产品显示数
        this._tempVal = '';//临时内容储存
        this._productArray = new Array();//ajax产品数据 完整json对象
        this._productListArray = new Array();//Checkbox筛选后的产品数据[1,2,3,4]
        this._productFirst = new Array();//判断是否首次格式化pop框产品数据
        this._editor;//加载KindEditor用
        this._startNum = 0;//Ajax执行计数器，根据产品区块计数
        this.addPopBox();//初始化弹窗
        this.popClose();//加载弹窗关闭功能
        this.getBlockEvent();//添加区块事件
        this.initialize();//初始化产品表格
        this.initTableBg();//初始化产品表格颜色
    },
    addPopBox : function(){//初始化弹窗
        obj = {};
        $(document.body).prepend(this.substitute(this.templateMask,obj));
        objPop = {};
        objPop.id = this._popId;
        $(document.body).prepend(this.substitute(this.templatePop,objPop));
        var TabDemo = new AlexMove({'id':this._popId});
        TabDemo;
    },
    initialize : function(){//初始化产品表格
        var self = this;
        var productBlock = new Array();
        for (var i in this._block){//获得产品区块个数
            if(this._block[i].type == 'product'){
                productBlock.push(i);
            }
        }
        this.ajaxPostPdList(productBlock);//Ajax获取所有产品区块数据
    },
    initTableBg : function(){
        var self = this;
        var productBlock = new Array();
        for (var i in this._block){//获得产品区块个数
            if(this._block[i].type == 'product'){
                productBlock.push(i);
            }
        }
        for(var i in productBlock){
            $('#'+this._id+' .'+this._block[productBlock[i]].name).css('background-color',this._block[productBlock[i]].setup.background)
        }
    },
    getBlockEvent : function(){
        for (var i in this._block){
            this.formatEditMenuBox(i);//初始化编辑按钮
            this.blockEvent_hover(i);//区块事件
            this.editMenu_click(i,this._block[i].type);//编辑按钮点击事件
            if(this._block[i].power == 0){
                $('#'+this._id+' .'+this._block[i].name+' div.tdbox .editMenuBox').width(80);
                $('#'+this._id+' .'+this._block[i].name+' div.tdbox .editMenuBox a.del').hide();
            }
        }
    },
    blockEvent_hover : function(n){//区块事件
        var self = this;
        $('#'+this._id+' .'+this._block[n].name+' div.tdbox').hover(
            function(){
                $('#'+self._id+' .'+self._block[n].name+' div.tdbox').css('border','1px solid #777f8c');
                self.getEditMenuBox(n,self._block[n].type);
            },
            function(){
                $('#'+self._id+' .'+self._block[n].name+' div.tdbox').css('border','0');
                $('#'+self._id+' .'+self._block[n].name+' div.tdbox .editMenuBox').hide();
            }
        );
    },
    formatEditMenuBox : function(n){
        obj = {};
        $('#'+this._id+' .'+this._block[n].name+' div.tdbox').prepend(this.substitute(this.template,obj));
    },
    getEditMenuBox : function(n){
        $('#'+this._id+' .'+this._block[n].name+' div.tdbox .editMenuBox').show();
    },
    editMenu_click : function(n){//打开弹窗，根据Type类型加载编辑器
        var self = this;
        $('#'+this._id+' .'+this._block[n].name+' div.tdbox .editMenuBox a.edit').click(function(){
            $('#'+self._popId+' .popbox_head span.title').html('编辑 - '+self._block[n].nick);
            self.popFunAdd(n);//加载弹窗功能
            self.popOpen(n);//打开弹窗
        });
        $('#'+this._id+' .'+this._block[n].name+' div.tdbox .editMenuBox a.del').click(function(){
            self.delFunAdd(n);//删除区块事件
        })
    },
    delFunAdd : function(n){//删除区块事件
        if(confirm("确定要删除此区块吗？")){
            $('#'+this._id+' .'+this._block[n].name+' .tdbox .tableBox').html('');
            if (this._block[n].type == 'html'){
                this.ajaxPostSave(n,'');
            }else if (this._block[n].type == 'img'){
                this.ajaxPostSave(n,'');
            }else if (this._block[n].type == 'product'){
                this.ajaxSavePd(n,'');
            }
        }else{
        }
    },
    popFunAdd : function(n){//类型筛选器，根据类型，加载弹窗功能
        if (this._block[n].type == 'html'){
            this.typeFun_html(n);
        }else if (this._block[n].type == 'img'){
            this.typeFun_img(n);
        }else if (this._block[n].type == 'product'){
            this.typeFun_product(n);
        }
    },
    typeFun_html : function(n){//Html类型功能
        var self = this;
        var popbox = $('#'+this._popId+' .popbox_workspace');
        obj_html = {}
        $(popbox).html(this.substitute(this.templatePop_html,obj_html));
        this.addKindEditor();//加载KindEditor
        this._editor.html($('#'+this._id+' .'+this._block[n].name+' .tdbox .tableBox').html());//初始化KindEditor内容
        $('#htmlSubmit').click(function(){
            self._tempVal = self._editor.html();
            if (self._tempVal != ''){
                $('#'+self._id+' .'+self._block[n].name+' div.tdbox .tableBox').html(self._tempVal);
                self.ajaxPostSave(n,self._tempVal);//Ajax保存区块内容，成功后回调函数关闭弹窗
                //self.submitPopClose();
            }else{
                self.submitPopClose();
            }
        })
    },
    addKindEditor : function(){//加载KindEditor
        KindEditor.basePath = '../js/kindeditor/';
        this._editor = KindEditor.create('textarea[name="html_Content"]', {
            resizeType : 1,
            uploadJson : '../js/kindeditor/upload_json.jsp',
            allowPreviewEmoticons : false,
            allowImageUpload : true,
            items : [
                'source', '|', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline', 'strikethrough', 'quickformat',
                'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
                'insertunorderedlist', '|', 'table', 'image', 'link']
        });
    },
    typeFun_img : function(n){//图片类型功能
        var self = this;
        var popbox = $('#'+this._popId+' .popbox_workspace');
        obj_img = {}
        $(popbox).html(this.substitute(this.templatePop_img,obj_img));
        this.imgBoxTab();//加载Tab切换
        $('#fileName').change(function(){
            self.FileUploadFun('fileName','fileName_span');
            return self.ajaxFileUpload(n);
        })
        $('input[name=image_url]').change(function(){
            self._tempVal = '<img src="'+$('input[name=image_url]').val()+'" border="0" style="display:block; width:'+$('#'+self._id).width()+'px">';//内容储存至临时变量
        })
        $('#imgSubmit').click(function(){
            if (self._tempVal != ''){
                if($('input[name=imagelink]').val()){//判断是否带链接
                    $('#'+self._id+' .'+self._block[n].name+' div.tdbox .tableBox').html('<a target="_blank" href="'+$('input[name=imagelink]').val()+'">'+self._tempVal+'</a>');
                }else{
                    $('#'+self._id+' .'+self._block[n].name+' div.tdbox .tableBox').html(self._tempVal);
                }
                self.ajaxPostSave(n,$('#'+self._id+' .'+self._block[n].name+' div.tdbox .tableBox').html());//Ajax保存区块内容，成功后回调函数关闭弹窗
                //self.submitPopClose();
            }else{
                self.submitPopClose();
            }
        })
    },
    imgBoxTab : function(){
        var self = this;
        $('#'+this._popId+' .uploadImglink').click(function(){
            $('#'+self._popId+' .uploadImglink_dl').show();
            $('#'+self._popId+' .uploadImgfile_dl').hide();
        });
        $('#'+this._popId+' .uploadImgfile').click(function(){
            $('#'+self._popId+' .uploadImgfile_dl').show();
            $('#'+self._popId+' .uploadImglink_dl').hide();
        });
    },
    typeFun_product : function(n){//产品类型功能
        var self = this;
        var popbox = $('#'+this._popId+' .popbox_workspace');
        obj_product = {}
        obj_product.id = this._pdListId;
        $(popbox).html(this.substitute(this.templatePop_product,obj_product));
        this.popPdTabClick();//添加pop框tab点击事件(切换tab)
        $("#tbBackground").bigColorpicker("tbBackground","L");
        if(this._block[n].power == 1){//判断产品编辑状态是否打开
            if("undefined" == typeof this._productArray[n]){//产品列表内容为空时，不执行产品列表初始化
                this.getPdTaskValContent(n);//产品列表无内容时处理
            }else{
                if(this._block[n].taskVal==0){//当产品区块为自定义产品区块时
                    this.addPopPdAddBox();//添加pop框自定义产品添加框
                    this.addPopPdAddBoxEvent(n);//添加pop框自定义产品添加框点击事件
                }
                if(this._productArray[n]=='init'){
                }else{
                    this.getPdList(n,this._productArray[n]);//初始化POP框产品列表
                }
                this.getPdSetup(n);//在页面上写入产品表格设置信息
            }
        }else{
            objDemo = {};
            $(popbox).html(this.substitute(this.template_productList_demo,objDemo));//不可编辑时显示提示内容
        }
        $('#productSubmit').click(function(){
            if(self._block[n].power == 1){//判断是否运行进行产品编辑(来自模板列表的不允许编辑)
                self.SavePdSetup(n);//保存产品表格设置信息
                self.getProduct(n,'pop');
            }else{
                self.submitPopClose();
            }
        });
    },
    getPdTaskValContent : function(n){//产品列表无内容时处理
        if(this._block[n].taskVal==0){//当产品区块为自定义产品区块时
            this.addPopPdAddBox();//添加pop框自定义产品添加框
            this.addPopPdAddBoxEvent(n);//添加pop框自定义产品添加框点击事件
            this.getPdSetup(n);//在页面上写入产品表格设置信息
        }else if(this._block[n].taskVal==1){//当产品区块为关联产品区块时
            alert('关联产品区块产品内容为空！');
        }else{
            alert('产品区块定义错误！');
        }
    },
    addPopPdAddBox : function(){//添加pop框自定义产品添加框
        var popbox = $('#'+this._popId+' .popbox_workspace .listBox');
        obj = {}
        $(popbox).prepend(this.substitute(this.templatePop_addProduct,obj));
    },
    addPopPdAddBoxEvent : function(n){//添加pop框自定义产品添加框点击事件
        var self = this;
        var popbox = $('#'+this._popId+' .popbox_workspace .listBox .addProductBox .producr_list_self');
        $(popbox).children('input[name=addProduct]').click(function(){
            if($(this).val() == '请输入宝贝ID/链接'){
                $(this).val('');
            }
        });
        $(popbox).children('input[name=addProduct]').change(function(){
            if($(popbox).children('input[name=addProduct]').val() == '' ){
                $(popbox).children('input[name=addProduct]').val('请输入宝贝ID/链接');
            }
        });
        $(popbox).children('input.submit').click(function(){
            if($(popbox).children('input[name=addProduct]').val() == ''){
                alert('您还没有输入宝贝ID/链接');
                $(popbox).children('input[name=addProduct]').val('请输入宝贝ID/链接');
            }else{
                var id = self.getItemIdFromUrlOrId($(popbox).children('input[name=addProduct]').val());
                if(id == 'error'){//获取并验证宝贝ID为数字类型
                    alert('输入的宝贝ID/链接错误，没有找到你所指定的宝贝！')
                }else{
                    console.log(self._productArray[n]);
                    if ("undefined" == typeof self._productArray[n])self._productArray[n] = [];
                    if(self._productArray[n].length >= self._block[n].setup.pdNum){
                        alert('最多可以添加'+self._block[n].setup.pdNum+'个商品')
                    }else{
                        //add by echos,2013-8-19 14:38:25
                        //判断是否添加过此宝贝
                        var repeatFlag = false ;
                        $(self._productArray[n]).each(function(){
                            if($(this).attr("num_iid") == id){
                                alert("已经添加过此宝贝！");
                                repeatFlag = true ;
                                return ;
                            }
                        })

                        if(repeatFlag == false){
                            self.ajaxAddProduct(n,id);//Ajax添加宝贝
                        }
                    }
                }
            }
        });
    },
    getPdSetup : function(n){//在页面上写入产品表格设置信息
        var box = $('#'+this._popId+' .popbox_workspace .setupBox .default_dl dd > label');
        $(box[this._block[n].setup.columns-2]).children('input').attr('checked','checked');
        $('#'+this._popId+' .popbox_workspace .setupBox .default_dl input[name=pd_margin]').val(this._block[n].setup.pd_margin);
        $('#'+this._popId+' .popbox_workspace .setupBox .default_dl input[name=pd_marginBottom]').val(this._block[n].setup.pd_marginBottom);
        $('#'+this._popId+' .popbox_workspace .setupBox .default_dl input[name=table_padding]').val(this._block[n].setup.table_padding);
        $('#'+this._popId+' .popbox_workspace .setupBox .default_dl input[name=background]').val(this._block[n].setup.background);
    },
    SavePdSetup : function(n){//保存产品表格设置信息
        var box = $('#'+this._popId+' .popbox_workspace .setupBox .default_dl input[name=pdRows]');
        for(i=0; i<= $(box).length-1; i++){
            if($(box[i]).attr('checked') == "checked"){this._block[n].setup.columns = $(box[i]).val();}
        }
        this._block[n].setup.pd_margin = $('#'+this._popId+' .popbox_workspace .setupBox .default_dl input[name=pd_margin]').val();
        this._block[n].setup.pd_marginBottom = $('#'+this._popId+' .popbox_workspace .setupBox .default_dl input[name=pd_marginBottom]').val();
        this._block[n].setup.table_padding = $('#'+this._popId+' .popbox_workspace .setupBox .default_dl input[name=table_padding]').val();
        this._block[n].setup.background = $('#'+this._popId+' .popbox_workspace .setupBox .default_dl input[name=background]').val();
    },
    popPdTabClick : function(){//pop框tab点击事件(切换tab)
        var self = this;
        var tabId = $('#'+this._popId+' .popbox_workspace .tab_box > span');
        var boxId = $('#'+this._popId+' .popbox_workspace > .table_workspace_infoBox');
        $(tabId).click(function(){
            var h = $(this).index();
            $(boxId).hide();
            $(boxId[h]).show();
            $(tabId).removeClass('active');
            $(this).addClass('active');
        })
    },
    getProduct : function(n,source){//在页面写入产品表格
        var self = this;
        obj = {}
        obj.id = self._pdTableId+'_'+n;
        var listArray = new Array();

        if(source=='pop'){//判断来源，来自初始化或Checkbox
            self._productListArray[n] = listArray = self.getCheckboxVal('prodcutListArray');//得到Checkbox选中产品列表
            if(listArray.length <= 0){
                alert("请至少选择一个宝贝！");
            }else{
                $('#'+self._id+' .'+self._block[n].name+' div.tdbox .tableBox').html(self.substitute(self.template_productTable,obj));//写入产品表格框架
                this.getProductTable(n,self._pdTableId+'_'+n,self.getTableRows(n,listArray.length));//生成产品空表格
                this.getTdProducts(listArray,n);//插入产品
            }
        }else if(source=='start'){
            for (var i in self._productArray[n]){listArray.push(i)}
            $('#'+self._id+' .'+self._block[n].name+' div.tdbox .tableBox').html(self.substitute(self.template_productTable,obj));//写入产品表格框架
            this.getProductTable(n,self._pdTableId+'_'+n,self.getTableRows(n,listArray.length));//生成产品空表格
            this.getTdProducts(listArray,n);//插入产品
        }

        $('#'+self._id+' .'+self._block[n].name).css('background',self._block[n].setup.background);
        if(source=='pop'){//判断来源，来自初始化或Checkbox
            if(listArray.length > 0){
                var ajaxVal = this.formatPdName(n,listArray);//格式化产品数据，用于Ajax提交产品数据
                this.ajaxSavePd(n,ajaxVal);//Ajax保存区块内容，成功后回调函数关闭弹窗
            }
        }else if(source=='start'){
        }
        this.getParentFormSetup();
        //self.submitPopClose();
    },
    formatPdName : function(n,listArray){//格式化产品数据，用于Ajax提交产品数据
        var html = '';
        for(var i in listArray){
            html = html + this._productArray[n][i].num_iid+',';
        }
        return html;
    },
    getProductTable : function(n,id,row){//生成空表格
        var table = document.getElementById(id);
        for(var i=0;i<row;i++){
            var tr = document.createElement("tr");
            for(var j=0;j<this._block[n].setup.columns;j++){
                var td = document.createElement("td");
                td.innerHTML = "&nbsp;";
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    },
    getTableRows : function(n,num){//计算产品行数
        return Math.ceil(num/this._block[n].setup.columns);
    },
    getTdProducts : function(listArray,n){//为表格插入产品
        var tdlist = $('#'+this._pdTableId+'_'+n+' td');
        pdWdith = Math.floor(($('#'+this._id).width()-(this._block[n].setup.table_padding*2))/this._block[n].setup.columns)-(this._block[n].setup.pd_margin*2);
        for(i=0;i<=listArray.length-1;i++){
            obj = {}
            obj.title = this._productArray[n][listArray[i]].title;
            obj.detail_url = this._productArray[n][listArray[i]].detail_url;
            obj.pic_url = this._productArray[n][listArray[i]].pic_url;
            obj.price = this._productArray[n][listArray[i]].price;
            obj.width = pdWdith;
            obj.height = pdWdith;
            obj.marginLR = this._block[n].setup.pd_margin;
            obj.marginBottom = this._block[n].setup.pd_marginBottom;
            $(tdlist[i]).html(this.substitute(this.template_productTd,obj))
        }
    },
    popOpen :function(n){
        this._tempVal = '';//每次打开弹窗，清空临时变量
        var offsetTop = $('#'+this._id+' .'+this._block[n].name+' div.tdbox .tableBox').offset().top+50;
        var popbox_bg = $('.popbox_bg');
        $(popbox_bg).height($(document).height());
        $(popbox_bg).width($(document).width());
        var InfoBoxLeft = ($(window).width()-$('#'+this._popId).width()+2)/2;
        var InfoBoxTop = $('#'+this._id).height() - $('#'+this._id+' .'+this._block[n].name+' div.tdbox .tableBox').offset().top - 60 - $('#'+this._popId).height() > 0 ? offsetTop : $('#'+this._id).height() - $('#'+this._popId).height() - 30;
        $('#'+this._popId).css({'left':InfoBoxLeft+'px','top':InfoBoxTop+'px'});
        $(popbox_bg).fadeIn(300);
        $('#'+this._popId).fadeIn(300);
    },
    popClose : function(){//弹窗关闭按钮
        var self = this;
        $('#'+this._popId+' .popbox_head .popbox_head_right a.popbox_close').click(function(){
            $('#'+self._popId).fadeOut(300);
            $('.popbox_bg').fadeOut(300);
        })
    },
    submitPopClose : function(){//确定按钮关闭弹窗
        $('#'+this._popId).fadeOut(300);
        $('.popbox_bg').fadeOut(300);
    },
    ajaxPostPdList : function(productBlock){//Ajax数据查询产品列表(关联数据初始数据)，根据产品区块循环执行Ajax
        var self = this;
        var params = {pushId:this._taskid, templateId:this._templateid, type:this._templateType, positionName:this._block[productBlock[self._startNum]].name};
        $.post(self._pdListUrl,params,function(data){
            if(data.enterFlag){
                if (data.pdlist == ''){
                    self._productArray[productBlock[self._startNum]] = null;
                    $('#'+self._id+' .'+self._block[productBlock[self._startNum]].name+' .tdbox .tableBox').html('');
                }
                else if (data.pdlist == 'init'){
                    self._productArray[productBlock[self._startNum]] = 'init';
                    obj = {}
                    $('#'+self._id+' .'+self._block[productBlock[self._startNum]].name+' .tdbox .tableBox').html(self.substitute(self.template_pdEmpty,obj));
                }
                else {
                    self._productArray[productBlock[self._startNum]] = data.pdlist;//产品数据储存至产品数组,用于之后的产品勾选
                    self.getProduct(productBlock[self._startNum],'start');
                }
                self._startNum++;
                if (self._startNum <= productBlock.length-1){
                    self.ajaxPostPdList(productBlock);
                }
            }else{
                alert(data.error);
            }
        },'json');
    },
    getPdList : function(n,pdlist){//格式化Pop框产品列表
        if ("undefined" == typeof this._productFirst[n])this._productFirst[n] = true;//首次加载此区块，赋值
        if (this._productFirst[n] == false){//用于判断是否首次加载，首次加载默认全部选中
            for (var i in pdlist){pdlist[i].checked = "";}
            for (var i in this._productListArray[n]){pdlist[this._productListArray[n][i]].checked = "checked='checked'";}
        }else{
            this._productListArray[n] = [];
            for (var i in pdlist){pdlist[i].checked = "checked='checked'";}
            for (var i in pdlist){this._productListArray[n].push(i)}
            this._productFirst[n] = false;
        }
        obj = {}
        for(var i in pdlist){
            obj.arrayNum = i;
            obj.title = pdlist[i].title;
            obj.detail_url = pdlist[i].detail_url;
            obj.pic_url = pdlist[i].pic_url;
            obj.price = pdlist[i].price;
            obj.num_iid = pdlist[i].num_iid;
            obj.checked = pdlist[i].checked;
            $('#'+this._pdListId).append(this.substitute(this.template_productList,obj));
        }
        if(pdlist.length > this._pagination){//列表数达到分页要求后分页
            this.popPdPagination(n,0);//Pop框产品分页,初始显示第一页
        }
    },
    popPdPagination : function(n,pageNum){//Pop框产品分页功能
        if(this._productArray[n].length > this._pagination){//判断时候启用分页
            pagTotal = Math.ceil(this._productArray[n].length/this._pagination);
            var pdBox = $('#'+this._pdListId+' > li');
            var startLi = pageNum*this._pagination;
            for (var i in this._productArray[n]){$(pdBox[i]).hide();}
            for (i = startLi; i <= startLi+this._pagination-1; i++){
                $(pdBox[i]).show();
            }
            if($('#'+this._popId+' .pagefen > a').length > 0){
            }else{//首次加载时初始化分页按钮
                this.popPdPagefenGet(pagTotal);//加载分页按钮
                this.popPdPageClick(n);//加载分页按钮点击事件
            }
        }else{
        }
    },
    popPdPagefenGet : function(pagTotal){//加载分页按钮
        $('#'+this._popId+' .pagefen').html('');
        $('#'+this._popId+' .pagefen').show();
        obj = {}
        for(i=0; i<=pagTotal-1; i++){
            obj.page = i+1;
            $('#'+this._popId+' .pagefen').append(this.substitute(this.templatePop_pageFen,obj));
        }
        $('#'+this._popId+' .pagefen a:first').addClass('onthis');
    },
    popPdPageClick : function(n){//分页按钮点击事件
        var self = this;
        var menu = $('#'+this._popId+' .pagefen > a');
        $(menu).click(function(){
            var h =$(this).index();
            self.popPdPagination(n,h);
            $(menu).removeClass('onthis');
            $(this).addClass('onthis');
        })
    },
    ajaxPostSave : function(n,val){//Ajax保存EDM区块内容
        var self = this;
        var params = {pushId:this._taskid, templateId:this._templateid, type:this._templateType, templateContent:val, positionName:this._block[n].name};
        $.post(self._edmSaveUrl,params,function(data){
            if(data.enterFlag){
                self._templateid   = data.templateId;//根据是否另存等情况，更改模板模板ID
                self._templateType = data.templateType;//根据是否另存等情况，更改模板模板类型

                parent.changeParam(data.templateId,data.templateType);

                self.submitPopClose();//提交成功后关闭弹窗
                self.getParentFormSetup();
				qtimer = setTimeout(function () {
					self.getParentFormSetup();
				}, 500);
                return true;
            }else{
                alert(data.error);
                return false;
            }
        },'json');
    },
    ajaxSavePd : function(n,val){//Ajax保存产品区块保存
        var self = this;
        var params = {pushId:this._taskid, templateId:this._templateid, type:this._templateType, templateContent:val, positionName:this._block[n].name, columns:this._block[n].setup.columns, pd_margin:this._block[n].setup.pd_margin, pd_marginBottom:this._block[n].setup.pd_marginBottom, table_padding:this._block[n].setup.table_padding, templateWidth:$('#'+this._id).width(), background:this._block[n].setup.background};
        $.post(this._pdListSaveUrl,params,function(data){
            if(data.enterFlag){
                self._templateid   = data.templateId;//根据是否另存等情况，更改模板模板ID
                self._templateType = data.templateType;//根据是否另存等情况，更改模板模板类型

                parent.changeParam(data.templateId,data.templateType);

                self.submitPopClose();//提交成功后关闭弹窗
                return true;
            }else{
                alert(data.error);
                return false;
            }
        },'json');
    },
    ajaxAddProduct : function(n,id){//Ajax添加产品
        var self = this;
        var params = {numIid:id};

        $.ajax({
            type: "POST",
            url: self._pdAddUrl,
            data: params,
            dataType: 'json',
            async: false,
            success: function (data) {
                if(data.enterFlag){
                    if(data.pdlist.length > 0){
                        if ("undefined" == typeof self._productArray[n])self._productArray[n] = [];
                        if (self._productArray[n] == 'init')self._productArray[n] = [];
                        self._productArray[n].push(data.pdlist[0]);//添加的宝贝记录进数组

                        obj = {}
                        obj.arrayNum = self._productArray[n].length-1;
                        obj.title = data.pdlist[0].title;
                        obj.detail_url = data.pdlist[0].detail_url;
                        obj.pic_url = data.pdlist[0].pic_url;
                        obj.price = data.pdlist[0].price;
                        obj.num_iid = data.pdlist[0].num_iid;
                        obj.checked = "checked='checked'";
                        $('#'+self._popId+' #'+self._pdListId).prepend(self.substitute(self.template_productList,obj));

                        self.setPopTop();//判断POP框是否超出页面高度

                        return true;
                    }else{
                        alert('没有查询到宝贝');
                    }
                }else{
                    alert(data.error);
                    return false;
                }
            }
        });
    },
    ajaxFileUpload : function(n){//ajax文件上传组件
        var self = this;
        $.ajaxFileUpload({
                url:self._imgUploadUrl,
                secureuri:false,
                fileElementId:'fileName',
                dataType: 'json',
                beforeSend:function(){$("#imgLoading").html('<em></em><span>文件上传中，请稍后...</span>');},
                complete:function(){$("#imgLoading").html('');},
                success: function (data, status){
                    if(typeof(data.error) != 'undefined'){
                        if(data.error != ''){
                            alert(data.error);
                        }else{
                            self._tempVal = '<img src="'+data.msg+'" border="0" style=" width:'+$('#'+self._id).width()+'px">';//内容储存至临时变量
                        }
                    }
                },
                error: function (data, status, e){
                    alert(e);
                }
            }
        )
        return false;
    },
    FileUploadFun: function(id,spanid){//上传按钮
        var thisId = $('#'+id);
        var thisSpanId = $('#'+spanid);
        str_file = $(thisId).val();
        str_file = str_file.replace(/\\/g, '/');
        filename = str_file.substr(str_file.lastIndexOf("/")+1);
        $(thisSpanId).html(filename);
    },
    getParentFormSetup : function(){//修改父框架的iframe高度
        $("#DialogBox",parent.document.body).height($('#'+this._id).height()+30);
        $("#edmEditIframe",parent.document.body).height($('#'+this._id).height()+30);
    },
    setPopTop : function(){//修改pop框top值
        if($('#'+this._popId).offset().top + $('#'+this._popId).height() + 90 > $('#'+this._id).height()){
            $('#'+this._popId).animate({top: $('#'+this._popId).offset().top - 90}, "slow");
        }
    },
    getCheckboxVal : function(name){//获取Checkbox的值,输出数组
        var r=document.getElementsByName(name);
        var CheckboxArray = new Array();
        for(var i=0;i<r.length;i++){
            if(r[i].checked){
                CheckboxArray.push(r[i].value);
            }
        }
        return CheckboxArray;
    },
    getItemIdFromUrlOrId : function(str){//根据淘宝链接，获取宝贝ID
        var itemId;
        if(str.substring(0,7) == "http://"){
            itemId = parseInt(this.getQueryStringFromUrl(str,"id")) ;
        }else{
            itemId = parseInt(str) ;
        }
        if(isNaN(itemId))itemId='error';
        return itemId;
    },
    getQueryStringFromUrl :function(url,name){//获取连接参数
        var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
        if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, " "));
        return "";
    },
    substitute:function(str,object){//模板内容替换函数
        return str.replace(/\\?\{([^}]+)\}/g, function(match, name){
            if (match.charAt(0) == '\\') return match.slice(1);
            return (object[name] != undefined) ? object[name] : '';
        });
    }
}

function AlexMove(obj){this.init(obj);}
AlexMove.prototype = {
    _disY : 0, _lock:true,
    init  :function(obj){
        var self = this;
        var ifDrag = false;
        this._id = obj.id;
        $('#'+this._id+' .popbox_head').css('cursor','move');
        $('#'+this._id+' .popbox_head').mousedown(function(e){
            self._lock = false;
            var e = e || window.event;
            $('#'+self._id).css({'-moz-user-select':'none','-webkit-user-select':'none','-ms-user-select':'none','user-select':'none','-khtml-user-select':'none','-webkit-touch-callout':'none'});
            $('#'+self._id).attr('unselectable','on')
            self._disY = e.clientY - $('#'+self._id).offset().top;
            ifDrag = true;
            document.onmousemove = function(e){
                if(!ifDrag) return;
                var e = e || window.event;
                var ey = e.clientY - self._disY;
                $('#'+self._id).offset({top:ey});
                return false;
            }
            document.onmouseup = function(){
                $('#'+self._id).css({'-moz-user-select':'','-webkit-user-select':'','-ms-user-select':'','user-select':'','-khtml-user-select':'','-webkit-touch-callout':''});
                $('#'+self._id).attr('unselectable','off')
                ifDrag = false;
                self._lock = true;
                document.onmousemove = null;
            }
        });
    }
}