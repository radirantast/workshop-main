export function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing-content">
        <div className="space-y-8 mb-16">
          <div className="space-y-4">
            <div className="divider divider-black"></div>
            <h2 className="title-section text-black">
              Инвестиция
            </h2>
          </div>
          <p className="subtitle" style={{ maxWidth: '32rem', margin: '0 auto' }}>
            Един ден интензивно обучение, което ще промени начина ви на работа
          </p>
        </div>

        <div className="card pricing-card">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="price">450 лв</div>
              <p className="price-note">еднократно плащане</p>
            </div>

            <div className="space-y-4">
              <div style={{ width: '100%', height: '1px', backgroundColor: '#ddd' }}></div>
              <ul className="features-list space-y-4">
                <li>• 8 часа интензивно обучение</li>
                <li>• Работа с професионална модел и стилист</li>
                <li>• Две различни светлинни схеми</li>
                <li>• Готови снимки за портфолио</li>
                <li>• Практическо обучение по постпродукция</li>
                <li>• Индивидуално внимание към всеки студент</li>
              </ul>
            </div>

            <button 
              className="btn btn-secondary btn-full"
              onClick={() => window.open('https://www.paypal.com/invoice/p/#PKTEPGAEYWQLPYMQ', '_blank')}
            >
              Резервирайте място
            </button>
          </div>
        </div>

        <p className="pricing-note">
          Ограничени места • Максимум 6 участника
        </p>
      </div>
    </section>
  );
}