describe("O Model", function(){

	describe("Movimentacao", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.Movimentacao');
			model.set('Id', '1');
			model.set('IdVolume', '5');
			model.set('CodigoEnderecoOrigem', '1');
			model.set('CodigoEnderecoDestino', '1');
			model.set('CodigoProduto', '1');
			model.set('DataHora', new Date(2014, 04, 11));
			model.set('Descricao', 'movimentacao');
			model.set('Quantidade', 10);
			model.set('Status', 0);
			model.set('Movimentado', false);

			expect(model.get('Id')).toEqual('1');
			expect(model.get('IdVolume')).toEqual('5');
			expect(model.get('CodigoEnderecoOrigem')).toEqual('1');
			expect(model.get('CodigoEnderecoDestino')).toEqual('1');
			expect(model.get('CodigoProduto')).toEqual('1');
			expect(model.get('DataHora')).toEqual(new Date(2014, 04, 11));
			expect(model.get('Descricao')).toEqual('movimentacao');
			expect(model.get('Quantidade')).toEqual(10);
			expect(model.get('Status')).toEqual(0);
			expect(model.get('Movimentado')).toEqual(false);

		});

		it("deve possuir CodigoProduto definida", function(){

			var model = Ext.create('WmsMobile.model.Movimentacao');
			model.set('Id', '1');
			model.set('IdVolume', '5');
			model.set('CodigoEnderecoOrigem', '1');
			model.set('CodigoEnderecoDestino', '1');
			model.set('DataHora', new Date(2014, 04, 11));
			model.set('Descricao', 'movimentacao');
			model.set('Quantidade', 10);
			model.set('Status', 0);
			model.set('Movimentado', false);

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir CodigoEnderecoOrigem definida", function(){

			var model = Ext.create('WmsMobile.model.Movimentacao');
			model.set('Id', '1');
			model.set('IdVolume', '5');
			model.set('CodigoEnderecoDestino', '1');
			model.set('CodigoProduto', '1');
			model.set('DataHora', new Date(2014, 04, 11));
			model.set('Descricao', 'movimentacao');
			model.set('Quantidade', 10);
			model.set('Status', 0);
			model.set('Movimentado', false);

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir CodigoEnderecoDestino definida", function(){

			var model = Ext.create('WmsMobile.model.Movimentacao');
			model.set('Id', '1');
			model.set('IdVolume', '5');
			model.set('CodigoEnderecoOrigem', '1');
			model.set('CodigoProduto', '1');
			model.set('DataHora', new Date(2014, 04, 11));
			model.set('Descricao', 'movimentacao');
			model.set('Quantidade', 10);
			model.set('Status', 0);
			model.set('Movimentado', false);

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Quantidade definida", function(){

			var model = Ext.create('WmsMobile.model.Movimentacao');
			model.set('Id', '1');
			model.set('IdVolume', '5');
			model.set('CodigoEnderecoOrigem', '1');
			model.set('CodigoEnderecoDestino', '1');
			model.set('CodigoProduto', '1');
			model.set('DataHora', new Date(2014, 04, 11));
			model.set('Descricao', 'movimentacao');
			model.set('Status', 0);
			model.set('Movimentado', false);

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Quantidade definida", function(){

			var model = Ext.create('WmsMobile.model.Movimentacao');
			model.set('Id', '1');
			model.set('IdVolume', '5');
			model.set('CodigoEnderecoOrigem', '1');
			model.set('CodigoEnderecoDestino', '1');
			model.set('CodigoProduto', '1');
			model.set('DataHora', new Date(2014, 04, 11));
			model.set('Descricao', 'movimentacao');
			model.set('Quantidade', 1000);
			model.set('Status', 0);
			model.set('Movimentado', false);

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir o status dentro de um range", function(){
			//Status devem estar entre 0-1 (inclusive)
			var model = Ext.create('WmsMobile.model.Movimentacao');
			model.set('CodigoProduto', '1');
			model.set('CodigoEnderecoOrigem', '1');
			model.set('CodigoEnderecoDestino', '1');
			model.set('Quantidade', 10);

			model.set('Status', 0);
			expect(model.isValid()).toEqual(true);

			model.set('Status', 1);
			expect(model.isValid()).toEqual(true);

			model.set('Status', 2);
			expect(model.isValid()).toEqual(false);

		});

	});

});