const AdminNav = () => {
  return (
    <aside className="bg-surface-container dark:bg-surface-container-high border-outline-variant dark:border-outline fixed top-14 left-0 z-30 hidden h-[calc(100vh-3.5rem)] w-64 flex-col gap-4 border-r py-6 md:flex">
      <div className="mb-4 flex items-center gap-3 px-4">
        <div className="bg-secondary-container flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
          <span className="material-symbols-outlined text-on-secondary-container">
            person
          </span>
        </div>
        <div className="overflow-hidden">
          <p className="text-primary truncate text-[18px] leading-[24px] font-bold">
            Alex Admin
          </p>
          <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
            Store Owner
          </p>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        <div className="bg-secondary-container text-on-secondary-container mx-2 flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 font-bold transition-all active:scale-98">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[14px] leading-[20px]">Dashboard</span>
        </div>
        <div className="text-on-surface-variant hover:bg-surface-variant mx-2 flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 transition-all active:scale-98">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[14px] leading-[20px]">Inventory</span>
        </div>
        <div className="text-on-surface-variant hover:bg-surface-variant mx-2 flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 transition-all active:scale-98">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[14px] leading-[20px]">Orders</span>
        </div>
        <div className="text-on-surface-variant hover:bg-surface-variant mx-2 flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 transition-all active:scale-98">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[14px] leading-[20px]">Settings</span>
        </div>
      </nav>
    </aside>
  );
};

export default AdminNav;
