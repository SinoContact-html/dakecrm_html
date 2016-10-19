var chargeModuleId = 34 ;
var tradeRemindModuleId = 46;
var createPageModuleId = 98 ;
var createSMSPageModuleId = 93 ;
//var createMMSPageModuleId = 107 ;

var importCustomerModuled = 9;
var listCustomerModuled = 9;
var importHistoryModuled = 59 ;

var autoSmsModuleId = 46;
var MAX_RECIPIENTS_NUM = 100000;


jQuery(document).ready(function($) {
	
	var alexLeftNav = new AlexLeftNav({});
	alexLeftNav;


//全局的AJAX访问，处理AJAX清求时SESSION超时
    $.ajaxSetup({
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        complete:function(XMLHttpRequest,textStatus){

            //通过XMLHttpRequest取得响应头，sessionstatus
            var sessionStatus = XMLHttpRequest.getResponseHeader("sessionStatus"); if(sessionStatus=="timeout"){

                //这里怎么处理在你，这里跳转的登录页面
                alert("由于您久未操作，请重新登陆！");
                location.reload() ;
/*
                if(top != self){
                    if(top.location != self.location)
                        top.location.reload() ;
                }else{

                    location.reload() ;
                }*/
            }
        }
    });


    getOs();

    $('span#info1').hover(//消息框
        function(){
            $('.soft_top_left span#info1').addClass('hover');
        },
        function(){
            $('.soft_top_left span#info1').removeClass('hover');
        }
    );

    $('span#info2').hover(//消息框
        function(){
            $('.soft_top_left span#info2').addClass('hover');
        },
        function(){
            $('.soft_top_left span#info2').removeClass('hover');
        }
    );

   /* var side_menu = $('.soft_left_side_menu > a');
    $(side_menu).hover(//左侧大导航
        function(){
            var h = $(this).index();
            $(side_menu[h]).addClass('hover');
        },
        function(){
            var h = $(this).index();
            $(side_menu[h]).removeClass('hover');
        }
    );*/

    var info_box_status = false;
    $('span#info2').click(function(){//消息框
        if (info_box_status == false){
			$('.soft_top .info_box_text').css("left",$(this).offset().left-200);
            $('.soft_top_left span#info2').addClass('active');
            $('.soft_top .info_box_text').fadeIn(100);
            info_box_status = true;
        }else{
            $('.soft_top_left span#info2').removeClass('active');
            $('.soft_top .info_box_text').fadeOut(100);
            info_box_status = false;
        }
    });
    $('.page, .soft_top_right').click(function(){
        if(info_box_status == true){
            $('.soft_top_left span.info_box').removeClass('active');
            $('.soft_top .info_box_text').fadeOut(100);
            info_box_status = false;
        }
    })

    var contact_box_status = false;
    $('#Contact_Us').click(function(){//联系我们
        if (contact_box_status == false){
            $('.soft_top .contact_box').css("right",$('.soft_top_right').width()-134+"px");
            $('#Contact_Us').addClass('active');
            $('.soft_top .contact_box').fadeIn(100);
            contact_box_status = true;
        }else{
            $('#Contact_Us').removeClass('active');
            $('.soft_top .contact_box').fadeOut(100);
            contact_box_status = false;
        }
    });
    $('.page, .soft_top_left').click(function(){
        if(contact_box_status == true){
            $('#Contact_Us').removeClass('active');
            $('.soft_top .contact_box').fadeOut(100);
            contact_box_status = false;
        }
    })

    //展开二级导航///////////////////////////////////////////////////////////////////////////////////////
	
    /*var left_nav = $('#soft_left_side_submenu_Box > .soft_left_side_submenu > ul.nav_first_list > li');
    for(i=0; i<=$(left_nav).length; i++){
        if ($(left_nav[i]).children('ul').length > 0){
            $(left_nav[i]).children('em').addClass('much');
        }
    }*/
	/*
	var leftnavBox = $('#soft_left_side_submenu_Box > .soft_left_side_submenu');
	var list_status = new Array();
	for(i=0; i<=$(leftnavBox).length-1; i++){
		list_status[i] = new Array();
		$(leftnavBox[i]).children('ul.nav_first_list').children('li').click(function(){
			var h = $(this).index();
			if ($(left_nav[h]).children('ul').length > 0){
				if(list_status[i][h] == false || typeof list_status[i][h] == "undefined" || list_status[i][h] == ""){
					$(left_nav[h]).children('ul').slideDown("slow");
					$(left_nav[h]).children('em').addClass('zz');
					list_status[i][h] = true;
				}
				else{
					$(left_nav[h]).children('ul').slideUp("slow");
					$(left_nav[h]).children('em').removeClass('zz');
					list_status[i][h] = false;
				}
			}
		});
	}*/
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    //二级导航缩放
    /*var nav_colse_status = true;
    $('.soft_left_side_submenu span.nav_colse').click(function(){
        if(nav_colse_status){
            nav_close()
        }else{
            nav_open()
        }
    })
	
	if(typeof(isIndex) == "undefined")isIndex = false;
	if(isIndex)nav_close()
	
	function nav_close(){
		$('.page table.soft_body tr.soft_body_td td.soft_body_left').animate({width: 116}, 500 );
        $('.soft_left_side').animate({width: 116}, 500 );
        $('.soft_left_side_submenu .items_title').fadeTo(300, 0);
        $('.soft_left_side_submenu ul.nav_first_list').fadeTo(300, 0);
        $('.soft_left_side_submenu').animate({width: 35}, 500 );
        $('.soft_left_side_submenu span.nav_colse').addClass('nav_open');
        nav_colse_status = false;
	}
	
	function nav_open(){
		$('.page table.soft_body tr.soft_body_td td.soft_body_left').animate({width: 276}, 500 );
        $('.soft_left_side').animate({width: 276}, 500 );
        $('.soft_left_side_submenu .items_title').fadeTo(500, 100);
        $('.soft_left_side_submenu ul.nav_first_list').fadeTo(500, 100);
        $('.soft_left_side_submenu').animate({width: 196}, 500 );
        $('.soft_left_side_submenu span.nav_colse').removeClass('nav_open');
        nav_colse_status = true;
	}
	
	////////////////2014-2-25 Alex////////////////
	var allMenuBox = $('#soft_left_side_submenu_Box > .soft_left_side_submenu');
	var allMenuABox = $('.soft_left_side_menu > a.menu');
	var oldOpenMenu = 1;
	for(i=0; i<=$(allMenuBox).length-1;i++){
		if ($(allMenuBox[i]).css('display')!='none'){
			oldOpenMenu = i;
		}
	}
	$(allMenuABox).mouseover(
		function(){
			var h = $(this).index()-1;
			if(!nav_colse_status)nav_open()
			if(h!=oldOpenMenu){
				$(allMenuBox[h]).show();
				$(allMenuBox[oldOpenMenu]).hide();
				$(allMenuABox[h]).addClass('hover');
				$(allMenuABox[oldOpenMenu]).removeClass('hover');
				oldOpenMenu = h;
			}
		}
	)
	$('.soft_left_side_menu > a.menu_home').mouseover(function(){
		nav_close()
	})*/
	////////////////2014-2-25 Alex////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    $("body").prepend('<div class="popbox_bg"></div>');
    $("body").prepend('<div class="popbox_bg_remind"></div>');

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    $('.CustomTableBox tbody tr:odd').addClass('erow');
	
	
	////////////////2015-2-5 Ivan////////////////
	$('.change_btn').click(function(e) {
		if($(this).find('input[type=button]').val() == '修改')
		{
			$('.change_btn').find('input[type=button]').val('修改');
			$('.change_btn.hh').show();
			$('.change_box').hide();
			$('.show_box').show();
			$('.save').hide();
			$('.table_workspace_iphone_sms').css('border-color','#d7d7d7');
			$(this).find('input[type=button]').val('取消');
			$(this).siblings('.save').show();
			$(this).parent().parent().css('border-color','#0190d4');
			$(this).parent().siblings('.show_box').hide();
			$(this).parent().siblings('.change_box').show();
		}
		else
		{
			$(this).find('input[type=button]').val('修改');
			$(this).siblings('.save').hide();
			$('.change_btn.hh').show();
			$('.table_workspace_iphone_sms').css('border-color','#d7d7d7');
			$(this).parent().parent().css('border-color','#d7d7d7');
			$('.change_box').hide();
			$('.show_box').show();
		}
	});
	
	$('.change_btn.hh').click(function(e) {
		$(this).hide();
	});
	
	$('.save').click(function(e) {
        $('.setup').val('修改');
		$('.change_box').hide();
		$('.show_box').show();
		$('.change_btn.hh').show();
		$('.table_workspace_iphone_sms').css('border-color','#d7d7d7');
		$('#sms_text_box').css('border-color','#d7d7d7');
		$(this).hide();
    });
	
	$('.sms_setup').click(function(e) {
		if($(this).val() == '修改'){
			$(this).val('取消');
			$('#sms_text_box').css('border-color','#0190d4');
			$('.sms_save').show();
			$('#sms_text_show').hide();
			$('#sms_text_change').show();
		}else{
			$(this).val('修改');
			$('.sms_save').hide();
			$('#sms_text_box').css('border-color','#d7d7d7');
			$('#sms_text_show').show();
			$('#sms_text_change').hide();
		}
    });
	
	$('.sms_save').click(function(e) {
        $('.sms_setup').val('修改');
		$('#sms_text_show').show();
		$('#sms_text_change').hide();
		$('#sms_text_box').css('border-color','#d7d7d7');
		$(this).hide();
    });
	
	$('.sms_setup_time').click(function(e) {
		if($(this).val() == '修改'){
			$(this).val('取消');
			$('#sms_time_box').css('border-color','#0190d4');
			$('.sms_save_time').show();
			$('#sms_time_show').hide();
			$('#sms_time_change').show();
		}else{
			$(this).val('修改');
			$('.sms_save').hide();
			$('#sms_time_box').css('border-color','#d7d7d7');
			$('#sms_time_show').show();
			$('#sms_time_change').hide();
		}
    });
	
	$('.sms_save_time').click(function(e) {
        $('.sms_setup_time').val('修改');
		$('#sms_time_show').show();
		$('#sms_time_change').hide();
		$('#sms_time_box').css('border-color','#d7d7d7');
		$(this).hide();
    });
	
	$('#stroe_pro li').hover(function(){ 
		$(this).find('em').css('display','block'); 
	}, 
	function(){ 
		$(this).find('em').css('display','none'); 
	});
	
	$('.submitbox.np input.close').click(function(e) {
		$('.table_workspace_iphone_sms').css('border-color','#d7d7d7');
		$('.change_box').hide();
		$('.show_box').show();
		$('.change_btn').find('input[type=button]').val('修改');
		$('.change_btn.hh').show();
    });

	////////////////////////////////////////////////////////////////////////////////////////////////////
	
	////////////////2015-2-5 Ivan////////////////
	
	$('#step1_0').click(function(e) {
		$('.adm-detail-title').hide();
		$('#add_sms_event_step_test').hide();
		$(this).parent().show();
		$('#add_sms_event_step2_1').find('.adm-detail-title').show();
		
        $('#add_sms_event_step1_0').hide();
		$('#add_sms_event_step1_1').hide();
		$('#add_sms_event_step2_0').hide();
		$('#add_sms_event_step1_2').hide();
		$('#add_sms_event_step2_2').hide();
		$('#add_sms_event_step2_1').show();
    });
	
	$('#step1_1').click(function(e) {
		$('.adm-detail-title').hide();
		$('#add_sms_event_step_test').hide();
		$(this).parent().show();
		$('#add_sms_event_step2_0').find('.adm-detail-title').show();
		
        $('#add_sms_event_step1_1').hide();
		$('#add_sms_event_step1_0').hide();
		$('#add_sms_event_step2_1').hide();
		$('#add_sms_event_step1_2').hide();
		$('#add_sms_event_step2_2').hide();
		$('#add_sms_event_step2_0').show();
    });
	
	$('#step1_2').click(function(e) {
		$('.adm-detail-title').hide();
		$('#add_sms_event_step_test').hide();
		$(this).parent().show();
		$('#add_sms_event_step2_2').find('.adm-detail-title').show();
		
        $('#add_sms_event_step1_2').hide();
		$('#add_sms_event_step1_0').hide();
		$('#add_sms_event_step2_1').hide();
		$('#add_sms_event_step1_1').hide();
		$('#add_sms_event_step2_0').hide();
		$('#add_sms_event_step2_2').show();
    });
	
	
	
	$('#submit2_1').click(function(e) {
		$('.adm-detail-title').show();
		$('#add_sms_event_step_test').show();
		
        $('#add_sms_event_step1_0').show();
		$('#add_sms_event_step1_1').show();
		$('#add_sms_event_step1_2').show();
		$('#add_sms_event_step2_1').hide();
    });
	
	$('#submit2_0').click(function(e) {
		$('.adm-detail-title').show();
		$('#add_sms_event_step_test').show();
		
		$('#add_sms_event_step1_0').show();
		$('#add_sms_event_step1_1').show();
		$('#add_sms_event_step1_2').show();
		$('#add_sms_event_step2_0').hide();
    });
	
	$('#submit2_2').click(function(e) {
		$('.adm-detail-title').show();
		$('#add_sms_event_step_test').show();
		
        $('#add_sms_event_step1_0').show();
		$('#add_sms_event_step1_1').show();
		$('#add_sms_event_step1_2').show();
		$('#add_sms_event_step2_2').hide();
    });
	////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	////////////////2015-5-5 Ivan////////////////
	
	$('#rep_mail').hide();
	$('#btn_mms').click(function(e) {
		$(this).addClass('active');
		$('#rep_mms').show();
		$('#btn_mail').removeClass('active');
		$('#rep_mail').hide();
    });
	
	$('#btn_mail').click(function(e) {
		$(this).addClass('active');
		$('#rep_mail').show();
		$('#btn_mms').removeClass('active');
		$('#rep_mms').hide();
    });
	
	////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('#jfgz').hover(function(e){
		$('.flo_box').show();
	},function(e){
		$('.flo_box').hide();
	});
	
	$('#box_close').mouseover(function(e) {
		$('.contact_box').show();
		$('.contact_box.new').hide();
    });
	
	$('#box_open').mouseover(function(e) {
		$('.contact_box').show();
		$('.contact_box.new').hide();
    });
	
	$('#box_close').mouseout(function(e) {
        $('.contact_box').hide();
		$('.contact_box.new').show();
    });
	
	
	////////////////2015-8-27 Ivan////////////////
	
	$('#rep_cjje').hide();
	$('#rep_kdj').hide();
	$('#rep_khzz').hide();
	$('#btn_jdsl').click(function(e) {
		$(this).addClass('active');
		$('#rep_jdsl').show();
		$('#btn_cjje').removeClass('active');
		$('#btn_kdj').removeClass('active');
		$('#btn_khzz').removeClass('active');
		$('#rep_khzz').hide();
		$('#rep_cjje').hide();
		$('#rep_kdj').hide();
		$('.ddsl_tip').html($('.tab_box_buts a').eq(0).html()+$(this).html());
    });
	
	$('#btn_cjje').click(function(e) {
		$(this).addClass('active');
		$('#rep_cjje').show();
		$('#btn_jdsl').removeClass('active');
		$('#btn_kdj').removeClass('active');
		$('#btn_khzz').removeClass('active');
		$('#rep_khzz').hide();
		$('#rep_jdsl').hide();
		$('#rep_kdj').hide();
		$('.ddsl_tip').html($('.tab_box_buts a').eq(0).html()+$(this).html());
    });
	
	$('#btn_kdj').click(function(e) {
		$(this).addClass('active');
		$('#rep_kdj').show();
		$('#btn_jdsl').removeClass('active');
		$('#btn_cjje').removeClass('active');
		$('#btn_khzz').removeClass('active');
		$('#rep_khzz').hide();
		$('#rep_jdsl').hide();
		$('#rep_cjje').hide();
		$('.ddsl_tip').html($('.tab_box_buts a').eq(0).html()+$(this).html());
    });
	
	$('#btn_khzz').click(function(e) {
		$('#rep_jdsl').hide();
		$('#rep_cjje').hide();
		$('#rep_kdj').hide();
		$('.ddsl_tip').html($('.tab_box_buts a').eq(0).html()+$(this).html());
		$('#btn_jdsl').removeClass('active');
		$('#btn_cjje').removeClass('active');
		$('#btn_kdj').removeClass('active');
		$(this).addClass('active');
		$('#rep_khzz').show();
		
	});
	
	$('#btn_old_c').click(function(e) {
		$('#btn_new_c').removeClass('active');
        $(this).addClass('active');
		$('.jysjfx_table').hide();
		$('#old_con').show();
		$('.new_old_text').html('老客户是指第二次下单购买的客户');
		$('#btn_khzz').html('老客户增长走势图');
    });
	
	$('#btn_new_c').click(function(e) {
		$('#btn_old_c').removeClass('active');
        $(this).addClass('active');
		$('.jysjfx_table').hide();
		$('#new_con').show();
		$('.new_old_text').html('新客户是指第一次下单购买的客户');
		$('#btn_khzz').html('新客户增长走势图');
    });
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	$('.slide_box').height($(document).height()-85);
	
	var menuShow = true;
	$('.slide_box').click(function(e) {
			if(menuShow){
				$('.soft_body_left').animate({width:'0px'});
				$('.soft_left_side').hide();
				
				var csstype=getCookie("csstype");
				if(csstype!="")
				{
					if(csstype=='1'){
						$(this).css('background','url(../images/slide_right.png) center 30% no-repeat');
					}else{
						$(this).css('background','url(../images/slide_right_pink.png) center 30% no-repeat');
					}
				}else{
					$(this).css('background','url(../images/slide_right.png) center 30% no-repeat');
				}
				
				//$(this).css('background','url(../images/slide_right.png) center 30% no-repeat');
				$(this).animate({left:'0px'});
				menuShow = false;
			}else{
				$('.soft_body_left').animate({width:'190px'},function(){
				$('.soft_left_side').show();});
				var csstype=getCookie("csstype");
				//alert(csstype);
				if(csstype!="")
				{
					if(csstype=='1'){
						$(this).css('background','url(../images/slide_left.png) center 30% no-repeat');
					}else{
						$(this).css('background','url(../images/slide_left_pink.png) center 30% no-repeat');
					}
				}else{
					$(this).css('background','url(../images/slide_left.png) center 30% no-repeat');
				}
				
				//$(this).css('background','url(../images/slide_left.png) center 30% no-repeat');
				$(this).animate({left:'191px'});
				menuShow = true;
			}
		});
	
	var img_index = $('.banner img').length-1;
	var imgNumber = $('.banner img').length-1;
	
	setInterval(function(){
		$('.banner img').eq(img_index).fadeOut();
		if(img_index>=imgNumber){
			//alert('ok');
			img_index = 0;
		}else{
			img_index ++;
		}
		$('.banner img').eq(img_index).fadeIn();
	},5000);
	
	$('.icon_next').click(function(e) {
        $('.banner img').eq(img_index).fadeOut();
		if(img_index>=imgNumber){
			//alert('ok');
			img_index = 0;
		}else{
			img_index ++;
		}
		$('.banner img').eq(img_index).fadeIn();
    });
	
	$('.icon_prev').click(function(e) {
        $('.banner img').eq(img_index).fadeOut();
		if(img_index==0){
			//alert('ok');
			img_index = imgNumber;
		}else{
			img_index --;
		}
		$('.banner img').eq(img_index).fadeIn();
    });
	
	$(".is_limit_open.limitFlag").click(function (){
                if($(this).val()==1){
                    $(".is_limit_open.limitTime").show();
                    $("#tip").show();
                }
                else{
                    $(".is_limit_open.limitTime").hide();
                    $("#tip").hide();
                }
            });

	var isOpen = false;
	var openTime;
	function openLevelTwo(obj){
		if(obj.find('.level_two').css('display') == 'block'){
			obj.find('.level_two').slideUp("slow");
			isOpen = false;
		}else{
			$('.level_two').slideUp("slow");
			obj.find('.level_two').slideDown("slow");
			clearTimeout(openTime);
			isOpen = true;
		}
	}
	
	$('.level_one').click(function(e) {
        openLevelTwo($(this));
    });
	
	
	$('.che_label').click(function(e) {
        if($(this).find('input[type="checkbox"]').attr("checked")=="checked"){	
			$(this).parent().addClass('onthis');
		}else{
			$(this).parent().removeClass('onthis');
		}
    });
	
	$('.num_a').mouseover(function(e) {
        $(this).parent().siblings('.pop_text_box').show();
    });
	
	$('.num_a').mouseout(function(e) {
        $(this).parent().siblings('.pop_text_box').hide();
    });
	
    WindowsSize();
});

