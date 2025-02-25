import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg" alt="Profile picture" />
            <AvatarFallback>
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
        </div>
        <Button type="button" variant="outline" className='bg-black text-white' disabled={isLoading}>
          Change Profile Picture
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            {...register("firstName", {
              required: "First Name is required",
              pattern: {
                value: /^[A-Za-z]+/,
                message: "Enter a valid Name",
              },
            })}
            id="firstName"
            placeholder="John"
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            {...register("lastName", {
              required: "Last Name is required",
              pattern: {
                value: /^[A-Za-z]+/,
                message: "Enter a valid Name",
              },
            })}
            id="lastName"
            placeholder="Doe"
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid Email",
              },
            })}
            id="email"
            type="email"
            placeholder="john@example.com"
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            {...register("phone", {
              required: "Phone is required",
            })}
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            disabled={isLoading}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="medicalHistory">Medical History</Label>
        <Textarea
          {...register("medicalHistory", {
            required: "Medical History is required",
          })}
          id="medicalHistory"
          placeholder="Enter any relevant medical history..."
          className="min-h-[100px]"
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="medications">Current Medications</Label>
        <Textarea
          {...register("medications", {
            required: "Medications is required",
          })}
          id="medications"
          placeholder="List your current medications..."
          className="min-h-[100px]"
          disabled={isLoading}
        />
      </div>
      <Button type="submit" variant='outline' disabled={isLoading} className='bg-black text-white'>
        {isLoading ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
}
