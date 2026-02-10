const BASE_URL = "https://hrms-1-11m3.onrender.com";

export async function getEmployees() {
  const res = await fetch(`${BASE_URL}/employees`);
  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json();
}

export async function addEmployee(data) {
  const res = await fetch(`${BASE_URL}/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to add employee");
  return res.json();
}

export async function deleteEmployee(id) {
  const res = await fetch(`${BASE_URL}/employees/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete employee");
}

export async function markAttendance(data) {
  const res = await fetch(`${BASE_URL}/attendance`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to mark attendance");
  return res.json();
}

export async function getAttendance(employeeId) {
  const res = await fetch(`${BASE_URL}/attendance/${employeeId}`);
  if (!res.ok) throw new Error("Failed to fetch attendance");
  return res.json();
}