$(window).resize(function() {
    WindowsSize();
});

function WindowsSize(){
	//alert($(document).height());
	$('.soft_body').css('min-height',$(window).height()-80);
    if($(window).height()<=$(document).height()){
        //$('.soft_workspace_footer').css('margin-top',$(window).height()-141+'px');
		//$('.soft_workspace_footer').css('position','fixed');
		//alert('asdf');
    }else{
    }
}

function OpenPopbox(id){
    var popbox_bg = $('.popbox_bg');
    $(popbox_bg).height($(document).height());
    $(popbox_bg).width($(document).width());
    var boxName = $('#'+id);
    var InfoBoxLeft = ($(window).width()-$(boxName).width()+2)/2;
    var InfoBoxTop = ((($(window).height()-$(boxName).height())>0?$(window).height()-$(boxName).height():0)+2)/2;
    $(boxName).css({'left':InfoBoxLeft+'px','top':InfoBoxTop+'px'});
    $(popbox_bg).fadeIn(300);
    $(boxName).fadeIn(300);
    $('html, body').animate({scrollTop:0 , scrollLeft:0}, 'slow');
}

function OpenPopbox_noMove(id){
    var popbox_bg = $('.popbox_bg');
    $(popbox_bg).height($(document).height());
    $(popbox_bg).width($(document).width());
    var boxName = $('#'+id);
    var InfoBoxLeft = ($(window).width()-$(boxName).width()+2)/2;
	var InfoBoxTop = ($(window).height()-$(boxName).height()+2)/2 + window.scrollY;;
    //var InfoBoxTop = ((($(window).height()-$(boxName).height())>0?$(window).height()-$(boxName).height():0)+2)/2;
    $(boxName).css({'left':InfoBoxLeft+'px','top':InfoBoxTop+'px'});
    $(popbox_bg).fadeIn(300);
    $(boxName).fadeIn(300);
    //$('html, body').animate({scrollTop:0 , scrollLeft:0}, 'slow');
}

