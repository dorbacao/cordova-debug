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
		   { type: 'presence', field: 'IdItemDocumento', message:'O campo IdItemDocumento, message é obrigatório' },
		   { type: 'presence', field: 'Quantidade', 	message:'O campo quantidade é obrigatório'},
		   { type: 'format',   field: 'Quantidade', 	message:'O campo Quantidade deve estar entre 0-999', matcher: /^\d{1,3}$/ },
		   { type: 'presence', field: 'CodigoEndereco', message:'O campo Localização é obrigatório' },
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('lancamentos'),
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