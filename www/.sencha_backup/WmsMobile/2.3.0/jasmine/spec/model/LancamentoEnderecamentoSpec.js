describe("O Model", function(){

	describe("LancamentoEnderecamento", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.LancamentoEnderecamento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'LancamentoEnderecamento');
			model.set('Quantidade', 1);
			model.set('Vencimento', new Date(2014, 04, 11));
			model.set('IdAvaria', '3');
			model.set('IdVolume', '1');
			model.set('CodigoEndereco', '1');

			expect(model.get('Id')).toEqual('1');
			expect(model.get('IdDocumento')).toEqual('5');
			expect(model.get('IdItemDocumento')).toEqual('1');
			expect(model.get('Descricao')).toEqual('LancamentoEnderecamento');
			expect(model.get('Quantidade')).toEqual(1);
			expect(model.get('Vencimento')).toEqual(new Date(2014, 04, 11));
			expect(model.get('IdAvaria')).toEqual('3');
			expect(model.get('IdVolume')).toEqual('1');
			expect(model.get('CodigoEndereco')).toEqual('1');

		});

		it("deve possuir IdItemDocumento definido", function(){

			var model = Ext.create('WmsMobile.model.LancamentoEnderecamento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('Descricao', 'itemDocumento');
			model.set('Quantidade', 1);
			model.set('Vencimento', new Date(2014, 04, 11));
			model.set('IdAvaria', '3');
			model.set('IdVolume', '1');
			model.set('CodigoEndereco', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir CodigoEndereco endereço definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoEnderecamento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('Quantidade', 1);
			model.set('Vencimento', new Date(2014, 04, 11));
			model.set('IdAvaria', '3');
			model.set('IdVolume', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Quantidade definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoEnderecamento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('Vencimento', new Date(2014, 04, 11));
			model.set('IdAvaria', '3');
			model.set('IdVolume', '1');
			model.set('CodigoEndereco', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Quantidade entre 0-999", function(){

			var model = Ext.create('WmsMobile.model.LancamentoEnderecamento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('Quantidade', 10000);
			model.set('Vencimento', new Date(2014, 04, 11));
			model.set('IdAvaria', '3');
			model.set('IdVolume', '1');
			model.set('CodigoEndereco', '1');

			expect(model.isValid()).toEqual(false);

		});

	});

});