Ext.define('WmsMobile.model.Abastecimento',{
	extend:'Ext.data.Model',

	config:{
		idProperty:'Id',

		fields:[

			//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     				type: 'string'},
			{name: 'CodigoPiking',   		type: 'string'},
			{name: 'IdProduto',     		type: 'string'},
			{name: 'Descricao',     		type: 'string'},
			{name: 'Status',        		type: 'integer'},
			{name: 'Codigo',        		type: 'integer'},
			{name: 'QuantidadePrevista',    type: 'integer'},
			{name: 'QuantidadeLancada', 	type: 'integer'},
		],

	}
});