function OpenPopbox_noMove_nTop(id){
    var popbox_bg = $('.popbox_bg');
    $(popbox_bg).height($(document).height());
    $(popbox_bg).width($(document).width());
    var boxName = $('#'+id);
    var InfoBoxLeft = ($(window).width()-$(boxName).width()+2)/2;
	//var InfoBoxTop = ($(window).height()-$(boxName).height()+2)/2 + window.scrollY;;
    //var InfoBoxTop = ((($(window).height()-$(boxName).height())>0?$(window).height()-$(boxName).height():0)+2)/2;
    $(boxName).css({'left':InfoBoxLeft+'px','top':'50px'});
    $(popbox_bg).fadeIn(300);
    $(boxName).fadeIn(300);
    //$('html, body').animate({scrollTop:0 , scrollLeft:0}, 'slow');
}

function ClosePopbox(id){
    //if(getQueryString('source')=='home'){
    //    location.href = "http://tb.easycontact.cn/user/index";
    //}
    var popbox_bg = $('.popbox_bg');
    var boxName = $('#'+id);
    $(boxName).fadeOut(300);
    $(popbox_bg).fadeOut(300);
}

function OpenRemind_noMove(id){
    var popbox_bg = $('.popbox_bg_remind');
    $(popbox_bg).height($(document).height());
    $(popbox_bg).width($(document).width());
    var boxName = $('#'+id);
     var InfoBoxLeft = ($(window).width()-$(boxName).width()+2)/2;
	var InfoBoxTop = ($(window).height()-$(boxName).height()+2)/2 + window.scrollY;;
    $(boxName).css({'left':InfoBoxLeft+'px','top':InfoBoxTop+'px'});
    $(popbox_bg).fadeIn(300);
    $(boxName).fadeIn(300);
   // $('html, body').animate({scrollTop:0 , scrollLeft:0}, 'slow');
}

