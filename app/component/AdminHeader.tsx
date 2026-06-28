import Image from 'next/image';

const AdminHeader = () => {
  return (
    <header className="bg-surface dark:bg-on-surface border-outline-variant dark:border-outline px-gutter sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b py-2">
      <div className="flex items-center gap-2">
        <span
          className="material-symbols-outlined text-primary dark:text-primary-fixed-dim"
          style={{ fontVariationSettings: "'opsz' 24" }}
        >
          storefront
        </span>
        <h1 className="text-primary dark:text-primary-fixed-dim text-[18px] leading-[24px] font-bold tracking-tight">
          Store Manager
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <nav className="mr-4 hidden items-center gap-4 md:flex">
          <span className="text-primary hover:bg-surface-container-low cursor-pointer rounded px-3 py-1 text-[14px] leading-[20px] font-bold transition-colors">
            Dashboard
          </span>
          <span className="text-on-surface-variant hover:bg-surface-container-low cursor-pointer rounded px-3 py-1 text-[14px] leading-[20px] transition-colors">
            Inventory
          </span>
          <span className="text-on-surface-variant hover:bg-surface-container-low cursor-pointer rounded px-3 py-1 text-[14px] leading-[20px] transition-colors">
            Orders
          </span>
        </nav>
        <div className="bg-primary-container border-outline-variant relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border active:opacity-80">
          <Image
            src="/image.png"
            alt="Admin User Profile"
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
