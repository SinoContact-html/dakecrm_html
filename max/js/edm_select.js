function AlexEdmSelect(obj){this.init(obj);}
AlexEdmSelect.prototype = {
	init  :function(obj){
		var self = this;
		this._id = obj.id;
		this._width = 210;
		this._showNum = 3;//可显示的li的个数,最少3个
		this._h = 0;//当前位置
		this._liLength = $('#'+this._id+' .ulbox ul > li').length;//获得EDM总个数
		this.getBoxWidth();//设置容器宽度
		this.windowChange();//屏幕宽度变化监测
		this.clickEvent();
	},
	clickEvent : function(){
		if (this._liLength > this._showNum){
			this.clickFun();
		}else{
			this.noClickFun();
		}
	},
	windowChange :function(){//屏幕宽度变化监测
		var self = this;
		$(window).resize(function(){
			self.getBoxWidth();
		});
	},
	getBoxWidth : function(){//宽度计算
		var bodyWidth = document.body.clientWidth;
		$('#'+this._id+' .ulbox').width(this.widthFormat(bodyWidth-501));
		$('#'+this._id+' .ulbox ul').width(this._width * this._liLength);
	},
	widthFormat : function(n){
		var ys = Math.floor(n / this._width) - 0;
		ys = ys < 3 ? 3 : ys;//最少3个
		this._showNum = ys;
		return this._width * ys;
	},
	clickFun : function(){
		var self = this;
		$('#'+this._id+' span.left').click(function(){
			self._h++;
			self.ulMoveFun(self._h);
		})
		$('#'+this._id+' span.right').click(function(){
			self._h--;
			self.ulMoveFun(self._h);
		})
	},
	ulMoveFun : function(n){
		if(n < -this._liLength+this._showNum){
			this._h = n = -this._liLength+this._showNum;
			alert('已经是最后一个了');
		}else if(n > 0){
			this._h = n = 0;
			alert('已经是第一个了');
		}
 		$('#'+this._id+' .ulbox ul').animate({'margin-left': n*this._width+'px'}, 300);
	},
	noClickFun : function(){
		var self = this;
		$('#'+this._id+' span.left').click(function(){
			alert('已经是最后一个了');
		})
		$('#'+this._id+' span.right').click(function(){
			alert('已经是第一个了');
		})
	}
}

function AlexIframe(obj){this.init(obj);}
AlexIframe.prototype = {
	Template:[
		"<div id='DialogBox' class='DialogBox' style='width:100%;height:{height}px;'>",
		  "<iframe id='edmEditIframe' name='edmEditIframe' src='{url}' style='width:100%;height:{height}px;' frameborder='0' scrolling='no'></iframe>",
		"</div>"
	].join(""),
	init  :function(obj){
		var self = this;
		this._id = obj.id;
		this._url = obj.url;
		this._height = obj.height;
		this.getHtml();
	},
	getHtml :function(){
		obj={};
		obj.height = this._height;
		obj.url = this._url;
		$('#'+this._id).html(this.substitute(this.Template,obj));
	},
	substitute:function(str,object){//模板内容替换函 
		return str.replace(/\\?\{([^}]+)\}/g, function(match, name){
			if (match.charAt(0) == '\\') return match.slice(1);
			return (object[name] != undefined) ? object[name] : '';
		});
	}
}

function getAlexIframe(height,url){
	var edmTemplateIframe = new AlexIframe({'id':'getIframe','height':height,'url':url});
	edmTemplateIframe;
}