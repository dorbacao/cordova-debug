describe("O Model", function(){

	describe("LancamentoInventarioPorProduto", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.LancamentoInventarioPorProduto');
			model.set('Id', '1');
			model.set('IdVolume', '5');
			model.set('IdAvaria', '1');
			model.set('CodigoEndereco', '1');
			model.set('QuantidadeLancada', 7);
			model.set('Lote', '1');
			model.set('Serie', '1');
			model.set('DataVencimento', new Date(2014, 04, 11));
			model.set('TipoDeLancamento', 0);

			expect(model.get('Id')).toEqual('1');
			expect(model.get('IdVolume')).toEqual('5');
			expect(model.get('IdAvaria')).toEqual('1');
			expect(model.get('CodigoEndereco')).toEqual('1');
			expect(model.get('QuantidadeLancada')).toEqual(7);
			expect(model.get('Lote')).toEqual('1');
			expect(model.get('Serie')).toEqual('1');
			expect(model.get('DataVencimento')).toEqual(new Date(2014, 04, 11));
			expect(model.get('TipoDeLancamento')).toEqual(0);

		});

		it("deve possuir IdVolume definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoInventarioPorProduto');
			model.set('Id', '1');
			model.set('IdEndereco', '5');
			model.set('IdAvaria', '1');
			model.set('QuantidadeLancada', 7);
			model.set('Lote', '1');
			model.set('Serie', '1');
			model.set('DataVencimento', new Date(2014, 04, 11));
			model.set('TipoDeLancamento', 0);

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir CodigoEndereco definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoInventarioPorProduto');
			model.set('Id', '1');
			model.set('IdEndereco', '5');
			model.set('IdVolume', '5');
			model.set('IdAvaria', '1');
			model.set('QuantidadeLancada', 7);
			model.set('Lote', '1');
			model.set('Serie', '1');
			model.set('DataVencimento', new Date(2014, 04, 11));
			model.set('TipoDeLancamento', 0);

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir QuantidadeLancada definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoInventarioPorProduto');
			model.set('Id', '1');
			model.set('IdVolume', '5');
			model.set('IdAvaria', '1');
			model.set('CodigoEndereco', '1');
			model.set('Lote', '1');
			model.set('Serie', '1');
			model.set('DataVencimento', new Date(2014, 04, 11));
			model.set('TipoDeLancamento', 0);

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir TipoDeLancamento definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoInventarioPorProduto');
			model.set('Id', '1');
			model.set('IdVolume', '5');
			model.set('IdAvaria', '1');
			model.set('CodigoEndereco', '1');
			model.set('QuantidadeLancada', 7);
			model.set('Lote', '1');
			model.set('Serie', '1');
			model.set('DataVencimento', new Date(2014, 04, 11));

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir o TipoDeLancamento dentro de um range", function(){
			//TipoDeLancamento devem estar entre 0-1 (inclusive)
			var model = Ext.create('WmsMobile.model.LancamentoInventarioPorProduto');

			model.set('CodigoEndereco', '1');
			model.set('QuantidadeLancada', 7);
			model.set('IdVolume', '5');

			model.set('TipoDeLancamento', 0);
			expect(model.isValid()).toEqual(true);

			model.set('TipoDeLancamento', 1);
			expect(model.isValid()).toEqual(true);

			model.set('TipoDeLancamento', 2);
			expect(model.isValid()).toEqual(false); //#Fail 3 não é um range válido
		});

	});

});