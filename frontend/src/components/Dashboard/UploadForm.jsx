import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

export default function UploadForm() {
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
      <div className="grid w-full gap-4">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="eegFile">EEG Data File</Label>
          <div className="flex items-center gap-4">
            <Input
              {...register("eegFile", {
                required: "EEG File is required",
              })}
              id="eegFile"
              type="file"
              accept=".edf,.bdf,.csv"
              disabled={isLoading}
              className="cursor-pointer "
            />
            <Button type="submit" disabled={isLoading} variant='outline' className='bg-black text-white'>
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Supported formats: .edf, .bdf, .csv (max size: 100MB)
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            placeholder="Add any notes about the recording..."
            disabled={isLoading}
          />
        </div>
      </div>
    </form>
  );
}
