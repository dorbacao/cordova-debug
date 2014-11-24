Ext.define('WmsMobile.model.Carrinho',{
	extend:'Ext.data.Model',

	config:{
		idProperty:'Id',

		fields:['Id', 'Descricao', 'Codigo']
	}
});