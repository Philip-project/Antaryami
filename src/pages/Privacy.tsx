const Privacy = () => (
  <div className="container py-8 max-w-3xl prose prose-sm">
    <h1 className="text-3xl font-display font-bold mb-6">Privacy Policy</h1>
    <div className="bg-card border border-border rounded-xl p-6 shadow-card space-y-4 text-muted-foreground text-sm leading-relaxed">
      <h3 className="font-display font-semibold text-foreground">Information We Collect</h3>
      <p>We collect personal details (name, email, phone), birth details for horoscope services, payment information, and usage data to improve our services.</p>
      <h3 className="font-display font-semibold text-foreground">How We Use Your Information</h3>
      <p>Your data is used to provide astrology consultations, process payments, send notifications, and improve our platform experience.</p>
      <h3 className="font-display font-semibold text-foreground">Data Security</h3>
      <p>We employ industry-standard encryption and security measures to protect your personal information. Consultation chats and call recordings are encrypted end-to-end.</p>
      <h3 className="font-display font-semibold text-foreground">Third-Party Sharing</h3>
      <p>We do not sell your data. Information is shared only with the astrologer you consult and payment processors as needed for transaction processing.</p>
    </div>
  </div>
);
export default Privacy;
