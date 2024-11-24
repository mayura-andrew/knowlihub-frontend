import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Folder,
  Share2,
  MoreVertical,
  BookmarkPlus,
  ExternalLink,
  PlayCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const BookmarksSection = () => {
  const platformResources = [
    {
      title: "Machine Learning Fundamentals",
      type: "Course",
      progress: 75,
      status: "ongoing",
      source: "platform",
      category: "Data Science"
    },
    {
      title: "Python for Beginners",
      type: "Tutorial",
      progress: 30,
      status: "planning",
      source: "platform",
      category: "Programming"
    }
  ];

  const extensionResources = [
    {
      title: "Advanced React Patterns",
      type: "Article",
      url: "https://example.com/react-patterns",
      status: "completed",
      source: "extension",
      category: "Web Development",
      dateAdded: "2024-03-15"
    },
    {
      title: "Data Visualization Best Practices",
      type: "Blog",
      url: "https://example.com/data-viz",
      status: "planning",
      source: "extension",
      category: "Data Science",
      dateAdded: "2024-03-20"
    }
  ];

  interface Resource {
    title: string;
    type: string;
    progress?: number;
    status: string;
    source: string;
    category: string;
    url?: string;
    dateAdded?: string;
  }

  const renderResourceCard = (resource: Resource) => {
    // const statusColors = {
    //   ongoing: "bg-blue-500",
    //   planning: "bg-yellow-500",
    //   completed: "bg-green-500"
    // };

    const statusIcons = {
      ongoing: <PlayCircle className="w-4 h-4" />,
      planning: <Clock className="w-4 h-4" />,
      completed: <CheckCircle2 className="w-4 h-4" />
    };

    return (
      <Card className="group hover:shadow-md transition-shadow">
        <CardContent className="pt-6 space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h3 className="font-semibold line-clamp-2">{resource.title}</h3>
              <div className="flex gap-2">
                <Badge variant="secondary">{resource.type}</Badge>
                <Badge 
                  className={`flex items-center gap-1 ${
                    resource.source === 'extension' ? 'bg-purple-500' : 'bg-blue-500'
                  }`}
                >
                  {resource.source === 'extension' ? <ExternalLink className="w-3 h-3" /> : <BookmarkPlus className="w-3 h-3" />}
                  {resource.source}
                </Badge>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Share2 className="w-4 h-4 mr-2" /> Share to Community
                </DropdownMenuItem>
                <DropdownMenuItem>Set as Planning</DropdownMenuItem>
                <DropdownMenuItem>Set as Ongoing</DropdownMenuItem>
                <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {resource.source === 'platform' && (
            <Progress value={resource.progress} className="h-2" />
          )}

          <div className="flex items-center justify-between">
            <Badge variant="outline" className="flex items-center gap-1">
              {statusIcons[resource.status as keyof typeof statusIcons]}
              {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
            </Badge>
            {resource.source === 'extension' && (
              <span className="text-sm text-gray-500">
                Added: {new Date(resource.dateAdded as string).toLocaleDateString()}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Card className="md:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Learning Resources</CardTitle>
          <p className="text-sm text-gray-500 mt-1">Manage your saved resources from Knowlihub and web</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Folder className="w-4 h-4 mr-2" />
            Create Folder
          </Button>
          <Button variant="default" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share Selected
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="platform">Platform Resources</TabsTrigger>
            <TabsTrigger value="extension">Extension Saves</TabsTrigger>
          </TabsList>

          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
              All Categories
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
              Data Science
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
              Programming
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
              Web Development
            </Badge>
          </div>

          <Alert>
            <AlertDescription>
              You can now share your saved web resources to the Knowlihub community! Help others discover great learning materials.
            </AlertDescription>
          </Alert>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...platformResources, ...extensionResources].map((resource, index) => (
                <div key={index}>
                  {renderResourceCard(resource)}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="platform">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {platformResources.map((resource, index) => (
                <div key={index}>
                  {renderResourceCard(resource)}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="extension">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {extensionResources.map((resource, index) => (
                <div key={index}>
                  {renderResourceCard(resource)}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BookmarksSection;
