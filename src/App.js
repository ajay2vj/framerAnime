import { motion } from "framer-motion"

function App() {
  return (
    <div className="framer-anime">
      <motion.h1 animate={{fontSize: 50, color: '#ff2994', textAlign: 'center', rotateZ: 10}}>Framer Animation</motion.h1>
    </div>
  );
}

export default App;

