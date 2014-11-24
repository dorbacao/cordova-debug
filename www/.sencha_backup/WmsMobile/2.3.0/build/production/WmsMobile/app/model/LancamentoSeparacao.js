Ext.define('WmsMobile.model.LancamentoSeparacao',{
	extend:'Ext.data.Model',

	config:{
		idProperty:'Id',
		fields:[

		//Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

			{name: 'Id',     			     type: 'string'},
			{name: 'IdDocumento',   	     type: 'string'},
			{name: 'IdItemDocumento',        type: 'string'},
			{name: 'Descricao',     	     type: 'string'},
			{name: 'Quantidade',     	     type: 'integer'},
			{name: 'Carrinho',     	     	 type: 'string'},
			// {name: 'Avaria',         	     type: 'boolean'},
		],

		validations: [
		   { type: 'presence', field: 'IdItemDocumento', message:'O IdItemDocumento precisa ser preenchido.'},
		   { type: 'presence', field: 'Quantidade', message:'O campo quantidade é obrigatório'},
		   { type: 'presence', field: 'Carrinho', message:'O campo carrinho é obrigatório'},
		   { type: 'length',   field: 'Quantidade', message:'O campo Quantidade deve estar entre 0-999', max: 3, min: 0 },
		],

		proxy: {
			type: 'rest',
			url: 'http://localhost:9967/separacao/lancamento',
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