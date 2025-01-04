import React, { useState } from 'react';
    import { FormInput } from '../auth/FormInput';
    import { SubmitButton } from '../auth/SubmitButton';
    import { useAuth } from '../../contexts/AuthContext';
    import { Pencil } from 'lucide-react';

    interface ProfileSettingsProps {
      user: {
        name: string;
        email: string;
      };
    }

    export function ProfileSettings({ user }: ProfileSettingsProps) {
      const [isLoading, setIsLoading] = useState(false);
      const [message, setMessage] = useState('');
      const { updateProfile } = useAuth();
      const [isEditing, setIsEditing] = useState(false);
      const [formValues, setFormValues] = useState({
        name: user.name,
        email: user.email,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      const [profilePicture, setProfilePicture] = useState<File | null>(null);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };

      const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
          setProfilePicture(e.target.files[0]);
        }
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        if (formValues.newPassword && formValues.newPassword !== formValues.confirmPassword) {
          setMessage('New passwords do not match');
          setIsLoading(false);
          return;
        }

        try {
          const formData = new FormData();
          formData.append('name', formValues.name);
          formData.append('email', formValues.email);
          if (formValues.currentPassword) formData.append('currentPassword', formValues.currentPassword);
          if (formValues.newPassword) formData.append('newPassword', formValues.newPassword);
          if (profilePicture) formData.append('profilePicture', profilePicture);

          await updateProfile({
            name: formValues.name,
            email: formValues.email,
            currentPassword: formValues.currentPassword || undefined,
            newPassword: formValues.newPassword || undefined,
            profilePicture: profilePicture ? URL.createObjectURL(profilePicture) : undefined
          });
          setMessage('Profile updated successfully');
        } catch (error: any) {
          setMessage(error.response?.data?.error || 'Failed to update profile');
        } finally {
          setIsLoading(false);
          setIsEditing(false);
        }
      };

      return (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Profile Settings</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
            >
              <Pencil className="h-4 w-4" />
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                id="name"
                name="name"
                type="text"
                label="Name"
                value={formValues.name}
                onChange={handleChange}
                required
              />

              <FormInput
                id="email"
                name="email"
                type="email"
                label="Email"
                value={formValues.email}
                onChange={handleChange}
                required
              />

              <div className="space-y-6">
                <h3 className="text-lg font-medium">Change Password</h3>
                <FormInput
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  label="Current Password"
                  value={formValues.currentPassword}
                  onChange={handleChange}
                />
                <FormInput
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  label="New Password"
                  value={formValues.newPassword}
                  onChange={handleChange}
                />
                <FormInput
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  label="Confirm New Password"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handlePictureChange}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
          ) : (
            <div className="space-y-4">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          )}
        </div>
      );
    }
