describe("O Model", function(){

	describe("LancamentoInventario", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.LancamentoInventario');
			model.set('Id', '1');
			model.set('IdInventario', '5');
			model.set('IdEndereco', '1');
			model.set('IdVolume', '1');
			model.set('IdAvaria', '1');
			model.set('CodigoAvaria', '1');
			model.set('CodigoEndereco', '1');
			model.set('CodigoVolume', '1');
			model.set('QuantidadeLancada', 1);
			model.set('DataVencimento', new Date(2014, 04, 11));

			expect(model.get('Id')).toEqual('1');
			expect(model.get('IdInventario')).toEqual('5');
			expect(model.get('IdEndereco')).toEqual('1');
			expect(model.get('IdVolume')).toEqual('1');
			expect(model.get('IdAvaria')).toEqual('1');
			expect(model.get('CodigoAvaria')).toEqual('1');
			expect(model.get('CodigoEndereco')).toEqual('1');
			expect(model.get('CodigoVolume')).toEqual('1');
			expect(model.get('QuantidadeLancada')).toEqual(1);
			expect(model.get('DataVencimento')).toEqual(new Date(2014, 04, 11));

		});

		it("deve possuir QuantidadeLancada definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoInventario');
			model.set('Id', '1');
			model.set('IdInventario', '5');
			model.set('IdEndereco', '1');
			model.set('IdVolume', '1');
			model.set('IdAvaria', '1');
			model.set('CodigoAvaria', '1');
			model.set('CodigoEndereco', '1');
			model.set('CodigoVolume', '1');
			model.set('DataVencimento', new Date(2014, 04, 11));

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir CodigoEndereco definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoInventario');
			model.set('Id', '1');
			model.set('IdInventario', '5');
			model.set('IdEndereco', '1');
			model.set('IdVolume', '1');
			model.set('IdAvaria', '1');
			model.set('CodigoAvaria', '1');
			model.set('CodigoVolume', '1');
			model.set('QuantidadeLancada', '1');
			model.set('DataVencimento', new Date(2014, 04, 11));

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir IdInventario definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoInventario');
			model.set('Id', '1');
			model.set('IdEndereco', '1');
			model.set('IdVolume', '1');
			model.set('IdAvaria', '1');
			model.set('CodigoAvaria', '1');
			model.set('CodigoEndereco', '1');
			model.set('CodigoVolume', '1');
			model.set('QuantidadeLancada', '1');
			model.set('DataVencimento', new Date(2014, 04, 11));

			expect(model.isValid()).toEqual(false);

		});

	});

});