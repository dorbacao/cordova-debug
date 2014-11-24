var _id = 0;

Ext.define('WmsMobile.store.Movimentacao',{
	extend:'Ext.data.Store',
	requires:[
		'WmsMobile.model.Movimentacao'
	],

	config:{
		model:'WmsMobile.model.Movimentacao',
		storeId:'movimentacaoStore',
		autoLoad:true,
		autoSync:true,
        sorters: 'produto',
		data:[
				{item_id:_id++,produto:'Mouse',endereco:'#A1.B6.C3.D3',datahora:'20/12/2013', hoje:true,qtd:52},
				{item_id:_id++,produto:'Teclado',endereco:'#A1.B1.C8.D1',datahora:'20/12/2013', hoje:true,qtd:75},
				{item_id:_id++,produto:'Gabinete',endereco:'#A1.B2.C7.D2',datahora: '20/12/2013',hoje:true,qtd:15},
				{item_id:_id++,produto:'HD',endereco:'#A1.B3.C6.D3',datahora: '12/01/2014', hoje:false,qtd:45},
				{item_id:_id++,produto:'SSD',endereco:'#A1.B4.C5.D5',datahora: '25/02/2014',hoje:false,qtd:50},
	    ]
	}
});