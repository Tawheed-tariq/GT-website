const AbstractSection = () => {
  return (
    <section className="bg-muted/30 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground animate-fade-in">Abstract</h2>
        
        <div className="prose prose-lg max-w-none text-justify leading-relaxed text-foreground animate-fade-in">
          <p className="mb-4">
            We focus on the problem of Unsupervised Domain Adaptation (<strong>UDA</strong>) for breast cancer detection from 
            mammograms (<strong>BCDM</strong>) problem. Recent advancements have shown that masked image modeling 
            serves as a robust pretext task for <strong>UDA</strong>. However, when applied to cross-domain <strong>BCDM</strong>, these techniques 
            struggle with breast abnormalities such as masses, asymmetries, and micro-calcifications, in part due to the typically much 
            smaller size of region of interest in comparison to natural images. This often results in more false positives per image (<strong>FPI</strong>) 
            and significant noise in pseudo-labels typically used to bootstrap such techniques.
          </p>
          
          <p className="mb-4">
            Recognizing these challenges, we introduce a transformer-based Domain-invariant Mask Annealed 
            Student Teacher autoencoder (<strong>D-MASTER</strong>) framework. <strong>D-MASTER</strong> adaptively masks and reconstructs multiscale feature maps, enhancing the 
            model's ability to capture reliable target domain features. <strong>D-MASTER</strong> also includes adaptive confidence refinement to 
            filter pseudo-labels, ensuring only high-quality detections are considered.
          </p>
          
          <p className="mb-4">
            We also provide a bounding box annotated subset of 1000 mammograms from the RSNA Breast Screening Dataset (referred to as 
            <strong>RSNA-BSD1K</strong>) to support further research in <strong>BCDM</strong>. We evaluate <strong>D-MASTER</strong> 
            on multiple <strong>BCDM</strong> datasets acquired from diverse domains. Experimental 
            results show a significant improvement of 9% and 13% in sensitivity at 0.3 
            <strong>FPI</strong> over state-of-the-art <strong>UDA</strong> techniques on publicly available benchmark 
            INBreast and <strong>DDSM</strong> datasets respectively. We also report an improvement 
            of 11% and 17% on In-house and <strong>RSNA-BSD1K</strong> datasets respectively.
          </p>
          
          <p>
            To promote reproducible research and address the scarcity of accessible resources in <strong>BCDM</strong>, we will publicly 
            release source code, and pre-trained <strong>D-MASTER</strong> model, along with <strong>RSNA-BSD1K</strong> annotations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;