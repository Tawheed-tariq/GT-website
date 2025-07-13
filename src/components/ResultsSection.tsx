const ResultsSection = () => {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Quantitative Results on Mammogram Datasets
        </h2>
        
        {/* Evaluation Metric */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Evaluation Metric</h3>
          <div className="prose prose-lg max-w-none text-justify leading-relaxed text-foreground">
            <p className="mb-4">
              We use Free-Response Receiver Operating Characteristic (<strong>FROC</strong>) curves for reporting our results. 
              The curves provide a graphical representation of sensitivity/recall values at different false positives per image (<strong>FPI</strong>).
            </p>
            <p className="mb-8">
              We follow related works in this area and consider a prediction as true positive if the center of 
              the predicted bounding box lies within the ground-truth box.
            </p>
            <p className="mb-8">
              Table 1 shows the comparative results with other domain adaptation techniques, including those proposed for natural 
              images. Fig. (4) depicts corresponding <strong>FROC</strong> curves comparison with the nearest competitors only (to avoid clutter).
            </p>
          </div>
        </div>

        {/* Results Table */}
        <div className="text-center mb-16">
          <img 
            src="https://dmaster-iitd.github.io/webpage/static/images//results1.png" 
            alt="Quantitative Results Table" 
            className="w-full max-w-5xl mx-auto rounded-lg shadow-medium"
          />
        </div>

        {/* Qualitative Results */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Quantitative Results</h3>
          <div className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Qualitative result comparison on in-house, <strong>DDSM</strong>, and <strong>RSNA-BSD1K</strong> datasets. 
              Red boxes show the ground truth, and blue boxes show the predictions.
            </p>
          </div>
          
          <div className="text-center">
            <img 
              src="https://dmaster-iitd.github.io/webpage/static/images/quantitative.png" 
              alt="Qualitative Results Comparison" 
              className="w-full max-w-5xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;