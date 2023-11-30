// Query the main users table (sys_users)
var mainUsers = new GlideRecord('sys_user');
mainUsers.query();

while (mainUsers.next()) {
    var mainUserSamAccount = mainUsers.getValue('user_name');
    
    // Query the temp users table (u_ldap_temp_user) for the current main user's samaccountname
    var tempUsers = new GlideRecord('u_ldap_temp_user');
    tempUsers.addQuery('u_user_name', mainUserSamAccount);
    tempUsers.query();
    
    // If no corresponding record is found in temp users table, update attributes in main users table
    if (!tempUsers.next()) {
        mainUsers.setValue('active', false);
        mainUsers.setValue('locked_out', true);
        mainUsers.update();
    }
}
