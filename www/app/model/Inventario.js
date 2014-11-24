Ext.define('WmsMobile.model.Inventario',{
	extend:'WmsMobile.model.ModelBase',

	config:{

		idProperty:'Id',

		fields:[

			{name: 'Id',     		type: 'string'},
			{name: 'Descricao',     type: 'string'},
			{name: 'Status',     	type: 'integer'},
			{name: 'Finalizado',    type: 'bool'},
		],

		validations: [
		   {type: 'format', field: 'Status', matcher: /[0-4]/}
		],
	}
});