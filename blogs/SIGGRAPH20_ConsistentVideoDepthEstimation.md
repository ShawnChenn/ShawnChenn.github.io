# Paper Title
Consistent Video Depth Estimation

## Authors
XUAN LUO, Jiabin Huang

## Publication Venue and Date
2020

## Summary
Unlike the ad-hoc priors in classical reconstruction, we use a learning-based prior, i.e., a convolutional neural network trained for single-image depth estimation. At test time, we fine-tune this network to satisfy the geometric constraints of a particular input video, while retaining its ability to synthesize plausible depth details in parts of the video that are less constrained. [high reconstruction acc and geometric consistency.]

## Problem Statement
Take a monocular video as input and estimates a camera pose as well as a dense, geometrically consistent depth map (up to scale ambiguity) for each video frame.

## Challenges
- The typical problems that any reconstruction system has to deal with, such as poorly textured areas, repetitive patterns, and occlusions. 
- Additional challenges with video: higher noise level, shake and motion blur, rolling shutter deformations, small baseline between adjacent frames, and, often, the presence of
dynamic objects, such as people.

## Methodology
Test-time finetuning.
Given a frame pair, we can obtain optical flow field. Then we can use the flow to test the geometric consistency of the depth estimates. If the flow is correct, a flow-displaced point is identical to the depth-reprojected point.

## To me, new knowledge
- The improved quality and consistency of our depth videos enable interesting new applications, such as fully-automatic video special effects that interact with the dense scene content.

## Personal Thoughts
Other methods of Test-time training 

## Tags
#Video depth