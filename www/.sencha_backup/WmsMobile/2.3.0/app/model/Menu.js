Ext.define('WmsMobile.model.Menu',{
    extend:'WmsMobile.model.ModelBase',

    config:{
        idProperty:'codigo',
        fields:[

        //Types: AUTO,BOOL,BOOLEAN,DATE,FLOAT,INT,INTEGER,NUMBER,STRING,

            {name: 'codigo',     type: 'string'},
            {name: 'text',       type: 'string'},
            {name: 'badgeText',  type: 'string'},
        ],

        proxy: {
            type: 'rest',
            url: WmsMobile.Config.getApiUrl('itensmenu'),
            reader: {
                type: 'json',
                root: 'data'
            },
        },
    }
});