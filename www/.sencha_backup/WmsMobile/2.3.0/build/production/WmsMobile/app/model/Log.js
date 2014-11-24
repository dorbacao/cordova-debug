Ext.define('WmsMobile.model.Log',{
	extend:'Ext.data.Model',

	config:{
		idProperty:'Id',
		fields:['mensagem', 'tipo', 'data']
	}
});