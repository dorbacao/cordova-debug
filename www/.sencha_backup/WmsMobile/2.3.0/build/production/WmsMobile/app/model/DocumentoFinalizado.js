Ext.define('WmsMobile.model.DocumentoFinalizado',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     			     	type: 'string'},
			{name: 'IdDocumento',   	     	type: 'string'},
			{name: 'Data',        		     	type: 'DATE'},
			{name: 'FinalizarComDivergencias',  type: 'BOOL'},

			
		],

		validations: [
		   { type: 'presence', field: 'IdDocumento' },
		],


		proxy: {
			type: 'rest',
			url: Config.getApiUrl('documentos/finalizados'),
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