function OpenRemind(id){
    var popbox_bg = $('.popbox_bg_remind');
    $(popbox_bg).height($(document).height());
    $(popbox_bg).width($(document).width());
    var boxName = $('#'+id);
    var InfoBoxLeft = ($(window).width()-$(boxName).width()+2)/2;
    var InfoBoxTop = ($(window).height()-$(boxName).height()+2)/2;
    $(boxName).css({'left':InfoBoxLeft+'px','top':InfoBoxTop+'px'});
    $(popbox_bg).fadeIn(300);
    $(boxName).fadeIn(300);
    $('html, body').animate({scrollTop:0 , scrollLeft:0}, 'slow');
}


function CloseRemind(id){
    if(getQueryString('source')=='home'){
        location.href = "http://tb.easycontact.cn/user/index";
    }
    var popbox_bg = $('.popbox_bg_remind');
    var boxName = $('#'+id);
    $(boxName).fadeOut(300);
    $(popbox_bg).fadeOut(300);
}

function FileUploadFun(id,spanid){
    var thisId = $('#'+id);
    var thisSpanId = $('#'+spanid);
    str_file = $(thisId).val();
    str_file = str_file.replace(/\\/g, '/');
    filename = str_file.substr(str_file.lastIndexOf("/")+1);
    $(thisSpanId).html(filename);
}

