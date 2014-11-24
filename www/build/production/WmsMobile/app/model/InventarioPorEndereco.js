Ext.define('WmsMobile.model.InventarioPorEndereco',{
	extend:'WmsMobile.model.ModelBase',

	config:{

		idProperty:'Id',

		fields:[

			//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING

			{name: 'Id',     			     type: 'string'},
			{name: 'IdEndereco',        	 type: 'string'},
			{name: 'Descricao',        	 	 type: 'string'},
			{name: 'CodigoEndereco',         type: 'string'},
			{name: 'QuantidadeLancada',      type: 'integer'},
			{name: 'Status',     	 		 type: 'integer'},
		],

		validations: [
		   {type: 'format', field: 'Status', matcher: /[0-4]/}
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('inventarios/porendereco'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },
	}
});