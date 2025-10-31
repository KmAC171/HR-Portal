import { Users, Calendar, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Employees",
    value: "247",
    icon: Users,
    trend: "+12%",
    description: "from last month"
  },
  {
    title: "On Leave Today",
    value: "18",
    icon: Calendar,
    trend: "-5%",
    description: "compared to average"
  },
  {
    title: "New Hires",
    value: "8",
    icon: TrendingUp,
    trend: "+20%",
    description: "this quarter"
  },
  {
    title: "Avg. Work Hours",
    value: "42.5",
    icon: Clock,
    trend: "+2%",
    description: "per week"
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h2>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's an overview of your HR metrics.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-primary font-medium">{stat.trend}</span>{" "}
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Sarah Johnson", action: "submitted leave request", time: "2 hours ago" },
                { name: "Michael Chen", action: "completed onboarding", time: "5 hours ago" },
                { name: "Emma Wilson", action: "updated profile", time: "1 day ago" },
                { name: "James Brown", action: "requested time off", time: "2 days ago" }
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">{activity.name}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Team Building Event", date: "Nov 15, 2025", attendees: 45 },
                { title: "Performance Reviews", date: "Nov 20, 2025", attendees: 30 },
                { title: "Holiday Party", date: "Dec 22, 2025", attendees: 120 },
                { title: "Q4 All Hands", date: "Dec 28, 2025", attendees: 247 }
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{event.attendees} attending</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