function getQueryString(name){//获取连接参数
    var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
    if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " "));
    return "";
}

function getQueryStringFromUrl(url,name){//获取连接参数
    var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
    if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, " "));
    return "";
}

function getOs(){
    var popHtml = "<div class=\"popbox_core popbox_remind\" id=\"ieUpdateBox\"><div class=\"popbox_head\"><span class=\"title\">浏览器版本过低，请升级您的浏览器！</span><div class=\"popbox_head_right\"><a class=\"popbox_close\" onclick=\"ClosePopbox('ieUpdateBox')\"></a></div></div><div class=\"popbox_workspace\"><div class=\"percentage_box\"><div id=\"ieUpdateText\" class=\"percentage_text\"></div></div></div></div>";
    if(navigator.appName == "Microsoft Internet Explorer"){
        var IEversion = navigator.appVersion.split(";")[1].replace(/[ ]/g,"");
        if (IEversion=="MSIE6.0" || IEversion=="MSIE7.0"){
            $("body").prepend(popHtml);
            $('#ieUpdateText').html("您目前使用的浏览器是"+IEversion+"，本系统最低需要IE8及以上版本浏览器，才可正常工作，请升级您的浏览器！");
            $('#ieUpdateBox').width($(window).width()-10);
            $('#ieUpdateBox').height($(window).height()-10);
            OpenRemind('ieUpdateBox');
        }/*else if (IEversion=="MSIE8.0"){
         $("body").prepend(popHtml);
         $('#ieUpdateText').html("您目前使用的浏览器是"+IEversion+"，为了达到最佳浏览效果，我们建议您升级浏览器！");
         $('#ieUpdateBox').width($(window).width()-10);
         $('#ieUpdateBox').height($(window).height()-10);
         OpenRemind('ieUpdateBox');
         }*/
    }
}

