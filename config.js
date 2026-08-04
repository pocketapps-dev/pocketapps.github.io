/* PocketApps — Central pricing & promotions config
 * Edit prices and promotions here — all pages read from this file.
 */
window.POCKETAPPS_CONFIG = {
  // --- Plans ---
  plans: {
    free: {
      name: 'Free',
      price: '€0',
      period: 'para sempre',
    },
    premium: {
      name: 'Premium',
      priceMonthly: 1.49,        // € per month
      priceTotal: 17.88,         // € total charged (annual)
      period: 'por ano',
      monthlyNote: '€1.49/mês',
    },
    annual: {
      name: 'Premium Anual',
      price: '€14.99',
      period: 'por ano (€1.25/mês)',
    },
    founder: {
      name: 'Founder',
      price: '€29.99',
      period: 'pagamento único (lifetime)',
      promotion: '50% OFF',
      promotionNote: 'Promoção limitada a 500 códigos',
    },
  },

  // --- Themes teaser ---
  themesTeaser: {
    title: 'Temas',
    subtitle: 'Personaliza a aparência das tuas apps.',
  },
};