import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CaptchaProps {
  onVerify: (token: string | null) => void;
  className?: string;
}

interface CaptchaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (token: string | null) => void;
  onSubmit: () => void;
}

export const Captcha: React.FC<CaptchaProps> = ({ onVerify, className }) => {
  // Using test site key for development - replace with your actual site key in production
  const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  return (
    <div className={className}>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onVerify}
        theme="light"
      />
    </div>
  );
};

export const CaptchaModal: React.FC<CaptchaModalProps> = ({ 
  isOpen, 
  onClose, 
  onVerify, 
  onSubmit 
}) => {
  const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);
  const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    onVerify(token);
  };

  const handleSubmit = () => {
    if (captchaToken) {
      onSubmit();
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Security Verification</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Please complete the captcha to submit your form.
          </p>
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={handleCaptchaChange}
              theme="light"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={!captchaToken}
              className="flex-1 bg-gradient-primary hover:opacity-90"
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};