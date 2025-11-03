import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Send, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const mockUsers = [
  { id: "1", name: "Alice Johnson", status: "online", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
  { id: "2", name: "Bob Smith", status: "offline", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" },
  { id: "3", name: "Charlie Brown", status: "online", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie" },
  { id: "4", name: "Diana Prince", status: "online", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana" },
];

const mockMessages = [
  { id: "1", senderId: "1", text: "Hey! How are you?", timestamp: "10:30 AM", isMine: false },
  { id: "2", senderId: "me", text: "I'm good! How about you?", timestamp: "10:31 AM", isMine: true },
  { id: "3", senderId: "1", text: "Doing great! Want to catch up later?", timestamp: "10:32 AM", isMine: false },
  { id: "4", senderId: "me", text: "Sure! Let's meet at 3 PM", timestamp: "10:33 AM", isMine: true },
];

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-80 glass-card border-r flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Messages</h2>
            <Link to="/">
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <Input
              type="text"
              placeholder="Search users..."
              className="pl-10 glass-card border-white/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* User List */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            {filteredUsers.map((user) => (
              <button
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`w-full p-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors ${
                  selectedUser.id === user.id ? "bg-white/20" : ""
                }`}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  {user.status === "online" && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                  )}
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-foreground/70">{user.status}</p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="glass-card p-4 border-b border-white/20 flex items-center gap-3">
          <Avatar>
            <AvatarImage src={selectedUser.avatar} />
            <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{selectedUser.name}</h3>
            <p className="text-sm text-foreground/70">
              {selectedUser.status === "online" ? "Active now" : "Offline"}
            </p>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4">
            {mockMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isMine ? "justify-end" : "justify-start"} animate-slide-in`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    msg.isMine
                      ? "bg-primary text-primary-foreground"
                      : "glass-card"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 glass-card border-t border-white/20">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 glass-card border-white/30"
            />
            <Button type="submit" size="icon" disabled={!message.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
