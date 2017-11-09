({

	handleContactsAccount : function(component, event) {
        component.set("v.contacts", event.getParam("contacts"));
        component.set("v.totalContacts", event.getParam("totalContacts"));
    }

})