//火狐下支持innerText
function isIE(){ //ie? 
    if (window.navigator.userAgent.toLowerCase().indexOf("msie")>=1)
        return true;
    else
        return false;
}

if(!isIE()){ //firefox innerText define
    HTMLElement.prototype.__defineGetter__("innerText",
        function(){
            var anyString = "";
            var childS = this.childNodes;
            for(var i=0; i<childS.length; i++) {
                if(childS[i].nodeType==1)
                    anyString += childS[i].tagName=="BR" ? '\n' : childS[i].innerText;
                else if(childS[i].nodeType==3)
                    anyString += childS[i].nodeValue;
            }
            return anyString;
        }
    );
    HTMLElement.prototype.__defineSetter__("innerText",
        function(sText){
            this.textContent=sText;
        }
    );
}


function JtableNoBottom(obj){this.init(obj);}
JtableNoBottom.prototype = {
    init  :function(obj){
        var self = this;
        this._id = obj.id;//ID
        this.getCss();
    },
    getCss :function(){
        $('#'+this._id+' .jtable-bottom-panel').css({'border-radius':'0','border-bottom':'0'});
    }
}

function AlexTab(obj){this.init(obj);}
AlexTab.prototype = {
    init  :function(obj){
        var self = this;
        this._tabId = obj.tabId;//ID
        this._boxId = obj.boxId;//ID
        this._oldm = 0;
        this.tabClick();
    },
    tabClick : function(){
        self = this;
        $('#'+this._tabId+' > span').click(function(){
            var h = $(this).index();
            if(h != self._oldm){
                $(this).addClass('active');
                var m = $('#'+self._tabId+' > span');
                $(m[self._oldm]).removeClass('active');
                $('#'+self._boxId[self._oldm]).hide();
                $('#'+self._boxId[h]).show();
                self._oldm = h;
            }
        })
    }
}

function AlexTab2(tabId,boxId){this.init(tabId,boxId);}
AlexTab2.prototype = {
	_oldm : new Array(),
    init  :function(tabId,boxId){
        var self = this;
        this.tabClick(tabId,boxId);
		this._oldm[tabId] = 0;
    },
    tabClick : function(tabId,boxId){
        var self = this;
		var m = $('#'+tabId+' > span');
        $('#'+tabId+' > span').click(function(){
            var h = $(this).index();
			//alert(self._oldm);
            if(h != self._oldm[tabId]){
                $(this).addClass('active');
				$(m[self._oldm[tabId]]).removeClass('active');
				$('#'+boxId[self._oldm[tabId]]).hide();
				$('#'+boxId[h]).show();
                self._oldm[tabId] = h;
            }
        })
    }
}


//屏蔽IE下console输出
if(!window.console){
    window.console={}
    window.console.log=function(){return;}
}

//增加replaceAll方法
String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}

String.prototype.endWith=function(str){
    if(str==null||str==""||this.length==0||str.length>this.length)
        return false;
    if(this.substring(this.length-str.length)==str)
        return true;
    else
        return false;
    return true;
}

String.prototype.startWith=function(str){
    if(str==null||str==""||this.length==0||str.length>this.length)
        return false;
    if(this.substr(0,str.length)==str)
        return true;
    else
        return false;
    return true;
}


