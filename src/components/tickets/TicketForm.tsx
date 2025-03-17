
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  TicketCategory, 
  TicketPriority 
} from '@/types';
import { toast } from "@/components/ui/use-toast";
import { 
  getCategoryDisplayText, 
  getPriorityDisplayText 
} from '@/utils/mock-data';

const TicketForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '' as TicketCategory,
    priority: 'medium' as TicketPriority,
  });

  const categories: TicketCategory[] = [
    'it', 'academic', 'hostel', 'finance', 'library', 'transport', 'other'
  ];

  const priorities: TicketPriority[] = [
    'low', 'medium', 'high', 'urgent'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a ticket title",
        variant: "destructive",
      });
      return;
    }

    if (!formData.description.trim()) {
      toast({
        title: "Error",
        description: "Please enter a ticket description",
        variant: "destructive",
      });
      return;
    }

    if (!formData.category) {
      toast({
        title: "Error",
        description: "Please select a category",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Your ticket has been submitted successfully!",
      });
      
      setIsSubmitting(false);
      navigate('/tickets');
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Ticket</CardTitle>
        <CardDescription>
          Fill in the details below to submit a new support ticket
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-1">
            <Label htmlFor="title">Ticket Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Brief summary of your issue"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Please provide details about your issue"
              className="min-h-[120px]"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {getCategoryDisplayText(category)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="priority">Priority</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => handleSelectChange('priority', value as TicketPriority)}
              >
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority) => (
                    <SelectItem key={priority} value={priority}>
                      {getPriorityDisplayText(priority)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="attachment">Attachments (Optional)</Label>
            <Input
              id="attachment"
              type="file"
              multiple
              className="cursor-pointer"
            />
            <p className="text-sm text-muted-foreground mt-1">
              You can upload screenshots, documents, or any other relevant files (.pdf, .jpg, .png)
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default TicketForm;
