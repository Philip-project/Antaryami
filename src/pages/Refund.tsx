const Refund = () => (
  <div className="container py-8 max-w-3xl prose prose-sm">
    <h1 className="text-3xl font-display font-bold mb-6">Refund Policy</h1>
    <div className="bg-card border border-border rounded-xl p-6 shadow-card space-y-4 text-muted-foreground text-sm leading-relaxed">
      <h3 className="font-display font-semibold text-foreground">Wallet Refunds</h3>
      <p>Wallet balance refunds can be requested within 7 days of recharge if no consultation has been availed. A processing fee of 5% applies.</p>
      <h3 className="font-display font-semibold text-foreground">Consultation Refunds</h3>
      <p>If you experience technical issues during a consultation (disconnection, poor quality), you may request a refund within 24 hours. Our team will review and process eligible refunds within 5-7 business days.</p>
      <h3 className="font-display font-semibold text-foreground">Product Refunds</h3>
      <p>Physical products (gemstones, rudraksha, yantras) can be returned within 7 days of delivery if unused and in original packaging. Return shipping costs are borne by the customer.</p>
    </div>
  </div>
);
export default Refund;
