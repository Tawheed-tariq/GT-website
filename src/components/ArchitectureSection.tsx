const ArchitectureSection = () => {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          <strong>Grounded_Teacher</strong> Architecture
        </h2>
        
        <div className="mb-8">
          <p className="text-justify leading-relaxed text-foreground mb-6">
          Unsupervised Domain Adaptation (UDA) offers astrategy for adapting object detectors to new domains where labeled data is not available.
 Moreover many popular SFOD techniques utilize a self-supervised approach in a student teacher (ST) framework. These methods bootstrap by training on pseudo-labels generated by
 a source-pretrained model [67, 123, 70, 21, 112].However, if the source data is biased, or the domain shift between source and target domains
 is significant, there is noise in the pseudo-labels,which impacts the training of a student model [27]. Since the pseudo-label error is significant,
 the, Exponential Moving Average (EMA) step, which updates the teacher model from the student model’s weight, ends up corrupting the teacher
 model as well leading to a mode collapse [3]. This
 phenomenon of progressive degradation, especially
 in source-free setting where source data is not
 available during adaptation, is visually evident in
 Figure 1, where traditional Mean Teacher frame
works and SF-Student-Teacher frameworks suffer
 from declining detection quality over time, while
 our method remains robust over the epochs.
 To address these challenges, in this paper,
 we introduce our Grounded Teacher (GT), specif
ically designed to tackle context imbalance and
 mode collapse in the SFOD setting. Our approach
 introduces a Relation-Contextual Module (RCM)
 that explicitly models class biases and inter-class
 dynamics within the training data. Leveraging
 these insights, we implement a semantic aug
mentation strategy that enhances minority class
 representation by strategically blending them with
 visually similar majority class instances, drawn
 from our Cropbank repository[140]. This augmen
tation operates bidirectionally across domains,
 simultaneously addressing both class imbalance
 and domain shift. To further mitigate inter-class
 bias, we propose a Semantic-Aware Loss that
 dynamically prioritizes minority classes during
 training, particularly focusing on challenging cases
 where they are most vulnerable to misclassifi
cation as majority classes. Together, these com
ponents form a comprehensive framework that
 holistically addresses representation learning chal
lenges in cross-domain scenarios.
 Another key insight of this paper is that one
 can use learnt representations from Vision Foun
dational Models to guide a student model in SFOD
 settings. Due to the excellent zero shot capa
bilities of the Vision Foundation Models (VFMs),
 they can effectively guide student models to learn
 the right representation, and distances between
 the samples, even when the target domain has a
 large shift from the source domain. This helps the
 model overcome mode collapse caused by biased
 pseudo-labels during unsupervised training.
 Through the integration of these approaches,
 we observe enhanced pseudo-label quality, leading
 to measurable gains on medical imaging bench
marks achieving a new state-of-the-art (SOTA) of 50.8 mAP in natural images for Cityscapes Ñ Foggy Cityscapes, beating the previous standard of 45.0 mAP by +5.8 mAP („13% performance gain).
          </p>
          
          <p className="text-justify leading-relaxed text-foreground">
            Our approach, as a self-supervised task on target images, enables the encoder to acquire domain-invariant features and learn 
            better target representations.
          </p>
        </div>

        <div className="text-center animate-fade-in">
          <img 
            src="https://private-user-images.githubusercontent.com/143424182/433229769-4d94ee45-185b-4e10-b97e-b0a36e3ff42e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI1OTA4NjIsIm5iZiI6MTc1MjU5MDU2MiwicGF0aCI6Ii8xNDM0MjQxODIvNDMzMjI5NzY5LTRkOTRlZTQ1LTE4NWItNGUxMC1iOTdlLWIwYTM2ZTNmZjQyZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxNVQxNDQyNDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ODU0NjA2NjJhMGM3ZGM4NzZhYmFkYjk0NzY3ZGRmMTA4MjU2MzhiN2NjNTNlNDViYjRkZTBmNWYyYWY5ZWM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.jfzdhGMeMzvAuAPHN8qJa2kMlIYnj5-P0C4y32jPJy4"
            alt="D-MASTER Architecture" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-medium hover-scale transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;