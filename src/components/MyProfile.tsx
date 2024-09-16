'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GitFork, MapPin, Star, Users } from "lucide-react"

export function MyProfile() {
  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Profile Sidebar */}
        <div className="md:w-1/3">
          <Avatar className="w-64 h-64 mx-auto md:mx-0">
            <AvatarImage src="/placeholder.svg?height=256&width=256" alt="@johndoe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold mt-4">John Doe</h1>
          <p className="text-gray-600">johndoe</p>
          <p className="mt-4">Full-stack developer passionate about creating awesome web experiences.</p>
          <Button className="w-full mt-4">Edit profile</Button>
          <div className="flex items-center mt-4 text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span className="mr-4"><strong>100</strong> followers</span>
            <span><strong>50</strong> following</span>
          </div>
          <div className="flex items-center mt-2 text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>San Francisco, CA</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-2/3">
          <Tabs defaultValue="overview">
            <TabsList className="w-full justify-center">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {/* <TabsTrigger value="repositories" disabled>Tracks</TabsTrigger> */}
              {/* <TabsTrigger value="projects" disabled>Projects</TabsTrigger> */}
              {/* <TabsTrigger value="packages" disabled>Packages</TabsTrigger> */}
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              {/* Pinned Repositories */}
              <h2 className="text-lg font-semibold mb-4">My Tracks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6, 7].map((repo) => (
                  <Card key={repo}>
                    <CardHeader>
                      <CardTitle className="text-base font-medium">
                        <BookOpen className="w-4 h-4 inline mr-2" />
                        awesome-project-{repo}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">A really cool project description goes here.</p>
                      <div className="flex items-center mt-4 text-sm text-gray-600">
                        <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                        <span className="mr-4">JavaScript</span>
                        <Star className="w-4 h-4 mr-1" />
                        <span className="mr-4">10</span>
                        <GitFork className="w-4 h-4 mr-1" />
                        <span>5</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contribution Graph */}
              {/* <h2 className="text-lg font-semibold mt-8 mb-4">Contributions</h2>
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-7 gap-1">
                    {[...Array(49)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm ${Math.random() > 0.7
                          ? 'bg-green-500'
                          : Math.random() > 0.5
                            ? 'bg-green-300'
                            : 'bg-gray-100'
                          }`}
                      ></div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}

              {/* Recent Activity */}
              {/* <h2 className="text-lg font-semibold mt-8 mb-4">Recent Activity</h2>
              <Card>
                <CardContent className="p-4">
                  <ul className="space-y-4">
                    {[1, 2, 3].map((activity) => (
                      <li key={activity} className="flex items-start">
                        <Star className="w-5 h-5 mr-2 text-yellow-500" />
                        <div>
                          <p className="text-sm">
                            Starred <strong>user/repo-{activity}</strong>
                          </p>
                          <p className="text-xs text-gray-500">3 days ago</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card> */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}