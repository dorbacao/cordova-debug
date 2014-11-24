Ext.define('WmsMobile.view.Main', {
    extend:'Ext.tab.Panel',
    alias: 'widget.mainpanel',

    config:{

        fullscreen: true,

        tabBarPosition: 'bottom',
        /*
        backButton :{
            ui: 'back',
            hidden: true,
            itemId:'backButton'
        },
        */
        listeners:{
            painted:function(){
                this.fireEvent('load', this);
            }
        },

        items:[
            {
                xtype:'nestedlist',
                itemId:'menuPrincipal',
                store:'menuHomeStore',
                styleHtmlContent: true,
                fullscreen: false,
                title:'Operação',
                iconCls: 'home',
                getItemTextTpl:function(node){
                    console.log(node);
                    return [
                        '<div class="x-hasbadge">',
                            '{text}',
                            '<tpl if="badgeText &gt; 0">',
                            '   <span class="x-badge">',
                            '       {badgeText}',
                            '   </span>',
                            '</tpl>',
                        '</div>'
                    ].join('');
                }
            },
            {
                xtype:'list',
                itemTpl:'<b>({tipo})</b> - {mensagem} - {data}',
                store:'logStore',
                title:'Admin',
                iconCls: 'settings',
                listeners:{
                    //TODO: remover daqui e implementar na controller
                    painted:function(){
                        var store = Ext.create('WmsMobile.store.Log');
                        var Logger = Ext.create('Logger');
                        store.add(Logger.provider.getData());
                    }
                }
            }
        ]
    }
});