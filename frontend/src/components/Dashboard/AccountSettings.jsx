import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from "./DashboardLayout";
import { useSelector } from "react-redux";

export default function AccountSettings() {
  const  user  = useSelector((state) => state.auth.user);

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Email Address</h3>
          <p className="text-sm text-muted-foreground">
            Update your email address and manage verification
          </p>
          <form className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={user.email}
                disabled={isLoading}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button type="submit" disabled={isLoading} className=" ">
                Update Email
              </Button>
              <Button type="button" disabled={isLoading} className=" ">
                Resend Verification
              </Button>
            </div>
          </form>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium">Change Password</h3>
          <p className="text-sm text-muted-foreground">
            Update your password to maintain account security
          </p>
          <form className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current password</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPassword ? "text" : "password"}
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">
                    {showNewPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters and include a number and
                special character
              </p>
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Password"}
            </Button>
          </form>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
          <p className="text-sm text-muted-foreground">
            Add an extra layer of security to your account
          </p>
          <div className="mt-4">
            <Button className=" ">Enable 2FA</Button>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium">Change Theme</h3>
          <div className="mt-4">
            <div>
              <Button
                onClick={toggleDarkMode}
                variant="outline"
              >
                <span className="sr-only">Toggle Dark Mode</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
          <p className="text-sm text-muted-foreground">
            Permanently delete your account and all associated data
          </p>
          <div className="mt-4">
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>
      </div>
  );
}
