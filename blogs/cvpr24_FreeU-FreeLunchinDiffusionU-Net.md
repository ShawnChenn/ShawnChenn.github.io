# Paper Title
FreeU: Free Lunch in Diffusion U-Net

## Authors
Chenyang Si, Ziwei Liu

## Publication Venue and Date
2024

## Summary
这篇文章主要讨论UNet里的backbone feature和skip-connection feature对图像合成质量的影响
Unet skip connection mainly introduce high-frequency features into the decoder module, which would cause the network overlook the backbone semantic features. Thus, this paper proposes a re-weighting strategy, which benefit image and video generation tasks. 

## Problem Statement
- Without fine-tuning or additional training, how to adaptively balance the two components (i.e., backbone and skip features) of the U-Net architecture for improving generation quality? 

## Methodology
- Enhancing backbone features effectively bolsters the denoising capability of the U-Net architecture, thereby
contributing to a superior output in terms of both fidelity and detail preservation. [confine the scaling operation to the half channels of backbone features]
- moreover, to mitigate oversmoothing of textures, skip feature scaling factors are introduced. [spectral modulation in the Fourier domain]

## To me, new knowledge
- Low-frequency components inherently embody the global structure and characteristics of an image,encompassing global layouts and smooth color. These components encapsulate the foundational global elements that constitute the image’s essence and representation.

- High-frequency components contain
the rapid changes in the images, such as edges and textures.
These finer details are markedly sensitive to noise, often
manifesting as random high-frequency information when
noise is introduced to an image.

- relative log amplitudes of Fourier can visualize the ratio of low-frequency and high-frequency components in an image.

## Personal Thoughts
hyperparameter tuning of backbone and skip connection scaling factors

## Tags
# Image Fourier Transform  # Tuning-free 

## 关于StableVideoDiffusion解析比较全面的博客
https://zhouyifan.net/