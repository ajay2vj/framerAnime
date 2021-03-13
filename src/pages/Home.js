import {React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Button } from 'react-bootstrap';
import bike from "../images/bike.svg";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
		transition:{
			delay:0.2, 
			duration:1
		}
  }
}
function Home(){

    return(
			<>
				<section id="home-section"></section>
				
				<section className="banner-content">
          <Container>
            <Row>
              <Col md={6}>
								
									<div className="sub-content-banner">
									<motion.div 
									variants={item}
									initial="hidden"
									animate="visible">
										<h2 style={{color: '#fff'}}>PizzaHut</h2>
									</motion.div>
										<motion.div initial={{opacity: 0}}
										 animate={{opacity: 1}}
										 transition={{delay:0.5, duration:2}}
										>
											<p style={{color:'#fff'}}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
										</motion.div>
										<motion.button 
											whileHover={{ 
												scale: 1.2, 
												rotate: 1,
												boxShadow: '0px 0px 8px rgb(255,255,255)'
											}} 
											whileTap={{
												scale: 0.2,
												rotate: -90,
											}}
											className="button">welcome</motion.button>
									</div>
								
              </Col>
							<Col md={6}>
								<div className="sub-content">
									<img src={bike} style={{width: '100%'}} alt="bike" />
								</div>
							</Col>
            </Row>
          </Container>
        </section>
				
			</>
    )
}

export default Home;