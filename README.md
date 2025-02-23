# React Native Dimensions API: Incorrect Dimensions on Initial Render

This repository demonstrates a common issue encountered when using the `Dimensions` API in React Native to obtain screen dimensions.  The problem lies in the asynchronous nature of the API; the dimensions aren't immediately available, leading to incorrect initial renders.

The `DimensionsBug.js` file showcases the bug: the component renders with inaccurate dimensions initially. The `DimensionsBugSolution.js` file provides a solution to mitigate this problem using the `useEffect` hook and the `Layout` API. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` (or iOS equivalent).
4. Observe the initial render; it will have incorrect dimensions.
5. The solution shows how to correctly obtain the dimensions using useEffect and Layout.

## Solution

The solution uses `useEffect` to handle the asynchronous nature of `Dimensions.get`. Once the dimensions are available, the component re-renders with the correct values.  This is a more robust and reliable approach than relying on an immediate value.