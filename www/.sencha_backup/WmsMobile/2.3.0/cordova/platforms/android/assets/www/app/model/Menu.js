Ext.define('WmsMobile.model.Menu',{
  "items": [
        {
            codigo:'0',
            badgeText:'2',
            text: "1 - Recebimento",
            "items":[]
        },
        {
            codigo:'1',
            badgeText:'2',
            text: "2 - Endereçamento",
            "items":[]
        },
        {
            codigo:'2',
            badgeText:'2',
            text: "3 - Movimentação",
            "items":[
                {
                    codigo:'2.0',
                    text: "3.1 - Movimentação Avulsa",
                    badgeText:'2',
                },
                {
                    codigo:'2.1',
                    text: "3.2 - Movimentação Planejada",
                    badgeText:'2',
                },
            ]
        },
        {
            codigo:'3',
            badgeText:'2',
            text: "4 - Separação",
            "items":[]
        },
         {
            codigo:'4',
            badgeText:'2',
            text: "5 - Abastecimento",
            "items":[]
        },
        {
            codigo:'5',
            badgeText:'2',
            text: "6 - Expedição",
            "items":[]
        },
        {
            codigo:'6',
            badgeText:'2',
            text: "7 - Inventário",
            "items":[
                {
                    codigo:'6.0',
                    text:"7.1 - Avulso",
                    "items":[
                        {
                            codigo:'6.0.0',
                            text:'7.1.1 - Por Produto'
                        },
                        {
                            codigo:'6.0.1',
                            text:'7.1.2 - Por Endereço'
                        }
                    ]
                },
                {
                    codigo:'6.1',
                    text:"7.2 - Planejado",
                    "items":[
                        {
                            codigo:'6.1.0',
                            text:'7.2.1 - Por Produto'
                        },
                        {
                            codigo:'6.1.1',
                            text:'7.2.2 - Por Endereço'
                        }
                    ]
                }
            ],
        },
        {
            codigo:'7',
            badgeText:'2',
            text: "8 - Consultas",
            "items":[]
        },

    ]
});

