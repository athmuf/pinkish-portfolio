export default function CustomButton({ text, icons }) {
  return (
    <button className="flex items-center border text-base md:text-lg border-gray-900 hover:border-dusty-rose bg-white py-2 sm:px-12 px-6 rounded-2xl hover:bg-cream active:bg-dusty-rose transition-all duration-300">
      {text} <span className="pl-3">{icons}</span>
    </button>
  );
}
