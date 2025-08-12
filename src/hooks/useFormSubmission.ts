import { useState } from 'react';
import { mongoService, FormSubmission, ApiResponse } from '../services/mongoService';
import { useToast } from './use-toast';

export interface FormData {
  email: string;
  file?: File;
  type: 'plagiarism-report' | 'plagiarism-removal' | 'ai-report' | 'drillbit-report' | string;
  captchaToken: string;
}

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<FormSubmission | null>(null);
  const { toast } = useToast();

  const submitForm = async (formData: FormData): Promise<boolean> => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      let fileUploadResult: ApiResponse<{ fileUrl: string; fileName: string }> | null = null;

      // Upload file if present
      if (formData.file) {
        fileUploadResult = await mongoService.uploadFile(formData.file, formData.type);
        
        if (!fileUploadResult.success) {
          toast({
            title: "File Upload Failed",
            description: fileUploadResult.error || "Failed to upload file",
            variant: "destructive",
          });
          return false;
        }
      }

      // Prepare submission data
      const submissionData = {
        type: formData.type,
        email: formData.email,
        captchaToken: formData.captchaToken,
        ...(formData.file && {
          fileName: formData.file.name,
          fileSize: formData.file.size,
        }),
        ...(fileUploadResult?.data && {
          additionalData: {
            fileUrl: fileUploadResult.data.fileUrl,
            uploadedFileName: fileUploadResult.data.fileName,
          }
        })
      };

      // Submit form
      const result = await mongoService.submitForm(submissionData);

      if (result.success && result.data) {
        setSubmissionResult(result.data);
        toast({
          title: "Form Submitted Successfully",
          description: result.message || "Your form has been submitted and is being processed.",
        });
        return true;
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "Failed to submit form",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error",
        description: "An unexpected error occurred while submitting the form.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSubmission = () => {
    setSubmissionResult(null);
  };

  return {
    submitForm,
    isSubmitting,
    submissionResult,
    resetSubmission,
  };
};