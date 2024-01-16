$(document).ready(function(){

	$('.common_header nav > ul > li > a, .util_menus > li > a').on('mouseenter', function(){
		$('.common_header nav > ul > li > ul, .util_menus > li > ul').addClass('show');
		$('.common_header nav > ul > li > ul, .util_menus > li > ul').animate({
			'opacity':'1',
			'top':'98px'
		});
		$('.common_header .nav_bg').stop().fadeIn();
	});

	$('.common_header').on('mouseleave', function(){
		$('.common_header nav > ul > li > ul, .util_menus > li > ul').removeClass('show');
		$('.common_header nav > ul > li > ul, .util_menus > li > ul').animate({
			'opacity':'0',
			'top':'0'
		});
		$('.common_header .nav_bg').stop().fadeOut();
	});

	$('.lnb_wrap nav > ul > li.has_sub').on('mouseenter', function(){
		$(this).children('ul').stop().slideDown();
	});
	$('.lnb_wrap nav > ul > li.has_sub').on('mouseleave', function(){
		if ($(this).children('ul').hasClass('on')) {
		} else {
			$(this).children('ul').stop().slideUp();
		}
	});

	$('.common_header nav > ul > li > ul > li > a').on('mouseenter', function(){
		$(this).next('ul').addClass('show');
		$(this).next('ul').animate({
			'opacity':'1',
			'margin-top':'20px'
		});
	});

	$('.common_header nav > ul > li > ul > li').on('mouseleave', function(){
		$(this).children('ul').removeClass('show');
		$(this).children('ul').animate({
			'opacity':'0',
			'margin-top':'0'
		});
	});

	$('.mob_gnb_open').on('click', function(){
		$('.mob_gnb_dimm, .mob_gnb_wrap').fadeIn();
	});
	$('.mob_gnb_dimm, .mob_gnb_close').on('click', function(){
		$('.mob_gnb_dimm, .mob_gnb_wrap').fadeOut();
	});

	$('.mob_gnb > ul > li > a').on('click', function(){
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).next('.gnb_submenu').stop().slideUp();
		} else {
			$('.mob_gnb > ul > li > a').removeClass('on');
			$(this).addClass('on');
			$('.gnb_submenu').stop().slideUp();
			$(this).next('.gnb_submenu').stop().slideDown();
		}
	});

	$('#chkAll').on('click', function(){
		if ($('#chkAll').is(':checked')) {
			$('input[name="srchChk"]').prop('checked', true);
		} else {
			$('input[name="srchChk"]').prop('checked', false);
		}
	});

	$('input[name="srchChk"]').on('click', function(){
		var _total = $('input[name="srchChk"]').length;
		var _chked = $('input[name="srchChk"]:checked').length;

		if (_total != _chked) {
			$('#chkAll').prop('checked', false);
		} else {
			$('#chkAll').prop('checked', true);
		}
	});

	$('#mobChkAll').on('click', function(){
		if ($('#mobChkAll').is(':checked')) {
			$('input[name="mobChk"]').prop('checked', true);
		} else {
			$('input[name="mobChk"]').prop('checked', false);
		}
	});

	$('input[name="mobChk"]').on('click', function(){
		var _total = $('input[name="mobChk"]').length;
		var _chked = $('input[name="mobChk"]:checked').length;

		if (_total != _chked) {
			$('#mobChkAll').prop('checked', false);
		} else {
			$('#mobChkAll').prop('checked', true);
		}
	});

	$('.tbl_wrap table td a.btn_stat.appr, .mob_tbl_list button.btn_appr').on('click', function(){
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).text('승인해제');
		} else {
			$(this).addClass('on');
			$(this).text('승인');
		}
	});

	$('.appr_chked, .btn_srch_again').on('click', function(){
		$('.layer_dimm, .confirm_layer').stop().fadeIn();
	});
	$('.confirm_btns a.cancel').on('click', function(){
		$('.layer_dimm, .confirm_layer, .mngr_sel_layer, .confirm_layer.faq_del_layer').stop().fadeOut();
	});

	$('.btn_pic_upload input[type="file"]').on('change', function(){
		var _thisVal = $(this).val();
		$('#picPath').val(_thisVal);
	});

	$('.btn_mngr_sel').on('click', function(){
		$('.layer_dimm, .mngr_sel_layer').stop().fadeIn();
	});

	$('.btn_auth_modi').on('click', function(){
		$('.layer_dimm, .auth_mng_layer').stop().fadeIn();
	});
	$('.auth_mng_layer .close').on('click', function(){
		$('.layer_dimm, .auth_mng_layer').stop().fadeOut();
	});

	$('.faq_wrap dl dt').on('click', function(){
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).next('dd').stop().slideUp();
		} else {
			$(this).addClass('on');
			$('.faq_wrap dl dd').stop().slideUp();
			$(this).next('dd').stop().slideDown();
		}
	});

	$('.faq_del').on('click', function(){
		$('.layer_dimm, .confirm_layer.faq_del_layer').stop().fadeIn();
	});

	$('.log_sel').on('change', function(){
		if ($(this).val() == 'workSel') {
			$('.work_stat_sel').show();
		} else {
			$('.work_stat_sel').hide();
		}
	});

	$('#pickDate').datepicker({
		nextText: '다음 달',
		prevText: '이전 달',
		showOtherMonths: true,
        showMonthAfterYear: true,
		yearSuffix: '년',
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dateFormat: 'yy-mm-dd',
		onClose: function( selectedDate ) {    
			//시작일(startDate) datepicker가 닫힐때
			//종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
			$('#pickDate').datepicker('option', 'minDate', selectedDate);
		}
	});

	$('#startDate').datepicker({
		nextText: '다음 달',
		prevText: '이전 달',
		showOtherMonths: true,
        showMonthAfterYear: true,
		yearSuffix: '년',
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dateFormat: 'yy.mm.dd',
		onClose: function( selectedDate ) {    
			//시작일(startDate) datepicker가 닫힐때
			//종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
			$('#startDate').datepicker('option', 'minDate', selectedDate);
		},
		showOn: 'both',
		buttonImage: 'img/icon_calr.png',
		buttonImageOnly: true
	});
	$('#endDate').datepicker({
		nextText: '다음 달',
		prevText: '이전 달',
		showOtherMonths: true,
        showMonthAfterYear: true,
		yearSuffix: '년',
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dateFormat: 'yy.mm.dd',
		onClose: function( selectedDate ) {    
			//시작일(startDate) datepicker가 닫힐때
			//종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
			$('#endDate').datepicker('option', 'minDate', selectedDate);
		},
		showOn: 'both',
		buttonImage: 'img/icon_calr.png',
		buttonImageOnly: true
	});

});