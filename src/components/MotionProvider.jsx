"use client";

import { MotionConfig } from "framer-motion";

// Honours the OS "reduce motion" setting for every framer-motion animation.
const MotionProvider = ({ children }) => <MotionConfig reducedMotion="user">{children}</MotionConfig>;

export default MotionProvider;
