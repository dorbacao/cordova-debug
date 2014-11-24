Ext.define('WmsMobile.model.LancamentoSeparacao',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     			    type: 'string'},
			{name: 'IdDocumento',   	    type: 'string'},
			{name: 'IdItemDocumento',       type: 'string'},
			{name: 'Descricao',     	    type: 'string'},
			{name: 'Quantidade',     	    type: 'integer'},
			{name: 'CodigoEndereco',        type: 'string'},
			{name: 'IdCarrinho',     	    type: 'string'},
			{name: 'IdVolume', 				type: 'string'},
		],

		validations: [
		   { type: 'presence', field: 'IdItemDocumento', message:'O IdItemDocumento precisa ser preenchido.'},
		   { type: 'presence', field: 'Quantidade', message:'O campo quantidade é obrigatório'},
		   { type: 'format',   field: 'Quantidade', message:'O campo Quantidade deve estar entre 0-999', matcher: /^\d{1,3}$/ },
		   { type: 'presence', field: 'IdCarrinho', message:'O campo carrinho é obrigatório'},
		   { type: 'presence', field: 'IdVolume', message:'O campo IdVolume é obrigatório'},
		   { type: 'presence', field: 'CodigoEndereco', message:'O campo CodigoEndereco é obrigatório'},
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('separacao/lancamento'),
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