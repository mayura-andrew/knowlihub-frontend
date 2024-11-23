import React from 'react';
import { Plus, Link as LinkIcon, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  url: z.string().url('Please enter a valid URL'),
  category: z.string().min(1, 'Please select a category'),
  tags: z.array(z.string()),
  rating: z.number().min(1).max(5),
  learningOutcome: z.string().min(10, 'Please share what you learned'),
  recommendedLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  generalThoughts: z.string().optional(),
});

interface ShareResourceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ShareResourceModal: React.FC<ShareResourceModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [tags, setTags] = React.useState<string[]>([]);
  const [newTag, setNewTag] = React.useState('');
  const [rating, setRating] = React.useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      url: '',
      category: '',
      tags: [],
      rating: 0,
      learningOutcome: '',
      recommendedLevel: 'beginner',
      generalThoughts: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    onOpenChange(false);
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      form.setValue('tags', [...tags, newTag]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
    form.setValue('tags', tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white font-['Roboto'] p-6 overflow-y-auto max-h-[80vh] custom-scrollbar">
        <DialogHeader>
          <DialogTitle className="text-[#212529] text-2xl font-semibold">
            Share Learning Resource
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Resource Details Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#212529] font-medium">Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter resource title"
                        className="border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[#DC3545]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#212529] font-medium">URL</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-[#6C757D]" />
                        <Input
                          placeholder="https://"
                          className="pl-10 border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[#DC3545]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#212529] font-medium">Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-[#DEE2E6] focus:ring-[#007BFF]">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="programming">Programming</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[#DC3545]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#212529] font-medium">
                      Rate this resource
                    </FormLabel>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => {
                            setRating(star);
                            field.onChange(star);
                          }}
                          className={`text-2xl ${
                            star <= rating ? 'text-[#FFC107]' : 'text-[#DEE2E6]'
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                    <FormMessage className="text-[#DC3545]" />
                  </FormItem>
                )}
              />

              <div className="col-span-1 sm:col-span-2">
                <FormLabel className="text-[#212529] font-medium">Tags</FormLabel>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map(tag => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-[#F8F9FA] text-[#495057] hover:bg-[#E9ECEF] flex items-center gap-1"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-[#DC3545]"
                      >
                        <X size={14} />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    className="border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <Button
                    type="button"
                    onClick={addTag}
                    variant="outline"
                    className="border-[#DEE2E6] hover:bg-[#F8F9FA] text-[#007BFF]"
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
            </div>

            <FormField
                control={form.control}
                name="recommendedLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#212529] font-medium">
                      Recommended for
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-[#DEE2E6] focus:ring-[#007BFF]">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">🌱 Beginner</SelectItem>
                        <SelectItem value="intermediate">🌿 Intermediate</SelectItem>
                        <SelectItem value="advanced">🌳 Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[#DC3545]" />
                  </FormItem>
                )}
              />

            {/* Rating & Learning Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <FormField
                control={form.control}
                name="learningOutcome"
                render={({ field }) => (
                  <FormItem className="col-span-1 sm:col-span-2">
                    <FormLabel className="text-[#212529] font-medium">
                      What did you learn?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="E.g., Learned the basics of React hooks"
                        className="min-h-[100px] border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[#DC3545]" />
                  </FormItem>
                )}
              />



              <FormField
                control={form.control}
                name="generalThoughts"
                render={({ field }) => (
                  <FormItem className="col-span-1 sm:col-span-2">
                    <FormLabel className="text-[#212529] font-medium">
                      General Thoughts (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share any additional thoughts about this resource..."
                        className="min-h-[100px] border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[#DC3545]" />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="flex justify-self-center items-center space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="border-[#DEE2E6] rounded-full text-[#6C757D] hover:bg-[#F8F9FA]"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#007BFF] rounded-full text-white hover:bg-[#0056b3]"
              >
                Share Resource
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ShareResourceModal;