describe("O Model", function(){

	describe("LancamentoSeparacao", function(){

		it("deve respeitar seus tipos definidos", function(){

			//os atributos podem ser inseridos em forma de strig
			//entretanto será parseado para o tipo definido no model
			var model = Ext.create('WmsMobile.model.LancamentoSeparacao');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('Quantidade', 1);
			model.set('CodigoEndereco', '1');
			model.set('IdCarrinho', '1');
			model.set('IdVolume', '1');

			expect(model.get('Id')).toEqual('1');
			expect(model.get('IdDocumento')).toEqual('5');
			expect(model.get('IdItemDocumento')).toEqual('1');
			expect(model.get('Descricao')).toEqual('itemDocumento');
			expect(model.get('Quantidade')).toEqual(1);
			expect(model.get('CodigoEndereco')).toEqual('1');
			expect(model.get('IdCarrinho')).toEqual('1');
			expect(model.get('IdVolume')).toEqual('1');

		});

		it("deve possuir IdItemDocumento definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoSeparacao');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('Descricao', 'itemDocumento');
			model.set('Quantidade', 1);
			model.set('CodigoEndereco', '1');
			model.set('IdCarrinho', '1');
			model.set('IdVolume', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Quantidade definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoSeparacao');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('CodigoEndereco', '1');
			model.set('IdCarrinho', '1');
			model.set('IdVolume', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Quantidade entre 0-999", function(){

			var model = Ext.create('WmsMobile.model.LancamentoSeparacao');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('Quantidade', 1000);
			model.set('CodigoEndereco', '1');
			model.set('IdCarrinho', '1');
			model.set('IdVolume', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir IdCarrinho definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoSeparacao');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('Quantidade', 1);
			model.set('CodigoEndereco', '1');
			model.set('IdVolume', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir IdVolume definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoSeparacao');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('Quantidade', 1);
			model.set('IdCarrinho', '1');
			model.set('CodigoEndereco', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir CodigoEndereco definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoSeparacao');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('Quantidade', 1);
			model.set('IdCarrinho', '1');
			model.set('IdVolume', '1');

			expect(model.isValid()).toEqual(false);

		});

	});

});