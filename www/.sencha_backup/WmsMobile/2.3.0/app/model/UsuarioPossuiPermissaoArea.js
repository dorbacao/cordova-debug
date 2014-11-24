Ext.define('WmsMobile.model.UsuarioPossuiPermissaoArea',{
	extend:'Ext.data.Model',

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
      },
		}
});
