this.$ = this.jQuery = jQuery.noConflict(true); $("iframe[name='result']").each(function() { this.sandbox += ' allow-modals'; });
$(document).ready(function () {
	res = 0;
	$(".noselect").on("click", function (event) {
		
		if ($(event.target).is('.noselect')) {
			$('.select').addClass('noselect');
			$('.select').removeClass('select')
			$(event.target).addClass('select');
			$(event.target).removeClass('noselect')
			
			for(i = 1; i <= 4; i++){
				if($(event.target).is('#' + i)) res = i; 
			}

		}
	});
	
	$("#button").on("click", function () {
		if(res == 0){
			swal("", "你還未選取答案，請先選取答案", "error");
			//alert("你還未選取答案，請先選取答案")
		}
		else if(res == 1 || res == 2 || res == 3){
			swal("", "答案錯了喔", "error");
			//alert("答案錯了喔")
		}
		else if(res == 4){
			swal("", "正確答案", "success");
			//alert("正確答案")
		}
	});
});
