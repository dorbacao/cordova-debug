Ext.define('WmsMobile.model.LancamentoAbastecimento',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     			     type: 'string'},
			{name: 'IdAbastecimento',   	 type: 'string'},
			{name: 'CodigoOrigem',   	 	 type: 'string'},
			{name: 'Quantidade',     	     type: 'integer'},
			{name: 'DataVencimento',   	 	 type: 'string'},
			{name: 'NumeroSerie',   	 	 type: 'string'},
			{name: 'Lote',   	 	 		 type: 'string'},
		],

		validations: [
		   { type: 'presence', field: 'IdAbastecimento',   message:'O IdAbastecimento precisa ser preenchido.'},
		   { type: 'presence', field: 'CodigoOrigem', 	   message:'O IdEnderecoOrigem precisa ser preenchido.'},
		   { type: 'presence', field: 'Quantidade',        message:'A Quantidade precisa ser preenchido.'},
		   { type: 'format',   field: 'Quantidade', 	   message:'O campo Quantidade deve estar entre 0-999', matcher: /^\d{1,3}$/ },
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('abastecimento/lancamento') ,
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