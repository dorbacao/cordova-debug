Ext.define('WmsMobile.model.LancamentoRecebimento',{
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
			{name: 'Vencimento',         	 type: 'DATE', dateFormat:'d-m-Y'},
			{name: 'IdAvaria',         	     type: 'string'},
		],

		validations: [
		   { type: 'presence', field: 'IdItemDocumento', message:'O IdItemDocumento precisa ser preenchido.'},
		   { type: 'presence', field: 'Quantidade', message:'O campo quantidade é obrigatório'},
		   { type: 'format',   field: 'Quantidade', message:'O campo Quantidade deve estar entre 0-999', matcher: /^\d{1,3}$/ },
		   //{ type: 'presence', field: 'Vencimento', message:'O campo vencimento é obrigatório' },
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('recebimento/lancamento'),
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