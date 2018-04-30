var App = {
	init: function() {
		window.scroll(0, document.documentElement.scrollHeight)
		App.observe()
		App.navbar()
	},

	observe: function() {
		var options  = { root: null, margin: '0px', threshold: 0.8 }
		var observer = new IntersectionObserver(onObserve, options)
		function onObserve(entires, observer) {
			entires.forEach(entry => {
				var el = $(entry.target)
				if(entry.isIntersecting) {
					if(!el.hasClass('animated fadeInLeft')  && el.hasClass('flex-about'))     el.addClass('animated fadeInLeft')
					if(!el.hasClass('animated fadeInRight') && el.hasClass('flex-technical')) el.addClass('animated fadeInRight')
				}
			})
		}
		observer.observe($('.flex-technical')[0])
		observer.observe($('.flex-about')[0])
	},

	navbar: function () {
		$('#checkbox').change(function() {
			if(!$('#checkbox').is(':checked')) {
				$('#modal-menu').css('display', 'block')
												.removeClass('animated slideOutUp')
												.addClass('modal-menu animated slideInDown')
				$('body').css('overflow', 'hidden')
			} else { window.alert('Error toggling menu.') }
		})

		$('a.smooth-scroll').each(function(i) {
			var self   = $(this)
			var target = $(self.attr('href'))

			self.on('click', function(e) {
				e.preventDefault();
				$('#modal-menu').removeClass('animated slideInDown')
												.addClass('animated slideOutUp')
				$('#checkbox').prop('checked', true)
				$('body').css('overflow', 'scroll')

				if(target[0] === undefined) return

				$('html, body').animate({
					scrollTop: target.offset().top
				}, 800, function(){
					window.location.hash = target
				})
			})
		})
	}
}

$(document).ready(App.init)
