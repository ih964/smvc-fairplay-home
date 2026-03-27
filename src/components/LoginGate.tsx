import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const LoginGate = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "Admin26") {
      sessionStorage.setItem("authenticated", "true");
      onLogin();
    } else {
      setError("Onjuiste gebruikersnaam of wachtwoord");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-xl p-8 w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="SMVC Fair Play" className="h-20 w-auto" />
          <h1 className="font-heading font-bold text-xl text-foreground">SMVC Fair Play</h1>
        </div>
        <div className="space-y-4">
          <Input
            placeholder="Gebruikersnaam"
            value={username}
            onChange={(e) => { setUsername(e.target.value); setError(""); }}
          />
          <Input
            type="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
        <Button type="submit" className="w-full">Inloggen</Button>
      </form>
    </div>
  );
};

export default LoginGate;
