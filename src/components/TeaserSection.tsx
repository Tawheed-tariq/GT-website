const TeaserSection = () => {
  return (
    <section className="bg-background py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Teaser Image */}
        <div className="text-center mb-8 animate-fade-in">
          <img 
            src="1mg1.png"
            alt="grounded teacher Teaser " 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-medium hover-scale transition-all duration-300"
          />
        </div>

        {/* Caption */}
        <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Fig. (a) illustrates the overall architecture of our proposed cross-domain detection framework.
             The Relation Contextual Module <strong>(RCM) </strong>distinguishes between source-similar and source-dissimilar instances to guide a teacher-student detector pair, aided by pseudo-labeling.
              A discriminator and Gradient Reversal Layer <strong>(GRL)</strong> further support domain adaptation. Fig. (b) introduces an Expert Branch that uses a pretrained LVFM Embedder to inject expert-level knowledge via text prompts,
               helping align features semantically and reducing false predictions across domains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;