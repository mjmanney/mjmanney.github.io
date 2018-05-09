var App = {
	init: function() {
		window.scroll(0, document.documentElement.scrollHeight)
		App.observe()
		App.navbar()
		App.showcase()
		App.clickBounce([$('#next'), $('#prev')])
	},

	observe: function () {
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

		$('a.smooth-scroll').each(function (i) {
			var self   = $(this)
			var target = $(self.attr('href'))

			self.on('click', function(e) {
				e.preventDefault();
				$('#modal-menu').removeClass('animated slideInDown')
												.addClass('animated slideOutUp')
				$('#checkbox').prop('checked', true)
				$('body').css('overflow-y', 'scroll')

				if(target[0] === undefined) return
				console.log(target)
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 800, function(){
					window.location.hash = target
					$('body').css('overflow-x', 'hidden')
				})
			})
		})
	},

	showcase: function () {
		var vm = new Vue({
			el: '#projects',
			data: {
				p: [
					{ t: 'BLE Scanner', d: 'A scanning application interfacing the KDC BLE scanner with Cassia Bluetooth Router.  View the repository.'                                           , l: 'https://github.com/mjmanney/cassia-server', s:'Version 1.0', tags: ['Node.js', 'Express.js', 'Pug', 'Skeleton CSS', 'Authentication', 'Promises', 'AJAX'] , src:"src/video/kdc_cassia_demo.mp4" },
					{ t: 'Weather Now', d: 'An application using Open Weather API for accurate and up-to-date weather forecasts.'                                                                 , l: '#'                                        , s:'Coming Soon', tags: ['JavaScript', 'JSON', 'API', 'AJAX']                                                  , src:"https://images.pexels.com/photos/906023/pexels-photo-906023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
					{ t: 'Instascrape', d: 'A tool for developers to access public media endpoints on Instagram without using the official API or authentication.'                                , l: 'projects/instascrape/index.html'          , s:'Version 1.0', tags: ['CSS3 Flexbox', 'Promises', 'REST', 'AJAX']                                           , src:"https://images.pexels.com/photos/122383/pexels-photo-122383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
					{ t: 'Arcade'     , d: 'A collection of classic arcade games built using the languages of the web - with a twist.'                                                            , l: '#'                                        , s:'Coming Soon', tags: ['Event Driven JS', 'Collision Detection', 'HTML5 Canvas' ]                            , src:"https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
					{ t: 'Portfolio'  , d: 'The site you are on now! I am constantly revising and adding new features. Managed using AWS S3, Route 53, Cloud Front, & ACM technologies'           , l: 'https://github.com/mjmanney/domain'       , s:'Version 2.0', tags: ['AWS', 'jQuery', 'Bootstrap', 'Vue.js' , 'Animate.css', 'Responsive Design']       , src:"https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  }
				],
				c: 0
			},
			methods: {
				next: function () {
					var current = document.getElementsByClassName('i')
					var len     = this.p.length
					current[this.c].className = 'i'
					this.c += 1
					if(this.c >= len) this.c = 0
					current[this.c].className += ' current'
				},
				prev: function () {
					var current = document.getElementsByClassName('i')
					var len     = this.p.length
					current[this.c].className = 'i'
					this.c -= 1
					if(this.c < 0) this.c = len - 1
					current[this.c].className += ' current'
				}
			}
		})
	},

	clickBounce: function(buttonList) {
		buttonList.forEach(button => {
			$(button).on('mousedown touchstart', function(e) {
				button.addClass('btn-feedback')
	 		})
	 		.on('mouseup touchend', function(e){
	 			button.removeClass('btn-feedback')
	 		})
	 	})
	}
}


$(document).ready(App.init)
