var getDuplicates = Class.create();
getDuplicates.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	getDuplicates: function(table, field) {
	var dupRecords = [];
	var gaDupCheck = new GlideAggregate(table);
	gaDupCheck.addAggregate('COUNT', field);
	gaDupCheck.addNotNullQuery(field);
	gaDupCheck.groupBy(field);
	gaDupCheck.addHaving('COUNT', '>', 1);
	gaDupCheck.query();
	while (gaDupCheck.next()) {
	dupRecords.push(gaDupCheck[field].toString());
}
	return dupRecords;
},

type: 'getDuplicates'
});


//Call this script in the filter list on whatever field you want to look for duplicates in
//javascript:new global.getDuplicates().getDuplicates('sys_user', 'u_id_number')
