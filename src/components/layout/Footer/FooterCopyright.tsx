export function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-gray-500 text-sm flex gap-6">
      <div>© {currentYear} humanizeai.plus. All rights reserved.</div>
      <a
        href="https://static.aceessay.ai/aceessay/PlatformServiceAgreement.html"
        target="_blank"
        className="transition-colors hover:text-gray-300"
      >Platform Service Agreement</a>
      <a
        href="https://static.aceessay.ai/aceessay/PrivacyPolicy.html"
        target="_blank"
        className="transition-colors hover:text-gray-300"
      >Privacy Policy</a>
    </div>
  );
}