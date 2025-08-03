import Image from "next/image"
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui"
import { Heart, Star, Settings, User, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Mysira Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Modern Flat UI Components</h1>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            A comprehensive component library built with Next.js, Tailwind CSS,
            and Radix UI. Clean, accessible, and ready for production.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </section>

        {/* Components Showcase */}
        <section className="py-16">
          <h2 className="text-2xl font-semibold mb-8">Component Library</h2>

          <div className="grid gap-8">
            {/* Buttons Section */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>
                  Various button styles and states
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Form Elements */}
            <Card>
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
                <CardDescription>
                  Input fields and form controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 max-w-md">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Password
                    </label>
                    <Input type="password" placeholder="Enter your password" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Input placeholder="Type your message here..." />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cards and Layouts */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>
                    This is a card description that explains the content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-secondary">
                    Cards are perfect for displaying grouped information with
                    clear hierarchy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Avatar className="w-16 h-16 mb-4">
                    <AvatarImage src="" alt="Profile" />
                    <AvatarFallback>
                      <User className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>Profile Card</CardTitle>
                  <CardDescription>User profile information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    <Badge>Designer</Badge>
                    <Badge variant="secondary">React</Badge>
                  </div>
                  <Button className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Featured
                  </CardTitle>
                  <CardDescription>Special highlight card</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-secondary mb-4">
                    This card demonstrates badges, icons, and various states.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">New</Badge>
                    <Badge variant="destructive">Hot</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Badges and Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Badges & Tags</CardTitle>
                <CardDescription>Labels and status indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Avatars */}
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
                <CardDescription>
                  User profile pictures and fallbacks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="" alt="Small" />
                    <AvatarFallback className="text-xs">XS</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="" alt="Default" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" alt="Medium" />
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="" alt="Large" />
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-sm text-secondary">
            <p>Built with Next.js, Tailwind CSS, and Radix UI</p>
            <p className="mt-2">© 2024 Mysira UI Template</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
