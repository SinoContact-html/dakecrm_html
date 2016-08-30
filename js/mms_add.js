var addMms = function(){}
addMms.prototype = {
	addFrame:function(){
		var the = this;
		var addFrameId = arguments[0];
		var addFrameBox = arguments[1];
		var nowFrameNum = 1;
		
		the.addFrameModule(addFrameBox,0);

		$('#'+addFrameId).click(function(){
			if (nowFrameNum <= 4){
				the.addFrameModule(addFrameBox,nowFrameNum);
				nowFrameNum++;
				if(nowFrameNum == 5)$('#'+addFrameId).hide();
			}else{
				$('#'+addFrameId).hide();
			}
		});
	},
	
	clickFrame:function(id){
		
	},
	
	addFrameModule:function(id,num){
		var text = new Array("第一帧","第二帧","第三帧","第四帧","第五帧");
		$('#'+id).append('<a onclick="addMms.prototype.clickFrame('+num+')" id="FrameNum_'+num+'" title="'+text[num]+'" href="javascript:void(0)"></a>');
	}
}

jQuery(document).ready(function($) {
	var addNewMms = new addMms();
	addNewMms.addFrame("add_frame","mms_frame_box");
});