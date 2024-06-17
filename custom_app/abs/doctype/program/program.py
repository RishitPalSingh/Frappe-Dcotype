# Copyright (c) 2024, rishit and contributors
# For license information, please see license.txt

from frappe import _
import frappe
from frappe.utils import getdate
from frappe.model.document import Document

class Program(Document):
    def validate(self):
        self.validate_dates()
        self.calculate_total_credits()

    def on_update(self):
        self.calculate_total_credits()

    def calculate_total_credits(self):
        total_credits = 0
        for co in self.courses:
            course = frappe.get_doc("Course", co)
            credit = course.credits
            total_credits += credit
        self.total_credits = total_credits

    def validate_dates(self):
        if self.start_date and self.end_date:
            if self.end_date < self.start_date:
                frappe.throw(_("End date cannot be before start date."))
            
            self.duration = self.calculate_duration()

    def calculate_duration(self):
        start_date = getdate(self.start_date)
        end_date = getdate(self.end_date)
        
        duration = (end_date.year - start_date.year) * 12 + (end_date.month - start_date.month)
        return duration
