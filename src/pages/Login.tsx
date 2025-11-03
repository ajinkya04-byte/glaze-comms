import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Implement Supabase authentication
      toast.success("Login functionality will be implemented soon!");
      console.log("Login attempt:", { email });
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="glass-card rounded-3xl p-8 animate-scale-in">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <MessageCircle className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold">ChatApp</span>
          </div>

          <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
          <p className="text-center text-foreground/70 mb-8">
            Sign in to continue chatting
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="glass-card border-white/30 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="glass-card border-white/30 focus:border-primary"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-foreground/70">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-foreground/70 hover:text-foreground">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
