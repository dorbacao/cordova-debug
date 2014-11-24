Ext.define('WmsMobile.model.Avaria',{
	extend:'WmsMobile.model.ModelBase',

	config:{
		idProperty:'Id',

		fields:[

			//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     			type: 'string'},
			{name: 'Codigo',   			type: 'string'},
			{name: 'NomeAvaria',     	type: 'string'},

		],
	}
});