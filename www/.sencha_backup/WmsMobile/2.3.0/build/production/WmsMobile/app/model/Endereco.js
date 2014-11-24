Ext.define('WmsMobile.model.Endereco',{
	extend:'Ext.data.Model',

	config:{
		idProperty:'Id',
		fields:[
			'Id',
			'Codigo' ,
			'Descricao',
			'Produto',
			'Quantidade',
			'PrecisaSerInventariado',
			'QuantidadeLancada',
			'Status'
		]
	}
});