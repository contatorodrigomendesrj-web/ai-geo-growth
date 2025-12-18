import { CreditCard } from "lucide-react";

const PaymentIcons = () => {
  return (
    <div className="flex items-center gap-6 mt-4 justify-center lg:justify-start opacity-70">
      {/* Pix */}
      <div className="flex items-center gap-2 text-muted-foreground">
        <svg
          width="20"
          height="20"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="flex-shrink-0"
        >
          <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.9 231.1 518.9 200.8 488.6L124.2 412.1C124.2 412.1 124.2 412.1 124.2 412.1L103.3 391.2H119.4C139.4 391.2 158.3 383.4 172.5 369.2L242.4 292.5ZM262.5 218.9C257.1 224.4 247.9 224.5 242.4 218.9L172.5 142.3C158.3 128.1 139.4 120.2 119.4 120.2H103.3L124.2 99.3L200.8 22.8C231.1-7.60001 280.3-7.60001 310.6 22.8L407.7 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9ZM60.3 163.4L103.3 120.3H119.4C131.5 120.3 143.1 125.1 151.8 133.7L228.4 210.3C239 220.9 252.9 226.2 266.8 226.2C280.7 226.2 294.6 220.9 305.2 210.3L382.2 133.3C390.9 124.6 402.5 119.8 414.6 119.8H430.7L473.7 162.8C504 193.1 504 242.3 473.7 272.6L430.7 315.6L414.6 315.7C402.5 315.7 390.9 310.8 382.2 302.2L305.2 225.2C283.8 203.8 249.8 203.8 228.4 225.2L151.8 301.8C143.1 310.5 131.5 315.3 119.4 315.3H103.3L60.3 272.3C29.97 242 29.97 192.8 60.3 163.4Z" />
        </svg>
        <span className="text-xs">Pix</span>
      </div>
      
      {/* Credit Card */}
      <div className="flex items-center gap-2 text-muted-foreground">
        <CreditCard className="w-5 h-5 flex-shrink-0" />
        <span className="text-xs leading-tight">Cartão de<br className="sm:hidden" /> Crédito</span>
      </div>
    </div>
  );
};

export default PaymentIcons;
