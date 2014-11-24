Ext.define('WmsMobile.model.LancamentoInventario',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     			type: 'string'},
			{name: 'IdPlanejamento',  	type: 'string'},
			{name: 'CodigoEndereco',    type: 'string'},
			{name: 'IdEndereco',        type: 'string'},
			{name: 'Quantidade',     	type: 'integer'},
			{name: 'DataVencimento',    type: 'DATE', dateFormat:'d-m-Y'},
			{name: 'NomeProduto',       type: 'string'},
			{name: 'CodigoProduto',     type: 'string'},
			{name: 'IdProduto',     	type: 'string'},
			{name: 'IdAvaria',         	type: 'string'},

		],

		validations: [
		   { type: 'presence', field: 'IdPlanejamento', message:'O Planejamento precisa ser preenchido.'},
		   { type: 'presence', field: 'CodigoEndereco', 		message:'O Endereço precisa ser preenchido'},
		   //{ type: 'presence', field: 'CodigoProduto', 		message:'O Produto precisa ser preenchido'},
		   { type: 'presence', field: 'Quantidade', 		message:'A Quantidade precisa ser preenchida'},
		   { type: 'presence', field: 'DataVencimento', 	message:'A Data de Vencimento deve estar no formato' },
		],

		proxy: {
			type: 'rest',
			url: 'http://localhost:9967/inventario/lancamentos/porproduto',
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