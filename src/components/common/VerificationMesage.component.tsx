import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface VerificationMessageProps {
  open: boolean;
  onClose: () => void;
}

const VerificationMessage: React.FC<VerificationMessageProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-white font-['Roboto'] p-4">
        <DialogHeader>
          <DialogTitle className="text-[#212529] text-2xl font-semibold text-center">
            Verify Your Email
          </DialogTitle>
          <DialogDescription className="text-center text-[#6C757D]">
            We have sent an activation link to your email. Please check your inbox and click the link to activate your account.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center pt-4">
          <Button onClick={onClose} className="bg-[#007BFF] text-white rounded-full hover:bg-[#0056b3]">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationMessage;
