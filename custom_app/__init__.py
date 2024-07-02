from frappe.core.doctype.user.user import User as original
from custom_app.override import check_roles_added as new
original.check_roles_added = new