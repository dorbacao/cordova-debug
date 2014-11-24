Ext.define('WmsMobile.model.ItemDocumento',{
	extend:'Ext.data.Model',


	config:{
		idProperty:'Id',

		fields:[
			{name: 'Id',     			   type: 'string'},
			{name: 'IdDocumento',     	   type: 'string'},
			{name: 'Codigo',     		   type: 'string'},
			{name: 'Descricao',     	   type: 'string'},
			{name: 'UnidadeMedida',        type: 'string'},
			{name: 'Quantidade',     	   type: 'integer'},
			{name: 'QuantidadeRecebida', type: 'integer' },
            {name: 'Vencimento', type: 'string' },
			{name: 'QuantidadeEnderecada', type: 'integer'},
			{name: 'StatusEnderecamento',  type: 'integer'},

		],

		proxy: {
			type: 'rest',
			url: 'http://localhost:9967/itensdocumento',
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