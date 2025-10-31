import { useState } from "react";
import { Search, Plus, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const employees = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Developer",
    department: "Engineering",
    email: "sarah.j@company.com",
    phone: "+1 234 567 8900",
    status: "active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    department: "Product",
    email: "michael.c@company.com",
    phone: "+1 234 567 8901",
    status: "active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "UX Designer",
    department: "Design",
    email: "emma.w@company.com",
    phone: "+1 234 567 8902",
    status: "active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
  },
  {
    id: 4,
    name: "James Brown",
    role: "HR Manager",
    department: "Human Resources",
    email: "james.b@company.com",
    phone: "+1 234 567 8903",
    status: "on-leave",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Marketing Lead",
    department: "Marketing",
    email: "lisa.a@company.com",
    phone: "+1 234 567 8904",
    status: "active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
  },
  {
    id: 6,
    name: "David Martinez",
    role: "Sales Director",
    department: "Sales",
    email: "david.m@company.com",
    phone: "+1 234 567 8905",
    status: "active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Employees</h2>
          <p className="text-muted-foreground mt-2">
            Manage and view all employee information.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Employee
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEmployees.map((employee) => (
          <Card key={employee.id} className="transition-all hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="h-16 w-16 rounded-full bg-secondary"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{employee.name}</h3>
                      <p className="text-sm text-muted-foreground">{employee.role}</p>
                    </div>
                    <Badge variant={employee.status === "active" ? "default" : "secondary"}>
                      {employee.status === "active" ? "Active" : "On Leave"}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{employee.department}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      <span className="truncate">{employee.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      <span>{employee.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Employees;
