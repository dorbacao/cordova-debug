Ext.define('WmsMobile.model.Abastecimento',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',

		fields:[

			//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     				 	type: 'string'},
			{name: 'CodigoPiking',   		 	type: 'string'},
			{name: 'IdVolume',    				type: 'string'},
			{name: 'Descricao',     		 	type: 'string'},
			{name: 'UnidadeMedida', 			type: 'string'},
			{name: 'CodigoVolume',				type: 'string'},
			{name: 'QuantidadePrevista',     	type: 'integer'},
			{name: 'QuantidadeLancada', 	 	type: 'integer'},
			{name: 'Status',        		 	type: 'integer'},
			{name: 'Finalizado', 			 	type: 'bool'},
		],

		validations: [
		   { type: 'format', field: 'Status', matcher: /[0-2]/ }
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('abastecimentos'),
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