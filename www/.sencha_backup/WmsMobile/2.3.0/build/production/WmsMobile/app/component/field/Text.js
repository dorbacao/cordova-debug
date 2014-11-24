
Ext.define('WmsMobile.component.field.Text',{
    extend:'Ext.field.Text',
    alias:'widget.wmstextfield',
    hasFocus:false,
    hasSelected:false,

    config:{
        listeners:{
            painted:function(element){

                if(this.hasFocus){
                    jQuery(element.dom).find('input').focus();
                }

                if(this.hasSelected){
                    jQuery(element.dom).find('input').select();
                }

            }
        }
    }
});