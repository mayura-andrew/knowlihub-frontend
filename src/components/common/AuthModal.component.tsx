import React from 'react';
import { Github, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VerificationMessage from './VerificationMesage.component';
import ProfileSetupModal from './ProfileSetupModal.component';

const signUpSchema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and dashes'),
  email: z.string().email('Please enter a valid email'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(1, 'Password is required'),
});

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}
const AuthModal: React.FC<AuthModalProps> = ({ open, onOpenChange, onSuccess }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [socialLoading, setSocialLoading] = React.useState<string | null>(null);
  const [verificationMessageOpen, setVerificationMessageOpen] = React.useState(false);
  const [profileSetupOpen, setProfileSetupOpen] = React.useState(false);

  const signUpForm = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  interface AuthFormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  interface LoginFormValues {
    email: string;
    password: string;
  }

  const handleEmailSignUp = async (values: AuthFormValues) => {
    setIsLoading(true);
    try {
      console.log('Sign up values:', values);
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSuccess?.();
      onOpenChange(false);
      setVerificationMessageOpen(true);
    } catch (error) {
      console.error('Sign up error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async (values: LoginFormValues) => {
    setIsLoading(true);
    try {
      console.log('Login values:', values);
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSuccess?.();
      onOpenChange(false);
      setProfileSetupOpen(true);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };


  const handleSocialAuth = async (provider: string) => {
    setSocialLoading(provider);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSuccess?.();
      onOpenChange(false);
    } catch (error) {
      console.error(`${provider} auth error:`, error);
    } finally {
      setSocialLoading(null);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[400px] p-0 bg-white font-['Roboto']">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="w-full rounded-none h-12">
              <TabsTrigger value="login" className="w-1/2 data-[state=active]:bg-white">Sign In</TabsTrigger>
              <TabsTrigger value="signup" className="w-1/2 data-[state=active]:bg-white">Sign Up</TabsTrigger>
            </TabsList>

            <div className="p-4 pt-6 space-y-4">
              <TabsContent value="login" className="mt-0">
                <div className="text-center text-sm text-[#495057] mb-4">
                  Login via your credentials or continue with Google or GitHub. If you're new, no account yet? Click the Sign Up tab.
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="w-full text-sm"
                    onClick={() => handleSocialAuth('google')}
                    disabled={isLoading || socialLoading !== null}
                  >
                    {socialLoading === 'google' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <svg className="h-4 w-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full text-sm"
                    onClick={() => handleSocialAuth('github')}
                    disabled={isLoading || socialLoading !== null}
                  >
                    {socialLoading === 'github' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Github className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-muted-foreground">or</span>
                  </div>
                </div>

                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(handleEmailLogin)} className="space-y-3">
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email" className="h-9" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="password" placeholder="Password" className="h-9" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full h-9 px-6 py-2 rounded-full bg-[#007BFF] text-white border border-[#007BFF]
                               hover:bg-[#0056b3] transition-all duration-300"
                      disabled={isLoading || socialLoading !== null}
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Sign In
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="signup" className="mt-0">
                <div className="text-center text-sm text-[#495057] mb-4">
                  Join us today! Create an account to get started.
                </div>
                <Form {...signUpForm}>
                  <form onSubmit={signUpForm.handleSubmit(handleEmailSignUp)} className="space-y-3">
                    <FormField
                      control={signUpForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Username" className="h-9" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="email" placeholder="Email" className="h-9" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="password" placeholder="Password" className="h-9" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="password" placeholder="Confirm password" className="h-9" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full h-9 px-6 py-2 rounded-full bg-[#007BFF] text-white border border-[#007BFF]
                               hover:bg-[#0056b3] transition-all duration-300"
                      disabled={isLoading || socialLoading !== null}
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Create Account
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </div>
          </Tabs>
        </DialogContent>
      </Dialog>

      <VerificationMessage 
        open={verificationMessageOpen} 
        onClose={() => setVerificationMessageOpen(false)} 
      />

      <ProfileSetupModal 
        open={profileSetupOpen} 
        onClose={() => setProfileSetupOpen(false)} 
      />
    </>
  );
};

export default AuthModal;