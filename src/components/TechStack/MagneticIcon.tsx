import { useEffect, useRef, type ComponentType } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// How close (px) the cursor needs to get before the icon starts reacting.
const ACTIVATION_RADIUS = 90;
// How far (px) the icon is allowed to drift toward the cursor.
const MAX_PULL = 14;

const SPRING = { stiffness: 200, damping: 15, mass: 0.3 };

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

type MagneticIconProps = {
  icon: ComponentType<{ className?: string }>;
  className?: string;
};

// Wraps a tech-stack icon so it "floats" toward the cursor once the cursor
// comes within ACTIVATION_RADIUS of its center, clamped to MAX_PULL, and
// springs back to rest once the cursor moves away or leaves the page.
export default function MagneticIcon({ icon: Icon, className }: MagneticIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING);
  const y = useSpring(rawY, SPRING);

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      // Ignore touch/pen drags — the magnetic effect only makes sense for a hovering mouse.
      if (e.pointerType !== "mouse") return;

      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy);
     

      if (distance >= ACTIVATION_RADIUS) {
        rawX.set(0);
        rawY.set(0);
        return;
      }

      // Pull strength falls off linearly from 1 (cursor on center) to 0 (edge of radius).
      const pull = 1 - distance / ACTIVATION_RADIUS;
    
      rawX.set(clamp(dx * pull, -MAX_PULL, MAX_PULL));
      rawY.set(clamp(dy * pull, -MAX_PULL, MAX_PULL));
    
    }

    function handlePointerLeaveWindow() {
      rawX.set(0);
      rawY.set(0);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeaveWindow);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeaveWindow);
    };
  }, [rawX, rawY]);

  return (
    <motion.div ref={ref} style={{ x, y }}>
      <Icon className={className} />
    </motion.div>
  );
}
