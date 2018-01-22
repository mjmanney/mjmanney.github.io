$(document).ready(function() {
	var APP = {
		bindEvents: function() {
			APP.tag.modalBtn.click(APP.hide)
		},

		tag: {
			modalBtn: $('#modalBtn'),
			hidden: $('#hidden'),
			github: $('#github'),
			codepen: $('#codepen')
		},

		init: function() {
			APP.bindEvents()
		},

		hide: function() {
			if(APP.toggleFlag === false) {
				APP.tag.modalBtn.html('Show Recent Build')
				APP.toggleFlag = true
			} else {
				APP.tag.modalBtn.html('Hide Recent Build')
				APP.toggleFlag = false
			}
		}
	}
	APP.init()
})
