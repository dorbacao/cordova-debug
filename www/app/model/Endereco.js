Ext.define('WmsMobile.model.Endereco',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',

		fields:[

			//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     					type: 'string'},
			{name: 'Codigo',        			type: 'string'},
			{name: 'Descricao',     			type: 'string'},
			{name: 'NomeArea',   				type: 'string'},
			{name: 'IdVolume',    				type: 'string'},
			{name: 'PrecisaSerInventariado',    type: 'bool'},
			{name: 'QuantidadeLancada',    		type: 'integer'},
			{name: 'Status',    				type: 'integer'},
		],

		validations: [
		   {type: 'format', field: 'Status', matcher: /[0-4]/}
		],

	}
});