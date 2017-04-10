// Get all require elements

function get(str) {
	return document.querySelectorAll(str);
}
var l = get('a'); // Get all anchor elements
for (var i = 0; i < l.length; i++) {
	l[i].setAttribute('tabIndex', i); // set pre-defined tab indexes on anchor tags
}
var menu = get('.front-menu'); // Select All top (Main) menus
for (var i = 0; i < menu.length; i++) {
	// bind focus event on main menus
	menu[i].addEventListener('focus', function(e) {
		var that = this; // hold 'current element' in 'that' variable for futher usage
		if (this.dataset.hassub == '0') { // Check if current 'a' element has not sub-menu or not
			// Hide all Main menus
			for (var n = 0; n < menu.length; n++) {
				if (menu[n].dataset.hassub == '1') {
					menu[n].parentNode.children[3].classList.remove('focuser');
				}
			}
		} else { // get in the block if current 'a' element has sub-menu
			for (var n = 0; n < menu.length; n++) {
				// Check if current 'a' element has sub-menu or not
				if (menu[n].dataset.hassub == '1') {
					try { // Error Handler for if unknown element getting clicked
						// Check if this element has Main menu ( For deep sub-menus )
						var check = that.previousElementSibling.className.indexOf('top');
						// Check if current 'a' element is sub menu of another sub-menu 
						if (check > 0) menu[n].parentNode.children[3].classList.remove('focuser');
					} catch (e) {
						// do something...if you got error
					}
				}
			}
		}
		// Focus on Anchor tag if the current element contains sub-menu
		if (this.dataset.hassub == '1') this.parentNode.children[3].classList.add('focuser');
	})
}
var no = 0;
// Bind an Arrow key with all Up,Down,Left,Right arrows
window.addEventListener('keyup', function(e) {
	// If you press Right or Down arrow keys
	if (e.which == 39 || e.which == 40) {
		if (no == 0) { // If you press Right or Down arrow keys for 1st time
			get('a')[0].focus();
			no++;
		} else {
			// Go to next tab
			get('a[tabIndex="' + no+++'"]')[0].focus();
		}
	} else if (e.which == 37 || e.which == 38) {
		// If you press Up or Left arrow keys
		if (no > 0) {
			// Go to previous tab
			var x = --no;
			get('a[tabIndex="' + --x + '"]')[0].focus();
		}
	}
})