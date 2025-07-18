import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, User, Settings, History, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const recentOrders = [
    {
      id: "ORD001",
      service: "Plagiarism Removal",
      pages: 15,
      status: "Completed",
      date: "2024-01-15",
      price: "$45"
    },
    {
      id: "ORD002", 
      service: "AI Report",
      pages: 8,
      status: "In Progress",
      date: "2024-01-18",
      price: "$24"
    },
    {
      id: "ORD003",
      service: "Plagiarism Report",
      pages: 12,
      status: "Completed",
      date: "2024-01-20",
      price: "$36"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">RESEARCH</h1>
                <p className="text-sm text-primary font-semibold">EXPERTS</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Button asChild variant="ghost">
                <Link to="/plagiarism-removal">Plagiarism Removal</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/plagiarism-report">Plagiarism Report</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/ai-report">AI Report</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/drillbit-report">Drillbit Report</Link>
              </Button>
              <Button asChild variant="ghost" className="text-primary">
                <Link to="/my-account">My Account</Link>
              </Button>
            </nav>
            
            <div className="text-sm text-muted-foreground">
              help@researchexperts.in / (+91)896-857-2273
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">My Account</h1>
            <p className="text-muted-foreground">Manage your account and view your order history</p>
          </div>

          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="login" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Login
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <History className="w-4 h-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="downloads" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Downloads
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="max-w-md mx-auto shadow-elegant border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-foreground">Login to Your Account</CardTitle>
                  <p className="text-center text-muted-foreground">
                    Access your dashboard and manage your orders
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold">
                    Login
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    Don't have an account? <span className="text-primary cursor-pointer">Sign up</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card className="shadow-elegant border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Order History</CardTitle>
                  <p className="text-muted-foreground">Track and manage your recent orders</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <h3 className="font-semibold text-foreground">{order.service}</h3>
                              <Badge variant={order.status === "Completed" ? "default" : "secondary"}>
                                {order.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Order ID: {order.id}</p>
                            <p className="text-sm text-muted-foreground">Pages: {order.pages} | Date: {order.date}</p>
                          </div>
                          <div className="text-right space-y-2">
                            <p className="font-semibold text-foreground">{order.price}</p>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                              {order.status === "Completed" && (
                                <Button size="sm" variant="outline">
                                  <Download className="w-4 h-4 mr-1" />
                                  Download
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card className="shadow-elegant border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Profile Settings</CardTitle>
                  <p className="text-muted-foreground">Update your personal information</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-foreground">First Name</Label>
                      <Input placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Last Name</Label>
                      <Input placeholder="Enter last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-foreground">Email Address</Label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-foreground">Phone Number</Label>
                    <Input placeholder="Enter phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-foreground">Country</Label>
                    <Input placeholder="Enter country" />
                  </div>

                  <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="downloads">
              <Card className="shadow-elegant border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Available Downloads</CardTitle>
                  <p className="text-muted-foreground">Download your completed reports and documents</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.filter(order => order.status === "Completed").map((order) => (
                      <div key={order.id} className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-foreground">{order.service}</h3>
                            <p className="text-sm text-muted-foreground">Order ID: {order.id} | Completed: {order.date}</p>
                          </div>
                          <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                            <Download className="w-4 h-4 mr-2" />
                            Download Report
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;