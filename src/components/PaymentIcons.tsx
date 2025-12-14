const PaymentIcons = () => {
  const whiteColor = "#FFFFFF";

  return (
    <div className="flex items-center justify-center lg:justify-start gap-3 mt-4 max-w-[280px] mx-auto lg:mx-0">
      {/* Visa */}
      <svg className="h-5 w-auto opacity-80" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.545 1.024L11.433 15.024H7.417L4.413 4.124C4.229 3.416 4.069 3.156 3.517 2.86C2.613 2.38 1.165 1.932 0 1.652L0.093 1.024H6.621C7.505 1.024 8.285 1.588 8.477 2.612L10.109 11.24L14.053 1.024H17.545ZM34.285 10.768C34.301 6.94 28.861 6.728 28.901 5.012C28.913 4.468 29.433 3.892 30.565 3.74C31.125 3.664 32.669 3.604 34.425 4.412L35.157 1.404C34.213 1.052 33.001 0.712 31.485 0.712C28.197 0.712 25.869 2.492 25.849 5.024C25.825 6.9 27.517 7.948 28.789 8.572C30.101 9.212 30.537 9.62 30.529 10.188C30.517 11.04 29.509 11.428 28.565 11.444C26.573 11.476 25.421 10.904 24.501 10.476L23.749 13.588C24.673 14.012 26.389 14.384 28.173 14.4C31.669 14.4 33.973 12.64 34.285 10.768ZM43.553 15.024H46.629L43.953 1.024H40.681C39.913 1.024 39.261 1.468 38.957 2.156L33.877 15.024H37.369L38.069 13.036H42.341L42.757 15.024H43.553ZM39.061 10.468L40.805 5.472L41.817 10.468H39.061ZM24.733 1.024L22.029 15.024H18.701L21.409 1.024H24.733Z" fill={whiteColor}/>
      </svg>
      
      {/* Mastercard */}
      <svg className="h-5 w-auto opacity-80" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="10" r="8" fill={whiteColor} fillOpacity="0.7"/>
        <circle cx="21" cy="10" r="8" fill={whiteColor}/>
      </svg>
      
      {/* Elo */}
      <svg className="h-4 w-auto opacity-80" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2C4.686 2 2 4.686 2 8C2 11.314 4.686 14 8 14C10.21 14 12.117 12.753 13.098 10.934L10.5 9.5C10.098 10.396 9.126 11 8 11C6.343 11 5 9.657 5 8C5 6.343 6.343 5 8 5C9.126 5 10.098 5.604 10.5 6.5L13.098 5.066C12.117 3.247 10.21 2 8 2Z" fill={whiteColor}/>
        <path d="M20 2L16 14H19L20 11H24L25 14H28L24 2H20ZM22 4L23.5 9H20.5L22 4Z" fill={whiteColor}/>
        <path d="M32 2C28.686 2 26 4.686 26 8C26 11.314 28.686 14 32 14C35.314 14 38 11.314 38 8C38 4.686 35.314 2 32 2ZM32 11C30.343 11 29 9.657 29 8C29 6.343 30.343 5 32 5C33.657 5 35 6.343 35 8C35 9.657 33.657 11 32 11Z" fill={whiteColor}/>
      </svg>
      
      {/* Amex */}
      <svg className="h-4 w-auto opacity-80" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2L0 14H4L4.5 12.5H7.5L8 14H12L8 2H4ZM6 4.5L7 10H5L6 4.5Z" fill={whiteColor}/>
        <path d="M14 2L12 8L10 2H6L10 14H14L18 2H14Z" fill={whiteColor}/>
        <path d="M20 2V14H28V11H23V9H28V6H23V5H28V2H20Z" fill={whiteColor}/>
        <path d="M30 2L26 8L30 14H34L30 8L34 2H30Z" fill={whiteColor}/>
      </svg>
      
      {/* Pix */}
      <svg className="h-4 w-auto opacity-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.66 9.53L14.12 13.07C13.73 13.46 13.1 13.46 12.71 13.07L9.17 9.53C8.78 9.14 8.78 8.51 9.17 8.12L12.71 4.58C13.1 4.19 13.73 4.19 14.12 4.58L17.66 8.12C18.05 8.51 18.05 9.14 17.66 9.53Z" fill={whiteColor}/>
        <path d="M6.34 14.47L9.88 10.93C10.27 10.54 10.9 10.54 11.29 10.93L14.83 14.47C15.22 14.86 15.22 15.49 14.83 15.88L11.29 19.42C10.9 19.81 10.27 19.81 9.88 19.42L6.34 15.88C5.95 15.49 5.95 14.86 6.34 14.47Z" fill={whiteColor}/>
      </svg>
      
      {/* Boleto */}
      <svg className="h-4 w-auto opacity-80" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="2" height="12" fill={whiteColor}/>
        <rect x="6" y="2" width="1" height="12" fill={whiteColor}/>
        <rect x="9" y="2" width="2" height="12" fill={whiteColor}/>
        <rect x="13" y="2" width="1" height="12" fill={whiteColor}/>
        <rect x="16" y="2" width="3" height="12" fill={whiteColor}/>
        <rect x="21" y="2" width="1" height="12" fill={whiteColor}/>
        <rect x="24" y="2" width="2" height="12" fill={whiteColor}/>
        <rect x="28" y="2" width="2" height="12" fill={whiteColor}/>
      </svg>
    </div>
  );
};

export default PaymentIcons;
