import {React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Button } from 'react-bootstrap';
import bike from "../images/bike.svg";
function Home(){

    return(
			<>
				<section id="home-section"></section>
				
				<section className="banner-content">
          <Container>
            <Row>
              <Col md={6}>
								
									<div className="sub-content-banner">
									<motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
										<motion.h2 animate={{color:'#9c9b9b'}}>PizzaHut</motion.h2>
									</motion.div>
										<motion.div initial={{opacity: 0}}
										 animate={{opacity: 1}}
										 transition={{delay:0.5, duration:2}}
										>
											<p style={{color:'#fff'}}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
										</motion.div>
										<motion.div whileHover={{ scale: 1.2, rotate: 1}}
											whileTap={{
												scale: 0.2,
												rotate: -90,
											}}
											><Button variant="primary" className="btn-anime">welcome</Button></motion.div>
									</div>
								
              </Col>
							<Col md={6}>
								<div className="sub-content">
									<img src={bike} style={{width: '100%'}} />
								</div>
							</Col>
            </Row>
          </Container>
        </section>
				
			</>
    )
}

export default Home;