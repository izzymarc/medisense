import React, { useState } from 'react';
import { FormInput } from '../auth/FormInput';
import { SubmitButton } from '../auth/SubmitButton';

interface ProfileSettingsProps {
  user: {
    name: string;
    email: string;
  };
}

export function ProfileSettings({ user }: ProfileSettingsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // TODO: Implement profile update
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Profile updated successfully');
    } catch (error) {
      setMessage('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id="name"
          name="name"
          type="text"
          label="Name"
          defaultValue={user.name}
          required
        />

        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email"
          defaultValue={user.email}
          required
        />

        <div className="space-y-6">
          <h3 className="text-lg font-medium">Change Password</h3>
          <FormInput
            id="currentPassword"
            name="currentPassword"
            type="password"
            label="Current Password"
          />
          <FormInput
            id="newPassword"
            name="newPassword"
            type="password"
            label="New Password"
          />
          <FormInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm New Password"
          />
        </div>

        {message && (
          <div className={`p-4 rounded ${
            message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <SubmitButton isLoading={isLoading}>
          Save Changes
        </SubmitButton>
      </form>
    </div>
  );
}