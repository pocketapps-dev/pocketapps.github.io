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
      note: 'Por conta',
    },
    premium: {
      name: 'Premium',
      priceMonthly: 1.49,      // € reference (monthly cost)
      priceTotal: 14.99,       // € billed per year — todas as apps
      period: 'por ano',
      monthlyNote: '€1.49/mês',
      scope: 'todas as apps',
    },
    founder: {
      name: 'Founder',
      pricePerApp: 25,         // € full price per app
      promotion: '50% OFF',
      promotionThreshold: 5,   // nº de founders na BD a partir do qual o desconto termina
    },
  },

  // --- Checkout ---
  ivaNote: 'Preços sem IVA. IVA cobrado no checkout.',
  comingSoonLabel: 'Em breve',

  // --- Themes teaser ---
  themesTeaser: {
    title: 'Temas',
    subtitle: 'Personaliza a aparência das tuas apps.',
  },
};
