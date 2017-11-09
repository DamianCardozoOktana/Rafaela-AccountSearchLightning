({
	getAccounts : function(component, event, helper) {
        var next = false;
        var prev = false;
        var accountName = '';
        helper.getAccounts(component, next, prev, accountName);
    },

    handleAccountsByName : function(component, event, helper) {
        var next = false;
        var prev = false;
        var accountName = event.getParam("accountName");
        helper.getAccounts(component, next, prev, accountName);
    },

    Next:function(component, event, helper){
        var next = true;
        var prev = false;
        var accountName = component.get('v.accountName');
        var offset = component.get("v.offset");
        helper.getAccounts(component, next, prev, accountName, offset); 
    },

    Previous:function(component, event, helper){
        var next = false;
        var prev = true;
        var accountName = component.get('v.accountName');
        var offset = component.get("v.offset");
        helper.getAccounts(component, next, prev, accountName, offset);
    },

    detailAccount : function(component, event) {
        var appEvent = $A.get("e.c:detailAccountEvent");
        var accountId = event.currentTarget.dataset.accountid;

        var action = component.get("c.getContactsAccount");
        action.setParams({ "accountId": accountId });
        action.setCallback(this, function(response) {
            appEvent.setParams({
                "contacts" : response.getReturnValue(),
                "totalContacts" : response.getReturnValue().length
            });
            appEvent.fire();
        });

        $A.enqueueAction(action);
    }

})