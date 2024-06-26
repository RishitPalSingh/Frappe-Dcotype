// Copyright (c) 2024, rishit and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student", {
	lastname(frm){
        frm.set_value("fullname",frm.doc.firstname+" "+frm.doc.middlename+" "+frm.doc.lastname)
        // frm.doc.fullname=;
        
    },
    create_user(frm)
        {
            console.log(frm.doc)
            frappe.call({
                method: 'frappe.client.insert',
                args: {
                    doc: {
                        'doctype': 'User',
                        'email': frm.doc.email,
                        'first_name': frm.doc.firstname,
                        'last_name': frm.doc.lastname,
                        'enabled': 1,
                        'user_type': 'System User',
                        'roles': [{'role': 'Student'}]
                    }
                },
                callback: function(response) {
                    if(response.message) {
                        frappe.msgprint(__("User Created"));
                    }
                }
            });
        },
        validate(frm) {
            if (frm.doc.dob) {
                const today = frappe.datetime.get_today();
                const dob = frm.doc.dob;
        
                // Calculate the age using built in function
                const age = frappe.datetime.get_diff(today, dob) / 365.25;
        
                if (age < 18) {
                    frappe.msgprint(__("Age should not be less than 18 years"));
                    frappe.validated = false;
                }
            }
            
                
            
        }
    
 
});
frappe.ui.form.on('Student', {
    address: function(frm) {
        if (frm.doc.address) {
            frappe.call({
                method: 'frappe.client.get',
                args: {
                    doctype: 'Address',
                    name: frm.doc.address
                },
                callback: function(response) {
                    console.log(response.message)
                    let address = response.message;
                    let address_html = `<p>${address.address_line1||''}</p>
                                        <p>${address.address_line2||''}</p>
                                        <p>${address.city||''}, ${address.state||''}</p>
                                        <p>${address.country||''}, ${address.pincode||''}</p>`;
                    frm.set_df_property('combined_address', 'options', address_html);
                }
            });
        }
    }
});




