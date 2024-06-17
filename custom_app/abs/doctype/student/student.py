from frappe.model.document import Document
import frappe
class Student(Document):
      pass
@frappe.whitelist()
def get_combined_address(student):
        combined_address = ""
        addresses = frappe.get_all('Address', filters={'address_line1': student}, fields=['address_line1', 'address_line2', 'city', 'state', 'country', 'pincode'])

        for addr in addresses:
            combined_address += f"{addr.get('address_line1', '')}, {addr.get('address_line2', '')}, {addr.get('city', '')}, {addr.get('state', '')}, {addr.get('country', '')}, {addr.get('pincode', '')}<br>"

        return combined_address
