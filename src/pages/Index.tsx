import { useState } from "react";
//import Navigation from "@/components/Navigation";
//import Dashboard from "@/components/Dashboard";
import Dashboard from "@/components/Dashboard (1)";
//import Employees from "@/components/Employees";
import Employees from "@/components/Employees (1)";
import Navigation from "@/components/Navigation (1)";
//import Leave1 from "@/components/Leave";
//import Departments from "@/components/Departments";
import Departments from "@/components/Departments (1)";
import Leave from "@/components/Leave (1)";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "employees":
        return <Employees />;
      case "leave":
        return <Leave />;
      case "departments":
        return <Departments />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-6 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
