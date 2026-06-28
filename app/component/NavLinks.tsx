import Link from 'next/link';

const NavigationLinks = () => (
  <>
    <Link
      className="flex scale-95 flex-col items-center justify-center rounded-full bg-[#fe9800] px-4 py-1 text-xs font-medium text-[#643900] transition-transform active:scale-90 dark:bg-[#8a5100] dark:text-white"
      href="/"
    >
      <span>Home</span>
    </Link>
    <Link
      className="flex scale-95 flex-col items-center justify-center rounded-full px-3 py-1 text-xs font-medium text-[#44474c] transition-transform hover:bg-[#e6e8e8] active:scale-90 dark:text-[#191c1d] dark:hover:bg-[#e1e3e3]"
      href="/profile"
    >
      <span>Profile</span>
    </Link>
    <Link
      className="flex scale-95 flex-col items-center justify-center rounded-full px-3 py-1 text-xs font-medium text-[#44474c] transition-transform hover:bg-[#e6e8e8] active:scale-90 dark:text-[#191c1d] dark:hover:bg-[#e1e3e3]"
      href="/cart"
    >
      <span>Cart</span>
    </Link>
    <Link
      className="flex scale-95 flex-col items-center justify-center rounded-full px-3 py-1 text-xs font-medium text-[#44474c] transition-transform hover:bg-[#e6e8e8] active:scale-90 dark:text-[#191c1d] dark:hover:bg-[#e1e3e3]"
      href="/order"
    >
      <span>Orders</span>
    </Link>
  </>
);

export default NavigationLinks;
