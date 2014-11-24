Ext.define('WmsMobile.model.Planejamento',{
	extend:'Ext.data.Model',

	config:{

		idProperty:'Id',

		fields:[
			{name: 'Id',     		type: 'string'},
			{name: 'Descricao',     type: 'string'},
			{name: 'Finalizado',    type: 'bool'},
		],
	}
});