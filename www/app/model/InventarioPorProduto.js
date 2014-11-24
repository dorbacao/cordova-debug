Ext.define('WmsMobile.model.InventarioPorProduto',{
	extend:'WmsMobile.model.ModelBase',

	config:{

		idProperty:'Id',

		fields:[

			//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id'					, type: 'string'},
			{name: 'IdVolume'			, type: 'string'},
			{name: 'CodigoVolume'		, type: 'string'},
			{name: 'Descricao'			, type: 'string'},
			{name: 'UnidadeMedida'		, type: 'string'},
			{name: 'Status'				, type: 'integer'},
			{name: 'QuantidadeLancada'	, type: 'integer'},
		],

		validations: [
		   {type: 'format', field: 'Status', matcher: /[0-4]/}
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('inventarios/porproduto'),
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