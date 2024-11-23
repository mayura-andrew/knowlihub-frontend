import React from 'react';
import { Github, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sign Up Form Schema
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

// Login Form Schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(1, 'Password is required'),
});

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'login' | 'signup';
  onSuccess?: () => void;
  onSwitchMode: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  open,
  onOpenChange,
  type,
  onSuccess,
  onSwitchMode,
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [socialLoading, setSocialLoading] = React.useState<'google' | 'github' | null>(null);

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleEmailSignUp = async (values: z.infer<typeof signUpSchema>) => {
    setIsLoading(true);
    try {
      // Implement your sign up logic here
      console.log('Sign up values:', values);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      onSuccess?.();
      onOpenChange(false);
    } catch (error) {
      console.error('Sign up error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    try {
      // Implement your login logic here
      console.log('Login values:', values);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      onSuccess?.();
      onOpenChange(false);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider: 'google' | 'github') => {
    setSocialLoading(provider);
    try {
      // Implement social auth logic here
      console.log(`${provider} auth initiated`);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      onSuccess?.();
      onOpenChange(false);
    } catch (error) {
      console.error(`${provider} auth error:`, error);
    } finally {
      setSocialLoading(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] bg-white font-['Roboto'] p-6 overflow-y-auto max-h-[90vh] custom-scrollbar">
        <DialogHeader>
          <DialogTitle className="text-[#212529] text-2xl font-semibold text-center">
            {type === 'signup' ? 'Create an Account' : 'Welcome Back'}
          </DialogTitle>
          <DialogDescription className="text-center text-[#6C757D]">
            {type === 'signup' 
              ? 'Join our community to share and discover learning resources'
              : 'Sign in to access your account'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Social Login Buttons */}
          <div className="grid gap-3">
            <Button
              variant="outline"
              className="w-full border-[#DEE2E6] hover:bg-[#F8F9FA] text-[#212529]"
              onClick={() => handleSocialAuth('google')}
              disabled={isLoading || socialLoading !== null}
            >
              {socialLoading === 'google' ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              )}
              Continue with Google
            </Button>

            <Button
              variant="outline"
              className="w-full border-[#DEE2E6] hover:bg-[#F8F9FA] text-[#212529]"
              onClick={() => handleSocialAuth('github')}
              disabled={isLoading || socialLoading !== null}
            >
              {socialLoading === 'github' ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Github className="mr-2 h-4 w-4" />
              )}
              Continue with GitHub
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#DEE2E6]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-[#6C757D]">Or continue with</span>
            </div>
          </div>

          {/* Email Sign Up Form */}
          {type === 'signup' ? (
            <Form {...signUpForm}>
              <form onSubmit={signUpForm.handleSubmit(handleEmailSignUp)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={signUpForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#212529] font-medium">Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter username"
                            className="border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-[#DC3545]" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signUpForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#212529] font-medium">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter email"
                            className="border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-[#DC3545]" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={signUpForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#212529] font-medium">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Create password"
                          className="border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-[#DC3545]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={signUpForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#212529] font-medium">Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm password"
                          className="border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-[#DC3545]" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#007BFF] text-white hover:bg-[#0056b3]"
                  disabled={isLoading || socialLoading !== null}
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create Account
                </Button>
              </form>
            </Form>
          ) : (
            /* Email Login Form */
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(handleEmailLogin)} className="space-y-6">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#212529] font-medium">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter email"
                          className="border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-[#DC3545]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#212529] font-medium">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter password"
                          className="border-[#DEE2E6] focus:border-[#007BFF] focus:ring-[#007BFF]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-[#DC3545]" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#007BFF] text-white hover:bg-[#0056b3]"
                  disabled={isLoading || socialLoading !== null}
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Sign In
                </Button>
              </form>
            </Form>
          )}
        </div>

        <DialogFooter className="flex flex-col items-center pt-2">
          <p className="text-sm text-[#6C757D]">
            {type === 'signup' ? 'Already have an account?' : "Don't have an account?"}
            {' '}
            <button
              onClick={onSwitchMode}
              className="text-[#007BFF] hover:underline font-medium"
            >
              {type === 'signup' ? 'Sign in' : 'Sign up'}
            </button>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;