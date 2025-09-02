import { redirect } from '@tanstack/react-router';
import type React from 'react';
import { useState } from 'react';
import type { signIn } from '../lib/auth-client';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface LoginProps {
  onLogin: typeof signIn;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    await onLogin.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          redirect({ to: '/' });
        },
        onError: (error) => {
          setError(error.error.message);
        },
      }
    );
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto w-full">
      <h2 className="text-xl font-bold mb-2">Login</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};

export default Login;
