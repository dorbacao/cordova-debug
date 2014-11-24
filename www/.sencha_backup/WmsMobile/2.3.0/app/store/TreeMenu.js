Ext.define('WmsMobile.store.TreeMenu',{
	extend:'Ext.data.TreeStore',
	requires:[
		'WmsMobile.model.Menu'
	],

	config:{
		model:'WmsMobile.model.ListItem',
		storeId:'menuHomeStore',
		autoLoad:true,
		defaultRootProperty:'items',
		proxy: {
            type: 'rest',
            url: WmsMobile.Config.getApiUrl('itensmenu'),
            reader: {
                type: 'json',
                root: 'items'
            },
        },
	},
});
