// Inserts html import into tag location
module.exports = function(file, tagLocation) {

    // Create stylesheet link
    var link = document.createElement('link');

    // Add attributes
    link.href = file;
    link.rel = 'import';

    // Inject script into to document
    var doc = tagLocation;
    doc.appendChild(link);

}