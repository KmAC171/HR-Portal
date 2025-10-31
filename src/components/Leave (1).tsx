import { Calendar, Clock, Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const leaveRequests = [
  {
    id: 1,
    employee: "Sarah Johnson",
    type: "Vacation",
    startDate: "Nov 20, 2025",
    endDate: "Nov 24, 2025",
    days: 5,
    status: "pending",
    reason: "Family vacation"
  },
  {
    id: 2,
    employee: "Michael Chen",
    type: "Sick Leave",
    startDate: "Nov 15, 2025",
    endDate: "Nov 16, 2025",
    days: 2,
    status: "approved",
    reason: "Medical appointment"
  },
  {
    id: 3,
    employee: "Emma Wilson",
    type: "Personal",
    startDate: "Dec 1, 2025",
    endDate: "Dec 1, 2025",
    days: 1,
    status: "pending",
    reason: "Personal matter"
  },
  {
    id: 4,
    employee: "James Brown",
    type: "Vacation",
    startDate: "Nov 10, 2025",
    endDate: "Nov 12, 2025",
    days: 3,
    status: "approved",
    reason: "Weekend getaway"
  },
  {
    id: 5,
    employee: "Lisa Anderson",
    type: "Sick Leave",
    startDate: "Nov 8, 2025",
    endDate: "Nov 8, 2025",
    days: 1,
    status: "rejected",
    reason: "Flu symptoms"
  }
];

const Leave = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "default";
      case "pending":
        return "secondary";
      case "rejected":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Leave Management</h2>
        <p className="text-muted-foreground mt-2">
          Review and manage employee leave requests.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Requests
            </CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">2</div>
            <p className="text-xs text-muted-foreground mt-2">
              Awaiting approval
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Approved This Month
            </CardTitle>
            <Check className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">12</div>
            <p className="text-xs text-muted-foreground mt-2">
              +3 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              On Leave Today
            </CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">18</div>
            <p className="text-xs text-muted-foreground mt-2">
              7.3% of workforce
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Leave Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaveRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-foreground">{request.employee}</h3>
                    <Badge variant={getStatusColor(request.status)}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {request.startDate} - {request.endDate}
                    </span>
                    <span>{request.days} day(s)</span>
                    <span className="font-medium">{request.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{request.reason}</p>
                </div>

                {request.status === "pending" && (
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="default">
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leave;
