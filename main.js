/**
配置seajs 
*/
(function(){
	var m_domain = 'localhost/bApp';
	enterUrl = m_domain + '/static/student/src/main';
	seajs.config({
		base: m_domain + '/modules',
		alias:{
			 '$': 'crossjs/zepto/1.1.2/zepto.js',
		      'underscore': 'gallery/underscore/1.7.0/underscore-min.js',
		      'backbone': 'gallery/backbone/1.1.2/backbone-min.js',
		      'local-storage': 'gallery/backbone/plugins/backbone.localStorage/backbone.localStorage-min.js',
		      'iscroll': 'bustling/iscroll/5.1.1/js/iscroll-probe.js',
		      'plugin-text': 'seajs/seajs-text/1.0.2/seajs-text.js',
 			 'jquery':'jquery/jquery/jquery-1.11.1.min'
		},
		preload:['plugin-text','underscore','$']

	});
	seajs.use(enterUrl);
})();
