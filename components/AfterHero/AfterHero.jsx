import React from "react";
import AfterHerocss from "./AfterHero.module.css";

function AfterHero() {
  return (
    <div className={AfterHerocss.container_main}>
      <h1 className={AfterHerocss.heding}>Why Choose Us ?</h1>
      <div className={AfterHerocss.container1}>
        <div className={AfterHerocss.container}>
          <div className={AfterHerocss.item}>
          <img src="/images/patient.jpg" alt="Appointment" width={'290px'}   />
            <h2>Patient Management</h2>
            <p>Track patient history and records.</p>
          </div>
          <div className={AfterHerocss.item}>
            {" "}
            <img src="/images/Appointment.jpg" alt="Appointment" width={'290px'}   />
            <h2>Appointment Scheduling</h2>
            <p>Automate & manage bookings.</p>
          </div>
          <div className={AfterHerocss.item}>
            {" "}
            <img src="/images/Prescription.jpg" alt="Prescription" width={'290px'}   />
            <h2 style={{fontSize:'22px'}}>Prescription Management</h2>
            <p style={{fontSize:'18px'}}>Generate and store digital prescriptions.</p>
          </div>
          <div className={AfterHerocss.item}>
            {" "}
            <img src="/images/analitical.jpg" alt="Appointment" width={'290px'}   />
            <h2>Analytics Dashboard</h2>
            <p>View real-time reports & insights.</p>
          </div>
          <div className={AfterHerocss.item}>
            {" "}
            <img src="/images/secure.jpg" alt="Appointment" width={'290px'}   />
            <h2> Secure & Compliant</h2>
            <p>Data privacy & HIPAA compliant system</p>
          </div>
          <div style={{width:'900px', marginTop:'40px'}}>
            <p> <i>Our Medical CRM streamlines patient management, appointment scheduling, prescription handling, and analytics while ensuring data security and compliance. Doctors can easily track medical history, automate bookings with reminders, and generate digital prescriptions for seamless medication tracking. A real-time analytics dashboard provides insights into patient trends and hospital performance. With end-to-end encryption, role-based access, and HIPAA/GDPR compliance, we ensure secure and efficient healthcare management. Cloud-based, user-friendly, and scalable, our system is the perfect digital solution for modern clinics and hospitals. </i></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterHero;
