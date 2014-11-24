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

		],

		validations: [
		   { type: 'presence', field: 'IdAbastecimento',  message:'O IdAbastecimento precisa ser preenchido.'},
		   { type: 'presence', field: 'CodigoOrigem', message:'O IdEnderecoOrigem precisa ser preenchido.'},
		   { type: 'presence', field: 'Quantidade',        message:'A Quantidade precisa ser preenchido.'},
		],

		proxy: {
			type: 'rest',
			url: 'http://localhost:9967/abastecimento/lancamento',
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