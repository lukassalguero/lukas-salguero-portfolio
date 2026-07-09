import { motion, type Variants, type HTMLMotionProps } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/** Fades an element in with a noticeable upward slide as it enters the viewport, replaying every time. */
export function Reveal(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeUp}
      {...props}
    />
  );
}

/** Wraps a group of RevealItem children so they animate in one after another (staggered). */
export function RevealGroup(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={staggerContainer}
      {...props}
    />
  );
}

/** A single staggered child of RevealGroup — inherits timing from its parent's viewport trigger. */
export function RevealItem(props: HTMLMotionProps<"div">) {
  return <motion.div variants={fadeUp} {...props} />;
}
