
import React from 'react';
import { 
  User, 
  Mail, 
  Key, 
  Calendar, 
  BookOpen, 
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import { getCurrentUser } from '@/utils/mock-data';

const Profile = () => {
  const currentUser = getCurrentUser();
  
  const profileDetails = [
    {
      label: 'Full Name',
      value: currentUser.name,
      icon: User,
    },
    {
      label: 'Email',
      value: currentUser.email,
      icon: Mail,
    },
    {
      label: 'Student ID',
      value: currentUser.studentId || 'N/A',
      icon: Key,
    },
    {
      label: 'Department',
      value: currentUser.department || 'Computer Science',
      icon: BookOpen,
    },
    {
      label: 'Role',
      value: currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1),
      icon: Award,
    },
    {
      label: 'Member Since',
      value: new Date(currentUser.created).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Profile</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="col-span-1">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                      <AvatarFallback className="text-2xl">{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle>{currentUser.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-sm text-gray-500">{currentUser.email}</p>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)}
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full">Edit Profile</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Profile Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profileDetails.map((detail, index) => (
                    <React.Fragment key={detail.label}>
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-primary/10 mr-4">
                          <detail.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{detail.label}</p>
                          <p className="font-medium">{detail.value}</p>
                        </div>
                      </div>
                      {index < profileDetails.length - 1 && (
                        <Separator />
                      )}
                    </React.Fragment>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Account Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Password</h3>
                      <p className="text-sm text-gray-500">Last changed: 3 months ago</p>
                    </div>
                    <Button variant="outline">Change Password</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-500">Enhance your account security</p>
                    </div>
                    <Button variant="outline">Enable</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Session Management</h3>
                      <p className="text-sm text-gray-500">Manage active sessions</p>
                    </div>
                    <Button variant="outline">View Sessions</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
