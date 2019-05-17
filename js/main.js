"use strict";

function run(level) {
    // YOUR CODE GOES HERE 
}    

/**
 * Load the selected level file and run it.
 * @param {*} e 
 */
function onFileSelect(e) {
    let files = e.target.files; 

    if (files.length > 0) {
        let reader = new FileReader();

        reader.onload = function(e) {
            let level = JSON.parse(e.target.result);
            run(level);
        };
        
        reader.readAsText(files[0]);
    }
}

function main() {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        document.getElementById('files').addEventListener('change', onFileSelect, false);
    } else {
        alert('The File APIs are not fully supported in this browser.');
        return;
    }

}
