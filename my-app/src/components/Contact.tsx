export function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <div className="space-y-8 mb-16">
          <div className="space-y-4">
            <div className="divider divider-black"></div>
            <h2 className="title-section text-black">
              Контакт
            </h2>
          </div>
          <p className="subtitle">
            Имате въпроси? Свържете се с нас
          </p>
        </div>

        <div className="space-y-12">
          {/* Contact Text */}
          <div className="contact-text space-y-6">
            <p>
              Готови сте да започнете пътешествието си в комерсиалната фотография? 
              Или имате въпроси относно курса?
            </p>
            <p>
              Свържете се с нас директно в Instagram за бърз отговор и персонализирана консултация.
            </p>
          </div>

          {/* Contact Button */}
          <div className="space-y-8">
            <button 
              className="btn btn-secondary"
              onClick={() => window.open('https://www.instagram.com/direct/t/113209413399774/', '_blank')}
            >
              Свържете се с нас
            </button>
            
            <div className="response-time">
              Отговаряме в рамките на 24 часа
            </div>
          </div>

          {/* Studio Info */}
          <div className="contact-info space-y-6">
            <div className="space-y-2">
              <p className="contact-label">Студио</p>
              <p className="contact-value">Avenix Studio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}