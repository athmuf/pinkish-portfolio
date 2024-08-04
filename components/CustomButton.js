export default function CustomButton({ text, icons }) {
  return (
    <button className="flex items-center border text-base md:text-lg border-gray-900 hover:border-dusty-rose bg-white py-2 px-12 rounded-2xl hover:bg-cream active:bg-dusty-rose transition-all duration-300">
      {text} <span className="pl-3">{icons}</span>
    </button>
  );
}
