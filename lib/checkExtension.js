module.exports = function(fileInfo) {

    if(fileInfo.ext !== 'html') {
        throw new Error(path + ' file needs .html extension');
    }

}
