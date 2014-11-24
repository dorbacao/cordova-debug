Ext.define('WmsMobile.model.Movimentacao',{
	extend:'Ext.data.Model',

	config:{
		fields: ['item_id', 'produto', 'endereco', 'datahora', 'hoje', 'qtd']
	}
});