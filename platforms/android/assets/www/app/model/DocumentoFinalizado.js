Ext.define('WmsMobile.model.DocumentoFinalizado',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     			     	type: 'string'},
			{name: 'IdDocumento',   	     	type: 'string'},
			{name: 'Data',        		     	type: 'date', dateFormat:'d-m-Y'},
			{name: 'StatusDocumento',   	    type: 'integer'},
			{name: 'FinalizarComDivergencias',  type: 'bool'},
		],

		validations: [
		   { type: 'presence', field: 'IdDocumento' },
		   { type: 'format', field: 'StatusDocumento', matcher: /[0-6]/ }
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('documentos/finalizados'),
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