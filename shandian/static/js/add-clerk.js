
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			showPopup: true
		} 
	},
	methods: {
		init: function () {
			
		},
		btnOk: function () {
			this.showPopup = !this.showPopup;
		},
		btnCancel: function () {
			this.showPopup = !this.showPopup;
		},
		
	},
	components: {
		// draggable
	}
});