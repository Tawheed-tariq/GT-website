const TeaserSection = () => {
  return (
    <section className="bg-background py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Teaser Image */}
        <div className="text-center mb-8 animate-fade-in">
          <img 
            src="https://dmaster-iitd.github.io/webpage/static/images/teasor.png" 
            alt="D-MASTER Teaser Results" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-medium hover-scale transition-all duration-300"
          />
        </div>

        {/* Caption */}
        <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Fig. (a) and (b) depict false positive predictions by current teacher student models in cross-domain <strong>BCDM</strong>. 
            Red boxes indicate ground truth, yellow boxes show Adaptive Teacher predictions, and green boxes indicate predictions from <strong>D-MASTER</strong>. 
            As shown in (c), our approach effectively mitigates the domain gap and makes accurate predictions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;