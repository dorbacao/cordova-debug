Ext.define('WmsMobile.model.Inventario',{
	extend:'Ext.data.Model',

	config:{

		idProperty:'Id',

		fields:[
			{name: 'Id',     			   	type: 'string'},
			{name: 'Descricao',     	   	type: 'string'},
			{name: 'Finalizado',     	   	type: 'BOOL'},

			
		],

	}
});