Ext.define('WmsMobile.model.AbastecimentoFinalizado',{
	extend:'WmsMobile.model.ModelBase',

	requires:[
		'WmsMobile.Config'
	],

	config:{
		idProperty:'Id',

		fields:[

			{name: 'Id',     				    type: 'string'},
			{name: 'IdUsuarioFinalizacao',     	type: 'string'},
			{name: 'DataFinalizacao',     		type: 'date', dateFormat:'d-m-Y'},
			{name: 'FinalizarComDivergencias',  type: 'bool'},
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('abastecimentosfinalizados'),
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