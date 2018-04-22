$(document).ready(function() {
	var checkbox = $('#checkbox')
	var label    = $('collapse-menu')


	checkbox.change(function() {
		if(!checkbox.is(':checked')) {
			$('.nav_list_wrapper').css('display', 'block')
		} else {
			$('.nav_list_wrapper').css('display', 'none')
		}

	})
})
