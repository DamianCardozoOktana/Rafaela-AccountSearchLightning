({

    searchAccounts: function(component, event, helper) {
        if(event.getParams().keyCode == 13){
			var searchEvent = $A.get("e.c:searchAccountsEvent");
            searchEvent.setParams({
                "accountName" : component.get('v.accountName')
            });
            searchEvent.fire();

            var detailEvent = $A.get("e.c:detailAccountEvent");
            detailEvent.setParams({
                "contacts" : [],
                "totalContacts" : null
            });
            detailEvent.fire();
        }
    }

})