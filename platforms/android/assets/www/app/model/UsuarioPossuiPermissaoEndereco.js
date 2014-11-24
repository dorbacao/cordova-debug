Ext.define('WmsMobile.model.UsuarioPossuiPermissaoEndereco',{
	extend:'Ext.data.Model',

	config:{

		fields:[
			{name: 'SatisfiedBy',     type: 'bool'},
		],

		proxy: {
			type: 'rest',
			url: WmsMobile.Config.getApiUrl('itensdocumento/usuarioPossuiPermissaoEndereco'),
			reader: {
			    type: 'json',
			    root: 'data'
				},
      },
		}
});
