import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Zap, Users } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-card fixed top-0 left-0 right-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">ChatApp</span>
          </div>
          <Link to="/login">
            <Button variant="outline" className="glass-card border-white/30 hover:bg-white/20">
              Login
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Connect Instantly,
            <br />
            <span className="gradient-text">Chat Seamlessly</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto">
            Experience real-time messaging with a beautiful, modern interface.
            Stay connected with friends, family, and colleagues.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                Get Started Free
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 glass-card border-white/30 hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose ChatApp?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Real-time Messaging",
                description: "Send and receive messages instantly with our lightning-fast real-time system.",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Your conversations are encrypted and protected. Your privacy is our priority.",
              },
              {
                icon: Zap,
                title: "Always Connected",
                description: "Stay online and never miss a message with our reliable infrastructure.",
              },
              {
                icon: Users,
                title: "Easy to Use",
                description: "Simple, intuitive interface that anyone can use without training.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Sign Up", description: "Create your free account in seconds" },
              { step: "2", title: "Add Friends", description: "Connect with people you know" },
              { step: "3", title: "Start Chatting", description: "Send messages and stay connected" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card rounded-3xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-foreground/90">
              Join thousands of users already chatting on ChatApp
            </p>
            <Link to="/signup">
              <Button size="lg" className="text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all">
                Create Your Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-foreground/70">© 2024 ChatApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
