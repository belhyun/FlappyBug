OVERRIDE(INPUT,function(e){"use strict";global.INPUT=CLASS({preset:function(){return e},init:function(e,o,n,t){var i,r,u,c,l,a,E=void 0===t?void 0:t.placeholder;void 0!==E&&DELAY(function(){i=DIV({style:{color:"#999",position:"absolute",top:5,left:5,cursor:"text"},children:[E]}).insertAfter(n),r=EVENT({node:i,name:"tap"},function(){n.select()}),u=EVENT({node:n,name:"keyup"},function(e,o){""===o.getValue()?i.show():i.hide()}),c=EVENT({node:n,name:"change"},function(e,o){""===o.getValue()?i.show():i.hide()}),l=EVENT({node:n,name:"blur"},function(e,o){""===o.getValue()?i.show():i.hide()}),OVERRIDE(n.remove,function(e){n.remove=a=function(){r.remove(),u.remove(),c.remove(),l.remove(),i.remove(),e()}})})}})});