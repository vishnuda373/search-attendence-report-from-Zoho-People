//fetch attedence report from people of a particular employee
Sdate = current_date.toDate();
Edate = current_date.toDate();
attendance = invokeurl
[
    url :"https://people.zoho.com/people/api/attendance/getUserReport?sdate=" + Sdate.toString("dd-MMM-yyyy") + "&edate=" + Edate.toString("dd-MMM-yyyy") + "&empId=" + EmpID
    type :GET
    connection:"zoho_people"
];
info attendance;