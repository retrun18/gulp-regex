'use strict';
const PluginError = require('replace-ext'),
		through = require('through2');
module.exports=(expression)=>
{
	if(!expression){
		throw new PluginError('gulp-regular',"'expression' required");
	}
	let regex=new RegExp(expression);
	return through.obj((file,enc,cb)=>{
		regex.test(file.pathname)
	});
}