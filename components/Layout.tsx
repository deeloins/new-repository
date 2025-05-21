import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }} /* Adjust for instant effect */
        style={{ backgroundColor: router.route === "/mycare-case-study" ? "#202020" : "#616161" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
