import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PartnerFormContent } from "./PartnerFormContent";
import { Handshake } from "lucide-react";

interface PartnerFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

export function PartnerFormModal({
  open,
  onOpenChange,
  source = "modal_banner",
}: PartnerFormModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8">
        <DialogHeader className="space-y-2 text-left">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-wash text-primary">
            <Handshake className="h-5 w-5" />
          </div>
          <DialogTitle className="font-display text-2xl font-semibold text-foreground">
            Partner with PinkWalk 2026
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Join us as an event partner to amplify breast cancer awareness across Nepal. Fill out your organization details below.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2">
          <PartnerFormContent
            source={source}
            onSuccess={() => {
              // Dialog will stay open to show success state, but can close automatically after delay if desired
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
