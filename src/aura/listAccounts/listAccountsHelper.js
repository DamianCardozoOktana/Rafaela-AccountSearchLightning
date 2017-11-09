({

    getAccounts : function(component, next, prev, accountName, offset) {
        offset = offset || 0;
        var action = component.get("c.getAcc");
        action.setParams({
            "next" : next,
            "prev" : prev,
            "accountName" : accountName,
            "off" : offset
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state=="SUCCESS"){
              var result = response.getReturnValue();
              component.set('v.offset', result.offst);
              component.set('v.accounts', result.accounts);
              component.set('v.next', result.hasnext);
              component.set('v.prev', result.hasprev);
            }
        });
        $A.enqueueAction(action);
    }

})