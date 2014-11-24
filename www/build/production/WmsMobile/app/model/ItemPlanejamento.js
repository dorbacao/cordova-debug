Ext.define('WmsMobile.model.ItemPlanejamento',{
	extend:'Ext.data.Model',

	config:{

		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     			     type: 'string'},
			{name: 'IdPlanejamento',   	     type: 'string'},
			{name: 'IdProduto',        		 type: 'string'},
			{name: 'Quantidade',     	     type: 'integer'},
			{name: 'CodigoProduto',     	 type: 'integer'},
			{name: 'QuantidadeLancada',      type: 'integer'},
			{name: 'Descricao',     	     type: 'string'},
			{name: 'Status',	     	     type: 'integer'},
		],

		proxy: {
			type: 'rest',
			url: Config.getApiUrl('itensplanejamentos'),
			reader: {
			    type: 'json',
			    root: 'data'
			}
        },

	}
});