//Array.forEach implementation for IE support..
//https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (this == null) {
            throw new TypeError(" this is null or not defined");
        }
        var O = Object(this);
        var len = O.length >>> 0; // Hack to convert O.length to a UInt32
        if ({}.toString.call(callback) != "[object Function]") {
            throw new TypeError(callback + " is not a function");
        }
        if (thisArg) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}

//var createPageModuleId = 51 ;
//var tradeRemindModuleId = 46;

function AlexLeftNav(obj){this.init(obj);}
AlexLeftNav.prototype = {
	init  :function(obj){
		var self = this;
		this.setupMenu();
	},
	setupMenu : function(){
		var self = this;
		var left_nav_box = $('#soft_left_side_submenu_Box > .soft_left_side_submenu');
		for(i=0; i<=$(left_nav_box).length; i++){
			var liBox = $(left_nav_box[i]).children('ul.nav_first_list').children('li');
			for(m=0; m<=$(liBox).length-1; m++){
				if ($(liBox[m]).children('ul').length > 0){
					$(liBox[m]).children('em').addClass('much');
					self.openFun(liBox,i,m);
				}
			}
		}
	},
	openFun : function(liBox,i,m){
		var self = this;
		var thisGo = new Array();//此值用于保证展开初始化只执行一次
		if ("undefined" == typeof thisGo[m])thisGo[m] = true;
		if (thisGo[m] == true){
			var alexLeftNavFun = new AlexLeftNavFun({menu:$(liBox[m]),h:m});
			alexLeftNavFun;
			thisGo[m] = false;
		}
	}
}
function AlexLeftNavFun(obj){this.init(obj);}
AlexLeftNavFun.prototype = {
	init  :function(obj){
		var self = this;
		this._menu = obj.menu;
		this._h = obj.h;
		this._list_status = new Array();
		var self = this;

		$(this._menu).click(
			function(){
				if($(self._menu).children('ul').css('display') == 'none'){
					$('ul.nav_first_list li').children('ul').slideUp("slow");
					$('ul.nav_first_list li').children('em').removeClass('zz');
					$(self._menu).children('ul').slideDown("slow");
				    $(self._menu).children('em').addClass('zz');
				}else{
					$(self._menu).children('ul').slideUp("slow");
					$(self._menu).children('em').removeClass('zz');
				}
			}
		)
	}
}
function checkSendTime(sendTime){
    var flag=false;
    var startTime ;
    var stopTime ;
    if(sendTime==null || sendTime=='' ||  sendTime=='undefined'){
        var  d =  new Date();
        sendTime = dateToString(d);
        startTime = sendTime.substring(0,10)+' 08:00:00';
        stopTime = sendTime.substring(0,10)+' 22:00:00';
    }else{
        startTime = sendTime.substring(0,10)+' 08:00:00';
        stopTime = sendTime.substring(0,10)+' 22:00:00';
    }

    startTime=startTime.replace(/[-]/g,"/");
    stopTime=stopTime.replace(/[-]/g,"/");
    sendTime = sendTime.replace(/[-]/g,"/");

    var a = Date.parse(sendTime) - Date.parse(startTime);
    var b = Date.parse(stopTime) - Date.parse(sendTime);

    if(a>0 && b>0){
        flag = true;
    }else{
        flag = false;
        alert("短信发送时间为：早上8:00到晚上22：00");
    }
//    return false;
    return flag;
}


function checkMobile(str){
    console.log("处理前:"+str);
    var re= /(1[0-9]{10})/g;
    var ss=str.match(re);
    console.log("处理之后:"+ss);
    if(null == ss ){
        ss = "";
    }else{
        ss = ss.join(",");
    }
    return ss;
}



function dateToString(strDate){
    var d=new Date(strDate);  //  获取当前日期
    var month = (d.getMonth()+1)<10?"0"+ (d.getMonth()+1):(d.getMonth()+1);
    var day = (d.getDate())<10?"0"+ (d.getDate()):(d.getDate());
    var hour = (d.getHours())<10?"0"+ (d.getHours()):(d.getHours());
    var min = (d.getMinutes())<10?"0"+ (d.getMinutes()):(d.getMinutes());
    var sec = (d.getSeconds())<10?"0"+ (d.getSeconds()):(d.getSeconds());
    var str=d.getFullYear()+"/"+month+"/"+day+" "+hour+":"+min+":"+sec;
    return str;
}

/**
 * 打开弹出框
 * @param type 弹出框类型  a alert 其他 confirm
 * @param title 弹出框标题
 * @param con 弹出框内容
 * @param id 弹出框的id
 * @constructor
 */
