Ext.define('WmsMobile.model.UsuarioPossuiPermissaoArea',{
	extend:'WmsMobile.model.ModelBase',

	config:{

		fields:[
			{name: 'SatisfiedBy',     type: 'bool'},
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('itensdocumento/usuarioPossuiPermissaoArea'),
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