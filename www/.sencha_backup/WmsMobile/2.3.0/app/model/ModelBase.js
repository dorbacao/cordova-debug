Ext.define('WmsMobile.model.ModelBase',{
	extend:'Ext.data.Model',

    salvar:function(_success, _failure){
    	var self = this;
    	var _response;

    	self.getProxy().on("exception", function(proxy, response) {
			_response = response;

		}, this, {single:true});

		this.save({
			success:_success,
			failure:function(records, operation){
			    _failure(records, operation, _response);
			}
		});
    }
});