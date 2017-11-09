public class ManageAccounts {

    @AuraEnabled
    public List<Account> accounts;
    @AuraEnabled
    public Integer offst;
    @AuraEnabled
    public Integer total;
    @AuraEnabled
    public Boolean hasprev;
    @AuraEnabled
    public Boolean hasnext;

    private static Integer pagesize = 10;
    private static Integer offset;

    @AuraEnabled
    public static ManageAccounts getAcc(Boolean next, Boolean prev, String accountName, Decimal off) {
        offset = (Integer) off;
        Integer listlength;

        if (accountName != '') {
            String name = '%'+accountName+'%';
            listlength = [SELECT count() FROM Account WHERE Name LIKE :name];
        } else {
            listlength = [SELECT count() FROM Account];
        }

        if (next == true && (offset + pagesize) <= listlength) {
            offset = offset + pagesize;
        } else if (prev == true && offset > 0){
            offset = offset - pagesize;
        }

        List<Account> li = new List<Account>();
        if (accountName != '') {
            String name = '%'+accountName+'%';
            li = [SELECT Name, Site, BillingAddress, Phone, Type FROM Account WHERE Name LIKE :name ORDER BY Name LIMIT :pagesize OFFSET :offset];
        } else {
            li = [SELECT Name, Site, BillingAddress, Phone, Type FROM Account ORDER BY Name LIMIT :pagesize OFFSET :offset];
        }

        ManageAccounts ma = new ManageAccounts();
        ma.accounts = li;
        ma.offst = offset;
        ma.hasprev = hasprev(offset);
        ma.hasnext = hasnxt(offset, listlength, pagesize);

        return ma;
    }

    private static Boolean hasprev(Integer off){
        return !(off > 0);
    }

    private static Boolean hasnxt(Integer off, Integer li, Integer ps){
        return !(off + ps < li);
    }

    @AuraEnabled
    public static List<Contact> getContactsAccount(Id accountId) {
        List<Contact> contacts = [SELECT FirstName, LastName, Email, Phone FROM Contact WHERE AccountId = :accountId ORDER BY FirstName];
        return contacts;
    }

}