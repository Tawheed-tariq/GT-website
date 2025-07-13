const ArchitectureSection = () => {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          <strong>D-MASTER</strong> Architecture
        </h2>
        
        <div className="mb-8">
          <p className="text-justify leading-relaxed text-foreground mb-6">
            We introduce <strong>D-MASTER</strong>, a transformer-based Domain-invariant Mask Annealed Student Teacher Autoencoder 
            Framework for cross-domain breast cancer detection from mammograms (<strong>BCDM</strong>), integrating a novel mask-annealing technique and adaptive 
            confidence refinement module. Unlike pretraining with mask autoencoders (MAEs), leveraging massive datasets for training and 
            then fine-tuning on smaller datasets, we present a novel learnable masking technique for the MAE branch 
            that generates masks of different complexities, which are reconstructed by the DefDETR encoder and decoder.
          </p>
          
          <p className="text-justify leading-relaxed text-foreground">
            Our approach, as a self-supervised task on target images, enables the encoder to acquire domain-invariant features and learn 
            better target representations.
          </p>
        </div>

        <div className="text-center animate-fade-in">
          <img 
            src="https://dmaster-iitd.github.io/webpage/static/images/architecture.png" 
            alt="D-MASTER Architecture" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-medium hover-scale transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;