Ext.define('WmsMobile.model.Produto',{
	extend:'Ext.data.Model',


	config:{
		idProperty:'Id',

		fields:[
			{name: 'Id',     			   	type: 'string'},
			{name: 'IdCategoria',     		type: 'string'},
			{name: 'Codigo',     		   	type: 'string'},
			{name: 'Descricao',     	   	type: 'string'},
			{name: 'UnidadeMedida',        	type: 'string'},
			{name: 'BaixoEstoque',			type: 'bool'},
			{name: 'TotalEstoque',			type: 'integer'},

		],

		proxy: {
			type: 'rest',
			url: 'http://localhost:9967/produtos',
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