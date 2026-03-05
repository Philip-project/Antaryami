import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-card">
        <div className="text-center mb-6">
          <span className="text-4xl">🔮</span>
          <h1 className="text-2xl font-display font-bold mt-2">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {isSignup ? "Sign up to get your first consultation free" : "Login to continue your astrology journey"}
          </p>
        </div>

        <div className="space-y-4">
          {isSignup && <Input placeholder="Full Name" />}
          <Input placeholder="Email or Phone Number" type="email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full gradient-saffron border-0 text-primary-foreground">
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
          <div className="relative flex justify-center"><span className="bg-card px-3 text-xs text-muted-foreground">or continue with</span></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full">Google</Button>
          <Button variant="outline" className="w-full">Phone OTP</Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsSignup(!isSignup)} className="text-primary font-medium hover:underline">
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
