describe("O Model", function(){

	describe("LancamentoAbastecimento", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.LancamentoAbastecimento');
			model.set('Id', '1');
			model.set('IdAbastecimento', '5');
			model.set('CodigoOrigem', '1');
			model.set('Quantidade', 1);
			model.set('DataVencimento', '14-04-2014');
			model.set('NumeroSerie', '1');
			model.set('Lote', '1');

			expect(model.get('Id')).toEqual('1');
			expect(model.get('IdAbastecimento')).toEqual('5');
			expect(model.get('CodigoOrigem')).toEqual('1');
			expect(model.get('Quantidade')).toEqual(1);
			expect(model.get('DataVencimento')).toEqual('14-04-2014');
			expect(model.get('NumeroSerie')).toEqual('1');
			expect(model.get('Lote')).toEqual('1');

		});

		it("deve possuir IdAbastecimento definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoAbastecimento');
			model.set('Id', '1');
			model.set('CodigoOrigem', '1');
			model.set('Quantidade', 1);
			model.set('DataVencimento', '14-04-2014');
			model.set('NumeroSerie', '1');
			model.set('Lote', '1');

			expect(model.isValid()).toBeFalsy();

		});

		it("deve possuir CodigoOrigem origem definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoAbastecimento');
			model.set('Id', '1');
			model.set('IdAbastecimento', '5');
			model.set('Quantidade', 1);
			model.set('DataVencimento', '14-04-2014');
			model.set('NumeroSerie', '1');
			model.set('Lote', '1');

			expect(model.isValid()).toBeFalsy();

		});


		it("deve possuir Quantidade definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoAbastecimento');
			model.set('Id', '1');
			model.set('IdAbastecimento', '5');
			model.set('CodigoOrigem', '1');
			model.set('DataVencimento', '14-04-2014');
			model.set('NumeroSerie', '1');
			model.set('Lote', '1');

			expect(model.isValid()).toBeFalsy();

		});

		it("deve possuir Quantidade entre 0-999", function(){

			var model = Ext.create('WmsMobile.model.LancamentoAbastecimento');
			model.set('Id', '1');
			model.set('IdAbastecimento', '5');
			model.set('CodigoOrigem', '1');
			model.set('Quantidade', 1000);
			model.set('DataVencimento', '14-04-2014');
			model.set('NumeroSerie', '1');
			model.set('Lote', '1');

			expect(model.isValid()).toBeFalsy();

		});

	});

});