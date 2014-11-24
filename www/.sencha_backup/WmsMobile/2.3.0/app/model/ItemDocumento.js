Ext.define('WmsMobile.model.ItemDocumento',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',

		fields:[
			{name: 'Id',     			   	type: 'string'},
			{name: 'IdDocumento',     	   	type: 'string'},
			{name: 'Codigo',     		   	type: 'string'},
			{name: 'CodigoEndereco',     	type: 'string'},
			{name: 'Descricao',     	   	type: 'string'},
			{name: 'UnidadeMedida',        	type: 'string'},
			{name: 'Quantidade',			type: 'integer'},
			{name: 'QuantidadeLancada',		type: 'integer'},
            {name: 'Vencimento', 			type: 'data', dateFormat:'d-m-Y'},
			{name: 'IdVolume',				type: 'string' },
			{name: 'IdEndereco',			type: 'string' },
			{name: 'Avaria',				type: 'boolean' },
			{name: 'NomeAvaria',			type: 'string' },
			{name: 'Status',  				type: 'integer'},
		],

		validations: [
		   {type: 'format', field: 'Status', matcher: /[0-4]/}
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('itensdocumento'),
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