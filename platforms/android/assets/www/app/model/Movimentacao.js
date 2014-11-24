Ext.define('WmsMobile.model.Movimentacao',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     				type: 'string'},
			{name: 'IdUnidadeMedida',		type: 'string'},
			{name: 'CodigoEnderecoOrigem',  type: 'string'},
			{name: 'CodigoEnderecoDestino', type: 'string'},
			{name: 'CodigoProduto',     	type: 'string'},
			{name: 'DataHora',    			type: 'DATE', dateFormat:'d-m-Y'},
			{name: 'NomeProduto',    		type: 'string'},
			{name: 'Vencimento',    		type: 'DATE', dateFormat:'d-m-Y'},
			{name: 'Lote',    				type: 'string'},
			{name: 'Serie',    				type: 'string'},
			{name: 'Quantidade',  			type: 'integer'},
			{name: 'Status',  				type: 'integer'},
			{name: 'Movimentado',  			type: 'boolean'},
		],

		validations: [
		   { type: 'presence', field: 'CodigoProduto', message:'O campo Produto é obrigatório.'},
		   { type: 'presence', field: 'CodigoEnderecoOrigem', message:'O campo Origem é obrigatório.'},
		   { type: 'presence', field: 'CodigoEnderecoDestino', message:'O campo Destino é obrigatório'},
		   { type: 'presence', field: 'Quantidade', message:'O campo Quantidade é obrigatório'},
		   { type: 'format',   field: 'Quantidade', message:'O campo Quantidade deve estar entre 0-999', matcher: /^\d{1,3}$/ },
		   { type: 'format', field: 'Status', matcher: /[0-1]/ }
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('movimentacoes'),
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