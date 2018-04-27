
$(document).ready(function() {
window.scroll(0, document.documentElement.scrollHeight)

	//
	var onObserve = function (entries, observer) {
		entries.forEach(entry => {
			var el = $(entry.target)
			if(entry.isIntersecting) {
				if(!el.hasClass('animated fadeInLeft') && el.hasClass('flex-about')) el.addClass('animated fadeInLeft')
				if(!el.hasClass('animated fadeInRight') && el.hasClass('flex-technical')) el.addClass('animated fadeInRight')
			}
		})
	}
	var options = {
		root: null,
		margin: '0px',
		threshold: 0.8
	}
	var observer = new IntersectionObserver(onObserve, options)


	var checkbox = $('#checkbox')
	var label    = $('collapse-menu')

	observer.observe($('.flex-technical')[0])
	observer.observe($('.flex-about')[0])

	//


	$('a.smooth-scroll').each(function(i) {
		let self = $(this)
		let target = $(self.attr('href'))
		self.on('click', function(e) {
			e.preventDefault()
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 800, function(){
				window.location.hash = target
			})
		})
	})

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
