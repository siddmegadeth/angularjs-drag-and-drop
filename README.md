# angularjs-drag-and-drop
AngularJS Drag And Drop Directive 

This is Angularjs  directive with Drag and Drop Support.
This directive allows to add files using drag and drop of any files.

# Usage :

Add fileDropDirective in your angular module/app Init as a dependency

var app = angular.module("myApp",["fileDropDirective"]);



# In HTML
<file-drop fetch-files="getFiles"></file-drop>




where file-drop is the directive 
fetch-files allows to get list of files and pass that to getFiles function

# In Controller :

$scope.getFiles = function(res)
	 {
	 	console.log(res);
	 }
	 
	 
While dragging and dropping files. you would be able to see new Object added in console
files are always added and would refresh on page load.
this is to esnure to keep track of files dropped.

# Style
To Style the Drop box . use this class
.drop_zone

You can customize this .drop_zone class from your css files


