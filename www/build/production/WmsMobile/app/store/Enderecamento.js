var _id = 0;

Ext.define('WmsMobile.store.Enderecamento',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Documento'
	],

	config:{
		model:'WmsMobile.model.Documento',
		storeId:'enderecamentoStore',
		autoLoad:true,
		autoSync:true,
		data:[
				{id:_id++,descricao:'#AAAAA', qtdItens:3},
				{id:_id++,descricao:'#BBBBB', qtdItens:8},
				{id:_id++,descricao:'#CCCCC', qtdItens:1},
				{id:_id++,descricao:'#DDDDD', qtdItens:9},
				{id:_id++,descricao:'#EEEEE', qtdItens:0},
				{id:_id++,descricao:'#FFFFF', qtdItens:12},
				{id:_id++,descricao:'#GGGGG', qtdItens:89},
				{id:_id++,descricao:'#HHHHH', qtdItens:33},
	    ]
	}
});