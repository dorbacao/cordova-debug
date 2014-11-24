Ext.define('WmsMobile.model.Documento',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',

		fields:[

			//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     			type: 'string'},
			{name: 'QtdItens',   		type: 'integer'},
			{name: 'Descricao',     	type: 'string'},
			{name: 'Status',        	type: 'integer'},
			{name: 'Codigo',        	type: 'string'},
			{name: 'Carrinho',      	type: 'string'},
			{name: 'DataCricao', 		type: 'DataCricao' },
            {name: 'IdUsuarioAtendente',type: 'string' },
		],

		validations: [
		   { type: 'format', field: 'Status', matcher: /[0-4]/ }
		],
	}
});