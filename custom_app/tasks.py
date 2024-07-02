import frappe

def customScheduler():
    doc=frappe.get_doc("Count")
    print("doc",doc.as_dict())
    doc.count=int( doc.count)+1
    doc.save()
    frappe.db.commit()
    return doc.count


