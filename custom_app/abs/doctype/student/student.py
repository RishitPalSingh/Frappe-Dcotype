import frappe
from frappe.model.document import Document

class Student(Document):
    def after_insert(self):
        self.notify_admin_on_creation()

    def notify_admin_on_creation(self):
        admin_email = "admin@example.com"  # Replace with the actual admin email
        subject = f"New Student Created: {self.firstname} {self.lastname}"
        message = f"""
        A new student has been created in the system:
        Name: {self.firstname} {self.middlename} {self.lastname}
        Email: {self.email}
        """
        print(frappe.sendmail(
            recipients=[self.email],
            subject=subject,
            message=message,
            delayed=False
        ))
