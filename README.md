# ToolbarController
A micro javascript framework to create a simple toolbar, with buttons and elements of which keep track.

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

#### Define parameters and activity of each **action**