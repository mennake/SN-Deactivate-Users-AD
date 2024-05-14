# SN-Deactivate-Users-AD
Deactivate accounts deleted from AD in SN

This is to account for users who show as active in SN (without UPN) who were deleted from active directory, thus becoming orphans. We want to import the entire AD and account for users that are no longer found, and deactivate their respective accounts in SN.

1) Query your full sys_user table using a GlideRecord call.
2) Iterate the resulting GlideRecord and compare each current user record to the records in your import set (I assume you have some unique identifier you could use here).
3) If the user is not found in the import set, deactivate the user in ServiceNow.
4) If the user is found, do nothing and move onto the next user record.

https://uscmarshall.service-now.com/kb_view.do?sysparm_article=KB0000946
