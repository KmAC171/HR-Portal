import { Building2, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const departments = [
  {
    name: "Engineering",
    head: "Sarah Johnson",
    employees: 45,
    budget: "$2.5M",
    utilization: 87,
    color: "hsl(158 64% 52%)"
  },
  {
    name: "Product",
    head: "Michael Chen",
    employees: 18,
    budget: "$1.2M",
    utilization: 92,
    color: "hsl(221 83% 53%)"
  },
  {
    name: "Design",
    head: "Emma Wilson",
    employees: 12,
    budget: "$800K",
    utilization: 78,
    color: "hsl(280 65% 60%)"
  },
  {
    name: "Human Resources",
    head: "James Brown",
    employees: 8,
    budget: "$600K",
    utilization: 85,
    color: "hsl(25 95% 53%)"
  },
  {
    name: "Marketing",
    head: "Lisa Anderson",
    employees: 22,
    budget: "$1.5M",
    utilization: 81,
    color: "hsl(340 75% 55%)"
  },
  {
    name: "Sales",
    head: "David Martinez",
    employees: 35,
    budget: "$2.0M",
    utilization: 94,
    color: "hsl(142 71% 45%)"
  }
];

const Departments = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Departments</h2>
        <p className="text-muted-foreground mt-2">
          Overview of all organizational departments.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept.name} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">Led by {dept.head}</p>
                </div>
                <div 
                  className="h-10 w-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${dept.color}15` }}
                >
                  <Building2 className="h-5 w-5" style={{ color: dept.color }} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Employees</span>
                </div>
                <span className="font-semibold text-foreground">{dept.employees}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span>Budget</span>
                </div>
                <span className="font-semibold text-foreground">{dept.budget}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Utilization</span>
                  <span className="font-semibold text-foreground">{dept.utilization}%</span>
                </div>
                <Progress value={dept.utilization} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Departments;
