/*
    Copyright 2016 Nazzareno Mazzitello
	 
    This file is part of ToolbarController.
	 
    ToolbarController is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    ToolbarController is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with ToolbarController.  If not, see <http://www.gnu.org/licenses/>.
*/

function ToolbarController(name) {
	this.name = name;
	this.itemsSelected = [];

	// This little snippet append a form to the body for non-Ajax actions
	jQuery(function(){
		var form = jQuery('<form id="' + name + '" style="display:none;">');
		jQuery('body').append(form);
	});
};

/*
* Add an item to the keeping track list
*/
ToolbarController.prototype.addItem = function(value) {
	this.itemsSelected.push(value);
};

/*
* Remove an item from the keeping track list
*/
ToolbarController.prototype.removeItem = function(value) {
	for(var i = 0; i < this.itemsSelected.length; i++) {
		if (this.itemsSelected[i] == value)
			this.itemsSelected.splice(i, 1);
	}
};

ToolbarController.prototype.toggleItem = function(value) {
	if (!this.hasItem(value)) {
		this.addItem(value);
	} else {
		this.removeItem(value);
	}
};

ToolbarController.prototype.hasItem = function(value) {
	var hasItem = false;
	for(var i = 0; i < this.itemsSelected.length; i++) {
		if (this.itemsSelected[i] == value) {
			hasItem = true;
			i = this.itemsSelected.length;
		}
	}
	return hasItem;
};

/*
* Execute an action of the toolbar on the list items tracked
* @param action: an object with these properties: 
* 	string httpMethod
* 	string url
* 	bool ajax
*/
ToolbarController.prototype.execute = function(action) {
	if (!action.ajax) {
		var form = this.getForm();
		form.attr('method', action.httpMethod);
		form.attr('action', action.url);
		form.empty();
		this.populateForm();
		form.submit();
	}
};

ToolbarController.prototype.getForm = function() {
	return jQuery("#" + this.name);
}

ToolbarController.prototype.populateForm = function() {
	var form = this.getForm();
	for (var i = 0; i < this.itemsSelected.length; i++) {
		var hiddenField = '<input type="hidden" name="item[' + i + ']" value="' + this.itemsSelected[i] + '">';
		form.append(hiddenField);
	}
}
