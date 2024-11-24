import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  Users,
  Settings,
  BookmarkPlus,
  GraduationCap,
  Activity
} from 'lucide-react';

import BookmarksSection from '../features/BookmarksSection.component';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = React.useState("overview");

  const user = {
    name: "Sarah Johnson",
    username: "@sarahj",
    avatar: "/api/placeholder/150/150",
    bio: "Aspiring Data Scientist | ML Enthusiast",
    education: "MSc in Computer Science",
    joinDate: "January 2024",
    stats: {
      currentStreak: 15,
      totalLearningHours: 120,
      completedCourses: 12,
      activeCourses: 3,
      followers: 45,
      following: 62
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold">My Dashboard</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Profile Summary */}
          <div className="col-span-12 md:col-span-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <h2 className="mt-4 font-semibold text-xl">{user.name}</h2>
                  <p className="text-gray-500">{user.username}</p>
                  <p className="mt-2 text-sm text-gray-600">{user.bio}</p>
                  <div className="mt-4 flex gap-2 flex-wrap justify-center">
                    <Badge variant="secondary">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      {user.education}
                    </Badge>
                    <Badge variant="secondary">
                      <Calendar className="w-3 h-3 mr-1" />
                      Joined {user.joinDate}
                    </Badge>
                  </div>
                </div>

                <div className="mt-6 space-y-1">
                  <Button 
                    variant={activeTab === "overview" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("overview")}
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Overview
                  </Button>
                  <Button 
                    variant={activeTab === "learning" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("learning")}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Learning Progress
                  </Button>
                  <Button 
                    variant={activeTab === "resources" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("resources")}
                  >
                    <BookmarkPlus className="w-4 h-4 mr-2" />
                    My Resources
                  </Button>
                  <Button 
                    variant={activeTab === "certificates" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("certificates")}
                  >
                    {/* <Certificate className="w-4 h-4 mr-2" /> */}
                    Certificates
                  </Button>
                  <Button 
                    variant={activeTab === "network" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("network")}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    My Network
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Learning Streak</span>
                  <Badge variant="secondary">🔥 {user.stats.currentStreak} days</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Hours Learned</span>
                  <Badge variant="secondary">{user.stats.totalLearningHours}h</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Active Courses</span>
                  <Badge variant="secondary">{user.stats.activeCourses}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Network</span>
                  <div className="flex gap-2">
                    <Badge variant="outline">{user.stats.followers} followers</Badge>
                    <Badge variant="outline">{user.stats.following} following</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 md:col-span-9 space-y-6">
            {/* Content changes based on activeTab */}
            {activeTab === "overview" && (
              <Card>
                <CardHeader>
                  <CardTitle>Dashboard Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Recent Activity */}
                    <div>
                      <h3 className="font-semibold mb-4">Recent Activity</h3>
                      {/* Add recent activity content */}
                    </div>

                    {/* Learning Goals */}
                    <div>
                      <h3 className="font-semibold mb-4">Learning Goals</h3>
                      {/* Add learning goals content */}
                    </div>

                    {/* Recommended Resources */}
                    <div>
                      <h3 className="font-semibold mb-4">Recommended For You</h3>
                      {/* Add recommended resources */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "learning" && (
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Add learning progress content */}
                </CardContent>
              </Card>
            )}

            {activeTab === "resources" && (
              <BookmarksSection />
            )}

            {activeTab === "certificates" && (
              <Card>
                <CardHeader>
                  <CardTitle>My Certificates</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Add certificates content */}
                </CardContent>
              </Card>
            )}

            {activeTab === "network" && (
              <Card>
                <CardHeader>
                  <CardTitle>My Network</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Add network content */}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
