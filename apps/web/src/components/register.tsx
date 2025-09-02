import { redirect } from '@tanstack/react-router';
import type React from 'react';
import { useState } from 'react';
import type { signUp } from '../lib/auth-client';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface RegisterProps {
  onRegister: typeof signUp;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    await onRegister.email(
      {
        email,
        password,
        name,
        roles: ['user'],
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
      <h2 className="text-xl font-bold mb-2">Register</h2>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
        {loading ? 'Registering...' : 'Register'}
      </Button>
    </form>
  );
};

export default Register;