function OpenPopbox_new(type,title,con,id){
	if(type=='a'){
		$('body').append('<div class="popbox_core sm rem" id="new_popbox'+id+'"><div class="popbox_head"><span class="title">'+title+'</span></div><div class="popbox_workspace">'+con+'</div><div class="submitbox"><input class="submit ok_btn" value="确认" type="button" onclick="CloseRemind(\'new_popbox'+id+'\')"></div></div>');
	}else{
		$('body').append('<div class="popbox_core sm rem" id="new_popbox'+id+'"><div class="popbox_head"><span class="title">'+title+'</span></div><div class="popbox_workspace">'+con+'</div><div class="submitbox"><input class="submit ok_btn"  value="确认" type="button" onclick="CloseRemind(\'new_popbox'+id+'\')"><input class="submit can can_btn" value="取消" type="button" onclick="CloseRemind(\'new_popbox'+id+'\')"></div></div>');
	}
	var popbox_bg = $('.popbox_bg_remind');
	$(popbox_bg).height($(document).height());
	$(popbox_bg).width($(document).width());
	var boxName = $('#new_popbox'+id+'');
	var InfoBoxLeft = ($(window).width()-$(boxName).width()+2)/2;
	var InfoBoxTop = ($(window).height()-$(boxName).height()+2)/2 + window.scrollY;
	$(boxName).css({'left':InfoBoxLeft+'px','top':InfoBoxTop+'px'});
	$(popbox_bg).fadeIn(0);
	$(boxName).fadeIn(0);
}

/**
 * alert 弹出框
 * @param title 标题
 * @param content 内容
 * @param callback 确认的回调，没有传值null
 * @param id 弹出框的id
 * @constructor var popAlert = new PopAlert(title,content,callback,id);popAlert;
 */
function PopAlert(title,content,callback,id){this.init(title,content,callback,id);}
PopAlert.prototype = {
	init  :function(title,content,callback,id){
		var self = this;
		this._title  = title;
		this._content  = content;
		this._id = id + '_' + Date.parse(new Date());
		this._callback (callback);
	},
	_callback : function(callback){
		self = this;
		OpenPopbox_new('a',this._title,this._content,this._id);
		if (callback!=null && typeof callback =='function'){
			$("#new_popbox"+this._id+" .ok_btn").bind("click",callback);
		}
	}
};

/**
 * 确认有回调的确认框
 * @param title 确认框的名称
 * @param content 确认框的内容
 * @param callback 确认按钮的回调，默认传值null
 * @param id 确认框的id
 * @constructor var popConfirm = new PopConfirm(title,content,callback,id);popConfirm;
 */
function PopConfirm(title,content,callback,id){this.init(title,content,callback,id);}
PopConfirm.prototype = {
	init  :function(title,content,callback,id){
		var self = this;
		this._title  = title;
		this._content  = content;
		this._id = id + '_' + Date.parse(new Date());
		this._callback (callback);
	},
	_callback : function(callback){
		self = this;
		OpenPopbox_new('c',this._title,this._content,this._id);
		if (callback!=null && typeof callback =='function'){
			$("#new_popbox"+this._id+" .ok_btn").bind("click",callback);
		}
	}
};

/**
 * 确认和取消都有回调函数的确认框
 * @param title 确认框标题
 * @param content 确认框内容
 * @param callback 确认框确定的回调  默认传值 null
 * @param id 确认框的id
 * @param callback1 确认框取消的回调 默认传值 null
 * @constructor var popConfirm = new PopConfirmCallBack(title,content,callback,id,callback1);popConfirm;
 */
function PopConfirmCallBack(title,content,callback,id,callback1){this.init(title,content,callback,id,callback1);}
PopConfirmCallBack.prototype = {
	init  :function(title,content,callback,id,callback1){
		var self = this;
		this._title  = title;
		this._content  = content;
		this._id  = id+'_'+Date.parse(new Date());
		this._callback (callback,callback1);
	},
	_callback : function(callback,callback1){
		self = this;
		OpenPopbox_new('c',this._title,this._content,this._id);
		if (callback!=null && typeof callback =='function'){
			$("#new_popbox"+this._id+" .ok_btn").bind("click",callback);
		}
		if (callback1!=null && typeof callback1 =='function'){
			$("#new_popbox"+this._id+" .can_btn").bind("click",callback1);
		}
	}
	
};




//pink 代表粉红色样式
function ChangeSkin()
{
	var csstype=getCookie("csstype");
	//alert(csstype);
	if(csstype!="")
	{
		if(csstype=='1'){
			document.cookie="csstype=2;path=/";
		}else{
			document.cookie="csstype=1;path=/";
		}
	}else{
		document.cookie="csstype=2;path=/";
	}
	
	
	window.location.reload(true);
	
}



function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 ;
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
    } 
  }
return "";
}
/**
function getFaqInfo(id,name){
        //alert(id);
        name='#'+name;	//alert(name);
        //$.post('{ctx}/usercenter/getFaqDetail', { faq_id:id } ,function(data){$(name).attr("title",data);alert(data);});  //alert($(name).attr("title"));    
        $.ajax({
            url: '${ctx}/usercenter/getFaqDetail',
            type: 'POST',
            data : {
                    faq_id:id
            },
            dataType: 'text',
            success: function(data){//alert(data);
                $(name).attr("title",data.replace(/<[^>]+>/g,""));
            }
        });
    }
    //添加faq标签
    function initFaqTitle(){
	    $('a').mouseover(function(){
	         var id=$(this).attr("id");//alert(id);
	         if('faqId'.indexOf(id)){
	             var title=$('#'+id).attr('title');
	             if(title==null||title=='undefined'){//alert(id);
                     getFaqInfo(id.substring(5),id);
                 }
	         }
	    });
	}**/