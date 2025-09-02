import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ModeToggle } from '@/components/ui/theme-toggle'
import { signOut, useSession } from '@/lib/auth-client'
import { Link, useRouter } from '@tanstack/react-router'
import { MessageSquare, Plus, BarChart3, User, Settings, LogOut } from 'lucide-react'

export function Header() {
  const { data: session } = useSession()
  const router = useRouter();
  
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
              <Link to={session ? "/dashboard" : "/"}>
                <Logo size="sm" />
              </Link>
          </div>


          {session && (
            <nav className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" asChild>
                <Link to="/dashboard">
                  Home
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/projects">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Projects
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/support">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Support
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/create">
                  <Plus className="w-4 h-4 mr-2" />
                  Create
                </Link>
              </Button>
            </nav>
          )}


          <div className="flex items-center space-x-2">

            {session && <ModeToggle />}


            {session ? (

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatars/01.png" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{session.user.name || 'User'}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() =>{ 
                    signOut().then(() => {
                      router.navigate({ to: "/login", search: { redirect: "/dashboard" } })
                    })
                  }}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (

              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
