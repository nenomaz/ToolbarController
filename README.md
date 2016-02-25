# ToolbarController
A micro javascript framework to manage a simple toolbar actions and elements.

**Please note**: at the moment, there is support only for submit actions, that is, such actions known as normal form submit.

## Requirements
---------
- JQuery

## Getting started
---------

Include the script on your page, after JQuery:
```
<script src="jquery.min.js"></script>
<script src="ToolbarController.js"></script>
```

### Let's go

Make sure you have placed your toolbar and elements in the DOM

#### Init yout toolbar
```
var MyToolbar = new ToolbarController('MyToolbar');
```

#### Keep track of selected elements

Take the one of the simplest and common case: our elements are in a list, selectable by clicking on their checkbox, so we choose to distinguish them by their value, here are an example:
```
<input type="checkbox" name="item1" value="1" onclick="if (this.checked) MyToolbar.addItem(this.value); else MyToolbar.removeItem(this.value);" />
```
In this case, when the element checkbox is clicked, we examine his status: if is checked, we add its value to the toolbar, else we remove it.

#### Execute actions

To execute a submit action, you have to invoke:
```
MyToolbar.execute({
	httpMethod: 'post',
	url: 'http://myactionurl',
	ajax: false
};
```

This statement will abstract you from an hidden form, which will be configured with the options you are giving and the list of selected elements as data to send.

##### A brief example

Define your actions in an object:
```
var myToolbarActions = {
	action1: {
		httpMethod: 'post',
		url: 'http://action1-example',
		ajax: false
	},
	action2: {
		httpMethod: 'post',
		url: 'http://action2-example',
		ajax: false
	},
	...
}
```

Attach an event listener (the one you want that will be the trigger) to buttons matching each of your action, for example:
```
<button onclick="if (confirm('Are you sure?')) MyToolbar.execute(myToolbarActions.action1);">Action1</button>
<button onclick="if (confirm('Are you sure?')) MyToolbar.execute(myToolbarActions.action2);">Action2</button>
...
```

#### Customization

##### Customize the manner or the format by which the form will be populated

After you have initiated your MyToolbar object, simply override the populateForm() method with this sintax:
```
MyToolbar.populateForm = function() {
	var form = this.getForm();
	// Here your populating form manner, as you prefer
	// Keep in mind that selected elements are available in the property: this.itemsSelected
	
}
```