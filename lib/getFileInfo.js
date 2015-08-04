module.exports = function(file) {

    var fileInfo = {};

    fileInfo.ext = file.split('.');
    fileInfo.ext = fileInfo.ext[fileInfo.ext.length - 1];

    fileInfo.name = file.split('/');
    fileInfo.name = fileInfo.name[fileInfo.name.length - 1];
    fileInfo.name = fileInfo.name.slice(0, -1-fileInfo.ext.length);

    return fileInfo;

}