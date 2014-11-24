Ext.define('WmsMobile.model.Produto',{
	extend:'Ext.data.Model',

	config:{
		idProperty:'Id',

		fields:[
			{name: 'Id',     			   	type: 'string'},
			{name: 'Codigo',     		   	type: 'string'},
			{name: 'Descricao',     	   	type: 'string'},
			{name: 'UnidadeMedida',        	type: 'string'},
			{name: 'TotalEstoque',			type: 'integer'},
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('produtos'),
			reader: {
			    type: 'json',
			    root: 'data'
			},
			writer: {
                type: 'json'
            }
        },
	}
});