describe("O Model", function(){

	describe("LancamentoExpedicao", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.LancamentoExpedicao');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('Quantidade', 1);

			expect(model.get('Id')).toEqual('1');
			expect(model.get('IdDocumento')).toEqual('5');
			expect(model.get('IdItemDocumento')).toEqual('1');
			expect(model.get('Descricao')).toEqual('itemDocumento');
			expect(model.get('Quantidade')).toEqual(1);

		});

		it("deve possuir IdItemDocumento definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoExpedicao');
			model.set('Id', '1');
			model.set('IdDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('CodigoEndereco', '1');
			model.set('Quantidade', 1);

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Quantidade definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoExpedicao');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('CodigoEndereco', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Quantidade entre 0-999", function(){

			var model = Ext.create('WmsMobile.model.LancamentoExpedicao');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'itemDocumento');
			model.set('CodigoEndereco', '1');
			model.set('Quantidade', 1000);

			expect(model.isValid()).toEqual(false);

		});

	});

});