module.exports = function(fileInfo) {

    if(fileInfo.ext !== 'html') {
        throw new Error(fileInfo.name + '.' + fileInfo.ext + ' file needs .html extension');
    }

}
