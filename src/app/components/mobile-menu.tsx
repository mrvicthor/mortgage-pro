import { containerVariants, itemVariants } from "@/utils";
import { motion, AnimatePresence } from "motion/react";

type MobileMenuProps = {
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
};

const MobileMenu = ({ handleMenu, showMenu }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {showMenu ? (
        <motion.section
          initial={{ height: 0 }}
          animate={{ height: "30vh" }}
          exit={{
            height: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className="md:hidden fixed top-24 left-0 w-full px-4 flex-col z-50 bg-transparent"
        >
          <motion.ul
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className=" flex gap-6 py-6 px-4 flex-col divide-y-2 divide-gray-100 bg-white rounded-2xl"
          >
            <motion.li
              className="capitalize text-[#B35F00] cursor-pointer py-2"
              variants={itemVariants}
            >
              <a href="#" onClick={() => handleMenu(!showMenu)}>
                about us
              </a>
            </motion.li>
            <motion.li
              className="capitalize text-[#B35F00] cursor-pointer py-2"
              variants={itemVariants}
            >
              <a href="#" onClick={() => handleMenu(!showMenu)}>
                pricing
              </a>
            </motion.li>

            <motion.li
              className="capitalize text-[#B35F00] cursor-pointer py-2"
              variants={itemVariants}
            >
              <a href="#" onClick={() => handleMenu(!showMenu)}>
                features
              </a>
            </motion.li>
            <motion.li
              className="capitalize text-[#B35F00] cursor-pointer py-2"
              variants={itemVariants}
            >
              <a href="#" onClick={() => handleMenu(!showMenu)}>
                investor relation
              </a>
            </motion.li>
          </motion.ul>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileMenu;
