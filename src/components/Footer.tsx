export function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10 backdrop-blur-sm" />
      <div className="relative container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <p className="text-purple-200 text-sm text-center">
            © 2024 - SaaScraft Studio (India) Private Limited. <br />
            All rights reserved. All trademarks are properties of their
            respective owners. Terms of Service, Cookie Policy, Privacy Policy
            and Content Policies.
          </p>
        </div>
      </div>
    </footer>
  );
}
