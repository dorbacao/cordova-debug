Ext.define('WmsMobile.model.StackRouter',{
	singleton:true,

	_stack:[],

	push:function(object){
		_stack.push(object);
	},

	push:function(path, params)
	{
		this.push({path:path, params:params});
	},

	pull:function(){
		var index = _stack.length-1;
		var item = _stack[index];

		_stack.remove(index);

		return item;
	},

	length:function(){
		return _stack.length;
	}
});