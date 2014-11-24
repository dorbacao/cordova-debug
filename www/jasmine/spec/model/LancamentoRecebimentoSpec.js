describe("O Model", function(){

	describe("LancamentoRecebimento", function(){

		it("deve respeitar seus tipos definidos", function(){

			var model = Ext.create('WmsMobile.model.LancamentoRecebimento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'LancamentoRecebimento');
			model.set('Quantidade', 1);
			model.set('Vencimento', new Date(2014, 04, 11));
			model.set('IdAvaria', '1');

			expect(model.get('Id')).toEqual('1');
			expect(model.get('IdDocumento')).toEqual('5');
			expect(model.get('IdItemDocumento')).toEqual('1');
			expect(model.get('Descricao')).toEqual('LancamentoRecebimento');
			expect(model.get('Quantidade')).toEqual(1);
			expect(model.get('Vencimento')).toEqual(new Date(2014, 04, 11));
			expect(model.get('IdAvaria')).toEqual('1');

		});

		it("deve possuir IdItemDocumento definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoRecebimento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('Descricao', 'LancamentoRecebimento');
			model.set('Quantidade', 1);
			model.set('Vencimento', new Date(2014, 04, 11));
			model.set('IdAvaria', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Quantidade definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoRecebimento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'LancamentoRecebimento');
			model.set('Vencimento', new Date(2014, 04, 11));
			model.set('IdAvaria', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Quantidade entre 0-999", function(){

			var model = Ext.create('WmsMobile.model.LancamentoRecebimento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'LancamentoRecebimento');
			model.set('Quantidade', 1000);
			model.set('Vencimento', new Date(2014, 04, 11));
			model.set('IdAvaria', '1');

			expect(model.isValid()).toEqual(false);

		});

		it("deve possuir Vencimento definida", function(){

			var model = Ext.create('WmsMobile.model.LancamentoRecebimento');
			model.set('Id', '1');
			model.set('IdDocumento', '5');
			model.set('IdItemDocumento', '1');
			model.set('Descricao', 'LancamentoRecebimento');
			model.set('Quantidade', 1);
			model.set('IdAvaria', '1');

			expect(model.isValid()).toEqual(false);

		});

	});

});