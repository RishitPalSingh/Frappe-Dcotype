// frappe.ui.form.on('Program', {
//     end_date: function(frm) {
//         if (frm.doc.start_date && frm.doc.end_date) {
//             let start_date = frappe.datetime.str_to_obj(frm.doc.start_date);
//             let end_date = frappe.datetime.str_to_obj(frm.doc.end_date);
// console.log(start_date+"      "+end_date);
//             // Check if end date is before start date
//             if (end_date < start_date) {
//                 frappe.msgprint(__('End date cannot be before start date.'));
//                 frm.set_value('end_date', '');
//                 frm.set_value('duration', 0);
//                 return;
//             }

//             // Calculate duration in months
//             let duration = calculate_months_difference(start_date, end_date);
//             frm.set_value('duration', duration);
//         }
//     },

//     start_date: function(frm) {
//         // Trigger end_date function to recalculate duration when start_date changes
//         frm.trigger('end_date');
//     }
// });

// function calculate_months_difference(start_date, end_date) {
//     let years_diff = end_date.getFullYear() - start_date.getFullYear();
//     let months_diff = end_date.getMonth() - start_date.getMonth();

//     return years_diff * 12 + months_diff;
// }
