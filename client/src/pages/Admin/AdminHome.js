import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import { Typewriter } from 'react-simple-typewriter';

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
          Welcome Admin!
            <span style={{fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#92001e'}}>
              <Typewriter
                words={[` ${user?.name}`]} // Include only the user's name in the words array
                loop={0}
                cursor
                cursorStyle=''
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2200}
              />
            </span>
          </h1>
          
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
          <span style={{fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#00203FFF'}}>
            Welcome to the Admin Dashboard of the Blood Bank App. As an admin, you play a crucial role in managing the operations of the blood bank effectively. This platform is designed with the utmost precision and care, ensuring a seamless experience for all users. Our goal is to provide a comprehensive solution for blood bank management, making it easier for you to oversee operations and make informed decisions. Your dedication and efforts contribute significantly to saving lives and making a positive impact on our community.
            <br /><br />
            We understand the importance of your role and have equipped this platform with advanced features and tools to assist you. From tracking blood donations to managing inventory and coordinating with hospitals, every aspect is covered. We believe in the power of technology to transform lives, and this platform is a testament to that belief.
            <br /><br />
            Our team has worked tirelessly to ensure the highest standards of quality and efficiency. We have incorporated feedback from users like you to make this platform as user-friendly and intuitive as possible. Every detail has been meticulously planned and executed to provide you with a superior user experience.
            <br /><br />
            Together, we can make a significant difference in the healthcare sector and save countless lives. Thank you for being a part of this journey. We look forward to achieving great things together. Remember, every drop of blood can save a life. Let’s make every drop count. Welcome to a new era of blood bank management. Welcome to the future.
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
