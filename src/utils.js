exports.data = {
	title: "Test"
}
exports.sum = function(a, b) {
  return a + b;
}
exports.log = function(msg) {
	if(msg && window.console) {
		console.log(msg);
	}
}
exports.forEach = function(array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
}
exports.extend = function(a, b){
	for(var key in b)
	if(b.hasOwnProperty(key))
	a[key] = b[key];
	return a;
}
exports.getUrlParameter = function(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
exports.properCase = function(str) {
  return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
}