Ext.define('WmsMobile.model.Movimentacao',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     				type: 'string'},
			{name: 'IdProduto',     	    type: 'string'},
			{name: 'CodigoEnderecoOrigem',  type: 'integer'},
			{name: 'CodigoEnderecoDestino', type: 'integer'},
			{name: 'CodigoProduto',     	type: 'integer'},
			{name: 'DataHora',    			type: 'string'},
			{name: 'Descricao',    			type: 'string'},
			{name: 'Codigo',    			type: 'integer'},
			{name: 'Hoje',        			type: 'boolean'},
			{name: 'Quantidade',  			type: 'integer'},
			{name: 'Status',  				type: 'integer'},
		],

		validations: [
		   { type: 'presence', field: 'CodigoProduto', message:'O campo Produto é obrigatório.'},
		   { type: 'presence', field: 'CodigoEnderecoOrigem', message:'O campo Origem é obrigatório.'},
		   { type: 'presence', field: 'CodigoEnderecoDestino', message:'O campo Destino é obrigatório'},
		   { type: 'presence', field: 'Quantidade', message:'O campo Quantidade é obrigatório'},
		   { type: 'length',   field: 'Quantidade', message:'O campo Quantidade deve estar entre 0-999', max: 3, min: 0 },
		],

		proxy: {
			type: 'rest',
			url: 'http://localhost:9967/enderecos/movimentar',
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