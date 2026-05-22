// frappe.ui.form.on('Sales Invoice',{
//    function
// })
function calculate_total_fob_value(frm, cdt, cdn){
		
	let d=locals[cdt][cdn]
	if(frm.doc.currency=='INR'){
	frappe.model.set_value(cdt,cdn,'fob_value',d.base_amount-(d.custom_insurance+d.custom_freight))
	frappe.model.set_value(cdt,cdn,'fob_value_inr',d.base_amount-(d.custom_insurance+d.custom_freight))
	frappe.model.set_value(cdt,cdn,'custom_duty_drawback_amount',d.fob_value_inr*d.custom_duty_drawback_rate/100)
	frappe.model.set_value(cdt,cdn,'meis_value',d.fob_value_inr*d.meis_rate/100)
	} 
	if(frm.doc.currency != 'INR'){
	frappe.model.set_value(cdt,cdn,'fob_value',d.amount-(d.custom_freight+d.custom_insurance))
	frappe.model.set_value(cdt,cdn,'fob_value_inr',d.base_amount-(d.custom_freight*frm.doc.conversion_rate+frm.doc.conversion_rate*d.custom_insurance)) 
	frappe.model.set_value(cdt,cdn,'duty_drawback_amount',d.fob_value_inr*d.custom_duty_drawback_rate/100)
	frappe.model.set_value(cdt,cdn,'meis_value',d.fob_value_inr*d.meis_rate/100)
}

}
frappe.ui.form.on('Sales Invoice Item',{
	  
			 custom_freight:function(frm,cdt,cdn){
				calculate_total_fob_value(frm, cdt, cdn)
			 },
			 custom_insurance:function(frm,cdt,cdn){
				calculate_total_fob_value(frm, cdt, cdn)
			 },
			 custom_duty_drawback_rate:function(frm,cdt,cdn){
				calculate_total_fob_value(frm, cdt, cdn)
			 },
			 meis_rate:function(frm,cdt,cdn){
				calculate_total_fob_value(frm, cdt, cdn)
			 },
			
})

