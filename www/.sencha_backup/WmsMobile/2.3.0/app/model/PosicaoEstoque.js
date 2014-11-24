Ext.define('WmsMobile.model.PosicaoEstoque',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',

		fields:[

			//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id', 				type: 'string'},
			{name: 'IdVolume', 			type: 'string'},
			{name: 'IdEndereco',     	type: 'string'},
			{name: 'IdAvaria',     		type: 'string'},
			{name: 'DescricaoProduto',  type: 'string'},
			{name: 'UnidadeMedida',     type: 'string'},
			{name: 'CodigoEndereco',    type: 'string'},
			{name: 'CodigoVolume',		type: 'string'},
			{name: 'Lote',   		 	type: 'string'},
			{name: 'NumeroSerie',     	type: 'string'},
			{name: 'DataVencimento',    type: 'string'},
			{name: 'Quantidade',       	type: 'integer'},
		],

	}
});