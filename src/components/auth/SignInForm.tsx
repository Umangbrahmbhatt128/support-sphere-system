
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

interface SignInFormProps {
  onSuccess?: () => void;
}

const SignInForm = ({ onSuccess }: SignInFormProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, rememberMe: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email",
        variant: "destructive",
      });
      return;
    }

    if (!formData.password.trim()) {
      toast({
        title: "Error",
        description: "Please enter your password",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (formData.email.endsWith('@paruluniversity.ac.in')) {
        toast({
          title: "Success",
          description: "You have been logged in successfully!",
        });
        
        if (onSuccess) {
          onSuccess();
        } else {
          navigate('/dashboard');
        }
      } else {
        toast({
          title: "Error",
          description: "Please use a valid university email address",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
        <CardDescription className="text-center">
          Enter your university credentials to access the support system
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.name@paruluniversity.ac.in"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a 
                href="#" 
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember"
              checked={formData.rememberMe} 
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="remember" className="text-sm">Remember me</Label>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col">
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            Don't have university credentials yet?{' '}
            <a 
              href="#" 
              className="text-primary hover:underline font-medium"
            >
              Contact IT Support
            </a>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignInForm;
