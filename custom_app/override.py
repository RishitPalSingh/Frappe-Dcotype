import frappe
from frappe import _
def check_roles_added(self):
	if self.user_type != "System User" or self.roles or not self.is_new():
		return

	frappe.msgprint(
		_("method overrided"),
		
	)
