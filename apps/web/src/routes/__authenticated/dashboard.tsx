import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, MessageSquare, BarChart3, TrendingUp, Users, Zap } from 'lucide-react'

export const Route = createFileRoute('/__authenticated/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return (
    <div className="p-6 space-y-6">

      <div className="space-y-2">
        <h1 className="text-3xl font-logo text-foreground">Welcome back!</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your projects today.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Plus className="h-5 w-5 text-primary" />
              </div>
              <Badge variant="secondary">New</Badge>
            </div>
            <CardTitle className="text-lg">Create Project</CardTitle>
            <CardDescription>
              Start a new project from scratch
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <MessageSquare className="h-5 w-5 text-blue-500" />
              </div>
              <Badge variant="outline">Active</Badge>
            </div>
            <CardTitle className="text-lg">Support Chat</CardTitle>
            <CardDescription>
              Get help from our support team
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <BarChart3 className="h-5 w-5 text-green-500" />
              </div>
              <Badge variant="outline">View All</Badge>
            </div>
            <CardTitle className="text-lg">My Projects</CardTitle>
            <CardDescription>
              Review and manage your projects
            </CardDescription>
          </CardHeader>
        </Card>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              In progress
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
            <p className="text-xs text-muted-foreground">
              +1 this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>


      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Your latest project activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <BarChart3 className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Completed project: "E-commerce Website"</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
              <Badge variant="secondary">Completed</Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <MessageSquare className="h-4 w-4 text-blue-500" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Support chat: "API integration help"</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
              <Badge variant="outline">Active</Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Plus className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Created project: "Mobile App"</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
              <Badge variant="outline">In Progress</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}