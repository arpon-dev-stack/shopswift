const NavigationLinks = () => (
  <>
    <a
      className="flex scale-95 flex-col items-center justify-center rounded-full bg-[#fe9800] px-4 py-1 text-xs font-medium text-[#643900] transition-transform active:scale-90 dark:bg-[#8a5100] dark:text-white"
      href="#"
    >
      <span>Home</span>
    </a>
    <a
      className="flex scale-95 flex-col items-center justify-center rounded-full px-3 py-1 text-xs font-medium text-[#44474c] transition-transform hover:bg-[#e6e8e8] active:scale-90 dark:text-[#191c1d] dark:hover:bg-[#e1e3e3]"
      href="#"
    >
      <span>Profile</span>
    </a>
    <a
      className="flex scale-95 flex-col items-center justify-center rounded-full px-3 py-1 text-xs font-medium text-[#44474c] transition-transform hover:bg-[#e6e8e8] active:scale-90 dark:text-[#191c1d] dark:hover:bg-[#e1e3e3]"
      href="#"
    >
      <span>Cart</span>
    </a>
    <a
      className="flex scale-95 flex-col items-center justify-center rounded-full px-3 py-1 text-xs font-medium text-[#44474c] transition-transform hover:bg-[#e6e8e8] active:scale-90 dark:text-[#191c1d] dark:hover:bg-[#e1e3e3]"
      href="#"
    >
      <span>Orders</span>
    </a>
  </>
);

export default NavigationLinks;
