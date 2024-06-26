import frappe
def getEmployee(doc,method):
    fullname=doc.employee_name
    print(doc.as_dict())
def getFullname(doc,method):
    fullname=doc.employee_name
    doc.first_name=fullname
    print(doc.first_name)
