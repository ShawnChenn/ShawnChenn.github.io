# Paper Title
Generative Image Dynamics

## Authors
Zhengqi Li, Noah Snavely

## Publication Venue and Date
2024

## Summary
This paper shows that spectral volumes are suitable for predicting motion from single images with diffusion models.

## Problem Statement
generate natural oscillation motions from a single still image.

## Methodology
present a new approach for modeling natural oscillation dynamics from a single still picture. 
Our image-space motion prior is represented with spectral volumes, a frequency representation of per-pixel motion trajectories, which we find to be efficient and effective for prediction with diffusion models, and which we learn from collections of real world videos. 

## To me, new knowledge
- Motion models and motion priors.
  [frequency-space spectral volume motion representation], this method can extract motion representation from a video sequence.

- The concept of image dynamics.
  ``
  [Visual vibration analysis, 2016]
  Regular cameras can be used to record and analyze the vibrations of visible objects. Through careful temporal analysis, we relate subtle changes in video to the vibrations of recorded surfaces, and use that information to reason about the physical properties of objects and the forces that drive their motion.
  ``

## Personal Thoughts
There are many different motion representations.
such as Videos as textures
Frequency-space spectral volume motion representation
When customize or edit motions for video, we can use these representations.

## Tags
#Motion representation #Real-world video learning

## Useful References
[1] Stochastic motion—motion under the influence of wind
[2] Multi-scale stochastic modelling of complex natural phenomena.
[3] Visual vibration analysis
