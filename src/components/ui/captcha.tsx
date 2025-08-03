import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
  onVerify: (token: string | null) => void;
  className?: string;
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