({
    
	handleContactsAccount : function(component, event) {
        var accountId = event.getParam("accountId");

        var action = component.get("c.getContactsAccount");
        action.setParams({ "accountId": accountId });
        action.setCallback(this, function(response) {
            component.set("v.contacts", response.getReturnValue());
            component.set("v.totalContacts", response.getReturnValue().length);
        });
        
        $A.enqueueAction(action);
        
        var toggleDetail = component.find("account--detail");
        $A.util.removeClass(toggleDetail, 'toggle--detail');
    }
    
})