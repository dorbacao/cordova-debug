var _id = 0;

Ext.define('WmsMobile.store.ItemInventario',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.ItemInventario'
	],

	config:{
		model:'WmsMobile.model.ItemInventario',
		storeId:'itemInventarioStore',
		autoLoad:true,
		autoSync:true,
		data:[
				{id:_id++,descricao:'Peça 10k Alcatra'},
				{id:_id++,descricao:'5kg Contra Filé'},
				{id:_id++,descricao:'2Kg de Patinho'},
				{id:_id++,descricao:'3Kg de Lagarto'},
				{id:_id++,descricao:'4Kg de Chã'},
				{id:_id++,descricao:'935g de Picanha'},
				{id:_id++,descricao:'5Kg Alcatra + Maminha'},
	    ]
	}
});