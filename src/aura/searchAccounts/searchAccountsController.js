({
	
    searchAccounts: function(component, event) {
        if(event.getParams().keyCode == 13){
          	var action = component.get("c.getAccountsByName");
            action.setParams({ "name": component.get('v.accountName') });
            action.setCallback(this, function(response) {
                component.set("v.accounts", response.getReturnValue());
            });
            
            $A.enqueueAction(action);
            
            var toggleTable = component.find("accounts--table");
	        $A.util.toggleClass(toggleTable, "toggle--table");
        }
    }

})