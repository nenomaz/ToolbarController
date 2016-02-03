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

#### Associate **actions** to toolbar buttons

For each of the button you want to make a submit with the selected elements, please invoke the MyToolbar.execute