Ext.define('WmsMobile.model.LancamentoInventario',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     				type: 'string'},
			{name: 'IdInventario',  		type: 'string'},
			{name: 'IdAvaria',         		type: 'string'},
			{name: 'DescricaoEndereco',    	type: 'string'},
			{name: 'DescricaoVolume',    	type: 'string'},
			{name: 'QuantidadeLancada',		type: 'integer'},
			{name: 'DataHora',    			type: 'string'},
			{name: 'Status',				type: 'integer'},

		],
	}
});