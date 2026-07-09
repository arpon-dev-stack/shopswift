import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-[#D5D9D9] bg-white p-2">
      <div>
        <div className="group relative mb-2 aspect-square w-full overflow-hidden">
          <Image
            fill
            className="h-full w-full rounded-sm object-cover mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
            alt="Premium Wireless Headphones"
            src="/image.png"
          />
          <span className="absolute top-0 left-0 rounded-sm bg-[#fe9800] px-2 py-1 text-[11px] font-bold text-[#643900]">
            Limited Time Deal
          </span>
        </div>
        <h4 className="line-clamp-2 min-h-[40px] text-sm text-[#191c1d]">
          Premium Wireless Noise-Canceling Headphones
        </h4>
        <div className="mt-1 flex items-center gap-1">
          <div className="flex text-xs text-[#fe9800]">★★★★☆</div>
          <span className="text-[11px] text-[#4ca0b6]">2,483</span>
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-bold text-[#191c1d]">$129.99</span>
          <span className="text-[11px] text-[#75777c] line-through">
            $299.99
          </span>
        </div>
        <div className="mt-1 flex items-center gap-1">
          <span className="text-sm font-extrabold text-blue-600 italic">
            prime
          </span>
          <span className="text-[11px] text-[#44474c]">FREE Delivery</span>
        </div>
      </div>
      <button
        // onClick={handleAddToCart}
        className="mt-4 w-full rounded-lg bg-[#fe9800] py-2 text-sm font-semibold text-[#0e1a28] transition-colors hover:bg-[#ffdcbd]"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
