
$(document).ready(function() {
	// Scroll the bottom of the page
	window.scroll(0, document.documentElement.scrollHeight)

	// Callback for IntersectionObserver
	var onObserve = function (entries, observer) {
		entries.forEach(entry => {
			var el = $(entry.target)
			if(entry.isIntersecting) {
				if(!el.hasClass('animated fadeInLeft') && el.hasClass('flex-about')) el.addClass('animated fadeInLeft')
				if(!el.hasClass('animated fadeInRight') && el.hasClass('flex-technical')) el.addClass('animated fadeInRight')
			}
		})
	}

	// Options for IntersectionObserver
	var options = {
		root: null,
		margin: '0px',
		threshold: 0.8
	}

	// Instantiate observer, observe targets
	var observer = new IntersectionObserver(onObserve, options)
	observer.observe($('.flex-technical')[0])
	observer.observe($('.flex-about')[0])

	// Toggle menu
	var checkbox = $('#checkbox')

	checkbox.change(function() {
		if(!checkbox.is(':checked')) {
			$('#modal-menu').addClass('modal-menu')
			$('body').css('overflow', 'hidden')
		} else {window.alert('unchecked')}
	})

	// Smooth scrolling between anchors
	$('a.smooth-scroll').each(function(i) {
		let self = $(this)
		let target = $(self.attr('href'))

		// TODO MAKE THIS WORK

		self.on('click', function(e) {
			if(target === "") {
				$('#modal-menu').removeClass('modal-menu')
				$('#checkbox').prop('checked', true)
				$('body').css('overflow', 'scroll')
				e.preventDefault();
				return
			}
			else {

				$('html, body').animate({
					scrollTop: target.offset().top
				}, 800, function(){
					window.location.hash = target
				})
				$('#modal-menu').removeClass('modal-menu')
				$('#checkbox').prop('checked', true)
				$('body').css('overflow', 'scroll')
								e.preventDefault()
			}
		})
	})


	var quoteList = [
		{ person: 'Elon Musk' , quote: "Work like hell. I mean you just have to put in 80 to 100 hour weeks every week... even if you're doing the same thing [as others] you know that you will achieve in four months what it takes them a year to achieve." },
		{ person: 'Steve Jobs', quote: "That’s how I see business: great things in business are never done by one person. They’re done by a team of people."}
	]
})
