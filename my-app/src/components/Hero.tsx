import heroImage from '../assets/IMG_2198.jpg';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-bg">
        <img
          src={heroImage}
          alt="Commercial photography model"
          className="img-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content">
        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="title-hero">
            Комерсиална
            <br />
            фотография
            <span className="text-light-gray"> 1.0</span>
          </h1>
          
          <div className="divider"></div>
          
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('pricing')}
          >
            Записване
          </button>
          <button 
            className="btn btn-link"
            onClick={() => scrollToSection('about')}
          >
            Научете повече
          </button>
        </div>

        {/* Location */}
        <div style={{ paddingTop: '4rem' }}>
          <p className="text-light-gray uppercase tracking-wide" style={{ fontSize: '0.875rem' }}>
            Avenix Studio
          </p>
        </div>
      </div>
    </section>
  );
}