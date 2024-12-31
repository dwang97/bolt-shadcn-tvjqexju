import { Mail, Info } from 'lucide-react';

export function HelpAndSupport() {
  return (
    <div className="rounded-lg border border-amber-200/50 bg-white p-6">
      <h2 className="text-xl font-serif text-amber-800 mb-6">Help & Terms</h2>

      <div className="space-y-8">
        <div>
          <h3 className="font-serif text-amber-800 mb-4">Support center</h3>
          <a
            href="mailto:support@humanizeai.plus"
            className="inline-flex items-center text-amber-700 hover:text-amber-800"
          >
            <Mail className="w-4 h-4 mr-2" />
            support@humanizeai.plus
          </a>
          <div className="text-sm text-amber-600 mt-1">
            Response in 1-2 business days
          </div>
        </div>

        <div className="flex items-start space-x-2 text-amber-600 bg-amber-50/50 p-4 rounded-lg">
          <Info className="w-5 h-5 text-amber-700 mt-0.5" />
          <p className="text-sm">
            If you were charged words but could not use them properly, please contact us.
            We can refund them back as word credits.
          </p>
        </div>

        <div className="flex gap-6 pt-4 border-t border-amber-100">
          <a href="https://static.aceessay.ai/aceessay/PlatformServiceAgreement.html" target="_blank" className="text-amber-700 hover:text-amber-800 hover:underline">
            Platform Service Agreement
          </a>
          <a href="https://static.aceessay.ai/aceessay/PrivacyPolicy.html" target="_blank" className="text-amber-700 hover:text-amber-800 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}