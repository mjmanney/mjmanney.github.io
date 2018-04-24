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

	var quoteList = [
		{ person: 'Elon Musk' , quote: "Work like hell. I mean you just have to put in 80 to 100 hour weeks every week... even if you're doing the same thing [as others] you know that you will achieve in four months what it takes them a year to achieve." },
		{ person: 'Steve Jobs', quote: "That’s how I see business: great things in business are never done by one person. They’re done by a team of people."}
	]
})
