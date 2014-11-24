Ext.define('WmsMobile.model.Lancamento',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     			     type: 'string'},
			{name: 'IdDocumento',   	     type: 'string'},
			{name: 'IdItemDocumento',        type: 'string'},
			{name: 'Descricao',     	     type: 'string'},
			{name: 'Quantidade',     	     type: 'integer'},
			{name: 'CodigoEndereco',         type: 'string'},
		],

		validations: [
		   { type: 'presence', field: 'IdItemDocumento' },
		   { type: 'presence', field: 'Quantidade', 	  message:'O campo quantidade é obrigatório'},
		   { type: 'presence', field: 'CodigoEndereco',   message:'O campo Localização é obrigatório' },
		   { type: 'length',   field: 'Quantidade',       message:'O campo Quantidade deve estar entre 0-999', max: 3, min: 0 },
		],


		proxy: {
			type: 'rest',
			url: 'http://localhost:9967/lancamentos',
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