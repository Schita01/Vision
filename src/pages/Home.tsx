import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from 'react';
import StatsComponent from '../components/StatsComponent';

const Home = () => {
  const [sectionIndex, setSectionIndex] = useState(0); // State to track the current section index
  const [isScrolling, setIsScrolling] = useState(false); // State to prevent multiple scroll events
  const totalSections = 5; // Set the total number of sections to 4

  const handleScroll = useCallback(
    (event: { preventDefault: () => void; deltaY: number; }) => {
      if (isScrolling) return;
      event.preventDefault();
      setIsScrolling(true);

      if (event.deltaY > 0 && sectionIndex < totalSections - 1) {
        setSectionIndex((prevIndex) => prevIndex + 1);
      } else if (event.deltaY < 0 && sectionIndex > 0) {
        setSectionIndex((prevIndex) => prevIndex - 1);
      }

      setTimeout(() => setIsScrolling(false), 900);
    },
    [isScrolling, sectionIndex, totalSections]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  const sectionVariants = {
    enter: { opacity: 0, y: "100vh" },
    center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: "-100vh", transition: { duration: 0.5 } },
  };

  return (
    <div className="home">
      <motion.div
        className="section home_main"
        initial="enter"
        animate={sectionIndex === 0 ? "center" : "exit"}
        variants={sectionVariants}
      >
        <div className="page-container">
      <header className="header">
        <h1 className="main-title"><span className='world-computer-span'>WORLD</span> COMPUTER</h1>
        <p className="description">
          The Internet Computer hosts secure, network-resident code and data. <br />
          Build web apps without Big Tech and current IT. Applications are <br />
          immune to cyber attacks and unstoppable, capable of processing tokens, and <br />
          can run under exclusive DAO control. Build web3 social media, games,<br />
          DeFi, multi-chain apps, secure front-ends, ledgers, enterprise apps, and <br />
          AI models. The internet is evolving fast.
        </p>
        <div className="buttons-container">
          <button className="develop-button">DEVELOP</button>
          <button className="info-button">What is ICP</button>
          <button className="deck-button">Read the ICP Deck ↗</button>
        </div>
      </header>
      <section className="stats-section">
        <StatsComponent />
      </section>
    </div>
      </motion.div>

      <motion.div
        className="section home-info1"
        initial="enter"
        animate={sectionIndex === 1 ? "center" : "exit"}
        variants={sectionVariants}
      >
        <div className="content1">
          <div className="wallp-container">

          </div>
          <div className="info-container">
            <div className="info-title">
              <span className='info-activity'>Activity</span>
              <h2 className='info-title-h2'>The strongest ecosystem</h2>
            </div>
            <div className="info-number">
              <span className="info-num-title">Activity from all Ethereum networks</span>
              <div className="number-tags">
              <div className="info-num-left">
                <div className="info-num-left-top">
                  <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
                <div className="info-num-left-under">
                <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
              </div>
              <div className="info-num-right">
              <div className="info-num-left-top ns-1">
                  <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
                <div className="info-num-left-under ns-1">
                <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="section home-info2"
        initial="enter"
        animate={sectionIndex === 2 ? "center" : "exit"}
        variants={sectionVariants}
      >
         <div className="content2">
          <div className="wallp-container">

          </div>
          <div className="info-container">
            <div className="info-title">
              <span className='info-activity'>Activity</span>
              <h2 className='info-title-h2'>The strongest ecosystem</h2>
            </div>
            <div className="info-number">
              <span className="info-num-title">Activity from all Ethereum networks</span>
              <div className="number-tags">
              <div className="info-num-left">
                <div className="info-num-left-top">
                  <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
                <div className="info-num-left-under">
                <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
              </div>
              <div className="info-num-right">
              <div className="info-num-left-top ns-1">
                  <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
                <div className="info-num-left-under ns-1">
                <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="section home-info3"
        initial="enter"
        animate={sectionIndex === 3 ? "center" : "exit"}
        variants={sectionVariants}
      >
       <div className="content1">
          <div className="wallp-container">

          </div>
          <div className="info-container">
            <div className="info-title">
              <span className='info-activity'>Activity</span>
              <h2 className='info-title-h2'>The strongest ecosystem</h2>
            </div>
            <div className="info-number">
              <span className="info-num-title">Activity from all Ethereum networks</span>
              <div className="number-tags">
              <div className="info-num-left">
                <div className="info-num-left-top">
                  <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
                <div className="info-num-left-under">
                <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
              </div>
              <div className="info-num-right">
              <div className="info-num-left-top ns-1">
                  <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
                <div className="info-num-left-under ns-1">
                <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="section home-info2"
        initial="enter"
        animate={sectionIndex === 4 ? "center" : "exit"}
        variants={sectionVariants}
      >
         <div className="content2">
          <div className="wallp-container">

          </div>
          <div className="info-container">
            <div className="info-title">
              <span className='info-activity'>Activity</span>
              <h2 className='info-title-h2'>The strongest ecosystem</h2>
            </div>
            <div className="info-number">
              <span className="info-num-title">Activity from all Ethereum networks</span>
              <div className="number-tags">
              <div className="info-num-left">
                <div className="info-num-left-top">
                  <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
                <div className="info-num-left-under">
                <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
              </div>
              <div className="info-num-right">
              <div className="info-num-left-top ns-1">
                  <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
                <div className="info-num-left-under ns-1">
                <h3 className='info-num'>$126.6B</h3>
                  <p className='info-num-p'>Value locked in DeFi</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Home;
