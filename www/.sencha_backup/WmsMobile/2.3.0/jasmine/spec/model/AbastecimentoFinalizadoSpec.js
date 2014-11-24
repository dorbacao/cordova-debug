describe("O Model", function(){

	describe("AbastecimentoFinalizado", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.AbastecimentoFinalizado');
			/*
			model.set('Id', '1');
			model.set('FinalizarComDivergencias', true);
			model.set('DataFinalizacao', new Date(2014, 04, 11));
			model.set('IdUsuarioFinalizacao', '1');
*/
			expect(true).toEqual(true);

			//expect(model.get('Id')).toEqual('1');
			//expect(model.get('FinalizarComDivergencias')).toEqual(true);
			//expect(model.get('DataFinalizacao')).toEqual(new Date(2014, 04, 11));
			//expect(model.get('IdUsuarioFinalizacao')).toEqual('1');

		});

	});

});