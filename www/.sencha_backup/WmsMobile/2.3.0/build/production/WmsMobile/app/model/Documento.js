Ext.define('WmsMobile.model.Documento',{
	extend:'Ext.data.Model',

	config:{
		idProperty:'Id',

		fields:[

			//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     		type: 'string'},
			{name: 'QtdItens',   	type: 'integer'},
			{name: 'Descricao',     type: 'string'},
			{name: 'Status',        type: 'integer'},
			{name: 'Codigo',        type: 'integer'},
			{name: 'Carrinho',      type: 'string'},
		],

	}
});