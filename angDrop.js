


var fileDrop = angular.module("fileDropDirective",["ngRoute"]);


fileDrop.directive('fileDrop', [function () {

var collectionFiles = [];
	return {
		restrict: 'EA',
		scope: 
		{
    	 "fetchFiles": "="
   		},
		template : "<div class='drop_zone'>Drop Files</div>",
		link: function (scope,element, iAttrs) 
		{

			handleDragOver = function(evt) 
			{
			  evt.stopPropagation();
			  evt.preventDefault();
			  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
			}

			var onDragEnd = function (e) {
                e.preventDefault();
                element.removeClass("dragOver");
            };
 

			handleFileSelect = function(evt) 
			{
			  evt.stopPropagation();
			  evt.preventDefault();
			 
			  var files = evt.dataTransfer.files; // FileList object.

			  // files is a FileList of File objects. List some properties.
			 
			  for (var i = 0, f; f = files[i]; i++) 
			  {
			    var fileTuple = {};
			    fileTuple.name = f.name;
			    fileTuple.type =f.type;
			    fileTuple.size = f.size;
			    fileTuple.lastModified = f.lastModifiedDate;
			    collectionFiles.push(fileTuple);
			    log("File Drop ");
			    log(fileTuple);
			    /*Pass To Scope*/
			    scope.fetchFiles(collectionFiles);
			  }

			}
			element.bind("dragover", handleDragOver);
	        element.bind("dragleave", onDragEnd)
            element.bind("drop",handleFileSelect);
			
		}
	};
}]);


/*
Usage
HTML

<file-drop fetch-files="getFiles"></file-drop>

In Controller

 $scope.getFiles = function(res)
	 {
	 
	 	this.fileList =res;
	 	console.log(res);
	 }




*/



