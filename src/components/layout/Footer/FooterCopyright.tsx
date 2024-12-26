export function FooterCopyright() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="text-gray-500 text-sm">
      © {currentYear} humanizeai.plus. All rights reserved.
    </div>
  );
}